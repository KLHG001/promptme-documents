import { useState, useRef, useCallback, useEffect } from "react";

interface UseVoiceInputOptions {
  onTranscript: (text: string) => void;
  onError?: (message: string) => void;
}

export function useVoiceInput({ onTranscript, onError }: UseVoiceInputOptions) {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const isListeningRef = useRef(false);
  const lastFinalRef = useRef("");
  const lastFinalAtRef = useRef(0);

  useEffect(() => {
    return () => {
      isListeningRef.current = false;
      recognitionRef.current?.stop();
    };
  }, []);

  const initRecognition = useCallback(() => {
    const SpeechRecognitionCtor =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognitionCtor) {
      onError?.("Speech recognition isn't supported in this browser. You can still type.");
      return null;
    }

    const recognition = new SpeechRecognitionCtor();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (!result.isFinal) continue;
        const transcript = result[0].transcript.trim();
        if (!transcript) continue;

        const now = Date.now();
        if (
          transcript === lastFinalRef.current &&
          now - lastFinalAtRef.current < 3000
        ) {
          continue;
        }
        lastFinalRef.current = transcript;
        lastFinalAtRef.current = now;
        onTranscript(transcript);
      }
    };

    recognition.onend = () => {
      if (isListeningRef.current) {
        try {
          recognition.start();
        } catch {
          isListeningRef.current = false;
          setIsListening(false);
        }
      } else {
        setIsListening(false);
      }
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      if (event.error === "not-allowed") {
        onError?.("Microphone permission denied. Please allow access in your browser settings.");
        isListeningRef.current = false;
        setIsListening(false);
      }
    };

    return recognition;
  }, [onTranscript, onError]);

  const toggle = useCallback(() => {
    if (isListeningRef.current) {
      isListeningRef.current = false;
      recognitionRef.current?.stop();
      setIsListening(false);
      lastFinalRef.current = "";
      lastFinalAtRef.current = 0;
      return;
    }

    if (!recognitionRef.current) recognitionRef.current = initRecognition();
    if (!recognitionRef.current) return;

    lastFinalRef.current = "";
    lastFinalAtRef.current = 0;
    isListeningRef.current = true;
    setIsListening(true);
    try {
      recognitionRef.current.start();
    } catch {
      isListeningRef.current = false;
      setIsListening(false);
    }
  }, [initRecognition]);

  const stop = useCallback(() => {
    isListeningRef.current = false;
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  return { isListening, toggle, stop };
}
