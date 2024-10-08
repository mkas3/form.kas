import { useEffect } from 'react';

export const useFormDefaultValue = <T>(
  defaultValue: T,
  value: T,
  onChange: (...event: unknown[]) => void
) => {
  useEffect(() => {
    if (value === undefined && defaultValue !== undefined) onChange(defaultValue);
  }, [defaultValue, value, onChange]);
};
