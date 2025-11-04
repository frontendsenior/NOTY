import { createContext, Dispatch, useContext } from 'react';

export type ToggleContextType = {
  currentValue: string;
  onValueChange: Dispatch<string>;
  disabled: boolean;
};

export const ToggleContext = createContext<ToggleContextType | null>(null);

export function useToggleContext() {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error('useToggleContext must be used within a ToggleProvider');
  }

  return context;
}
