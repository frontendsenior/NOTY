import { Dispatch } from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputSubmitEditingEvent,
} from 'react-native';

import { colors } from '../../theme';

type Props = {
  value: string;
  placeholder?: string;
  multiline?: boolean;
  disabled?: boolean;
  onChange: Dispatch<string>;
  onSubmit: Dispatch<TextInputSubmitEditingEvent>;
};

export function InputText({
  value,
  placeholder = '',
  multiline = false,
  disabled = false,
  onChange,
  onSubmit,
}: Props) {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      onSubmitEditing={onSubmit}
      placeholder={placeholder}
      submitBehavior="blurAndSubmit"
      textContentType="none"
      multiline={multiline}
      autoCorrect={false}
      editable={!disabled}
      style={[styles.input, disabled && styles.disabled]}
    />
  );
}

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    color: colors.primary,
    minHeight: 48,
    paddingHorizontal: 16,
    backgroundColor: colors.secondary,
    borderRadius: 24,
  },
  disabled: {
    backgroundColor: colors.disabled,
  },
});
