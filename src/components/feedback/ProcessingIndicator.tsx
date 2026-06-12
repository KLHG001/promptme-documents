import { ProgressIndicator, type ProgressIndicatorProps } from "./ProgressIndicator";

/** @deprecated Use ProgressIndicator — kept for existing imports */
export type ProcessingIndicatorProps = ProgressIndicatorProps;

export function ProcessingIndicator(props: ProgressIndicatorProps) {
  return <ProgressIndicator {...props} />;
}
