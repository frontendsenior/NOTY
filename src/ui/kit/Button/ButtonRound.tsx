import { PropsWithChildren } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { colors } from '../../theme';

type Props = PropsWithChildren & {
  onPress: () => void;
  disabled?: boolean;
};

export function ButtonRound({ onPress, disabled = false, children }: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: colors.secondary,
    borderRadius: 24,
  },
  disabled: {
    backgroundColor: colors.disabled,
  },
});
