import { useState, useCallback, useMemo } from "react";

export interface WalkableField {
  name: string;
  label: string;
  type?: string;
  options?: string[];
  placeholder?: string;
}

const SKIP_VALUES = new Set(["skip", "undecided", "n/a", "na", ""]);

export function useFieldWalker(fields: WalkableField[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});
  const [inputValue, setInputValue] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const currentField = fields[currentIndex] ?? null;

  const filledCount = useMemo(
    () => fields.filter((f) => values[f.name] !== undefined).length,
    [fields, values]
  );

  const confirmValue = useCallback(
    (raw?: string) => {
      if (!currentField) return false;
      const val = (raw ?? inputValue).trim();
      const normalized = SKIP_VALUES.has(val.toLowerCase()) ? "" : val;

      setValues((prev) => ({ ...prev, [currentField.name]: normalized }));
      setInputValue("");

      if (currentIndex < fields.length - 1) {
        setCurrentIndex((i) => i + 1);
        return false;
      }

      setIsComplete(true);
      return true;
    },
    [currentIndex, currentField, fields.length, inputValue]
  );

  const skipField = useCallback(() => confirmValue("skip"), [confirmValue]);

  const goBack = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      const prevField = fields[currentIndex - 1];
      setInputValue(values[prevField.name] ?? "");
    }
  }, [currentIndex, fields, values]);

  const reset = useCallback(() => {
    setCurrentIndex(0);
    setValues({});
    setInputValue("");
    setIsComplete(false);
  }, []);

  return {
    currentField,
    currentIndex,
    values,
    inputValue,
    setInputValue,
    isComplete,
    filledCount,
    totalFields: fields.length,
    confirmValue,
    skipField,
    goBack,
    reset,
  };
}
