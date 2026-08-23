import { useEffect, useState } from "react";

/**
 * useState that mirrors itself into localStorage so progress
 * survives a refresh. Degrades gracefully when storage is unavailable.
 */
export function useStoredState<T>(
  key: string,
  initial: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw !== null) return JSON.parse(raw) as T;
    } catch {
      /* corrupted or unavailable — fall through to initial */
    }
    return initial;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* private mode, quota — state still works in-memory */
    }
  }, [key, value]);

  return [value, setValue];
}
