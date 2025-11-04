import { StyleSheet, TouchableOpacity } from 'react-native';

import { colors } from '../../theme';

import { useToggleContext } from './context';

type RendererProps = {
  isActive: boolean;
};

type Props = {
  value: string;
  children: React.ReactNode | ((props: RendererProps) => React.ReactNode);
};

export function ToggleOption({ value, children }: Props) {
  const { currentValue, onValueChange, disabled } = useToggleContext();

  return (
    <TouchableOpacity
      key={value}
      onPress={() => onValueChange(value)}
      style={[
        styles.option,
        currentValue === value && styles.active,
        disabled && styles.disabled,
      ]}
      disabled={disabled}
    >
      {typeof children === 'function'
        ? children({ isActive: currentValue === value })
        : children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  option: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  active: {
    backgroundColor: colors.primary,
  },
  disabled: {
    opacity: 0.5,
  },
});
