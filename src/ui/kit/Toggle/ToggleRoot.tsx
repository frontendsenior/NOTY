import { StyleSheet, View } from 'react-native';
import { PropsWithChildren, Dispatch, useMemo } from 'react';

import { colors } from '../../theme';

import { ToggleContext, ToggleContextType } from './context';

type Props<T> = PropsWithChildren & {
  currentValue: T;
  onValueChange: Dispatch<T>;
  disabled: boolean;
};

export function ToggleRoot<T extends string>({
  currentValue,
  onValueChange,
  disabled,
  children,
}: Props<T>) {
  const ctxValue = useMemo(
    () => ({ currentValue, onValueChange, disabled }),
    [currentValue, onValueChange, disabled],
  );

  return (
    <ToggleContext.Provider value={ctxValue as unknown as ToggleContextType}>
      <View style={[styles.container, disabled && styles.disabled]}>
        {children}
      </View>
    </ToggleContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 4,
    height: 48,
    padding: 4,
    backgroundColor: colors.secondary,
    borderRadius: 24,
  },
  disabled: {
    backgroundColor: colors.disabled,
  },
});
