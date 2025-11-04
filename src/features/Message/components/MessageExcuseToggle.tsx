import { Dispatch } from 'react';
import { StyleSheet, Text } from 'react-native';

import { MESSAGE_EXCUSES_LABELS } from '@/models';
import { MessageExcuse } from '@/interfaces';
import { colors } from '@/ui/theme';
import { Toggle } from '@/ui/kit';

type Props = {
  excuse: MessageExcuse;
  onToggle: Dispatch<MessageExcuse>;
  isDisabled: boolean;
};

const EXCUSES = [MessageExcuse.EXCUSE, MessageExcuse.NORMAL];

export function MessageExcuseToggle({ excuse, onToggle, isDisabled }: Props) {
  return (
    <Toggle.Root
      currentValue={excuse}
      onValueChange={onToggle}
      disabled={isDisabled}
    >
      {EXCUSES.map(value => (
        <Toggle.Option key={value} value={value}>
          {({ isActive }) => (
            <Text style={[styles.reason, isActive && styles.active]}>
              {MESSAGE_EXCUSES_LABELS[value]}
            </Text>
          )}
        </Toggle.Option>
      ))}
    </Toggle.Root>
  );
}

const styles = StyleSheet.create({
  reason: {
    color: colors.primary,
  },
  active: {
    color: colors.secondary,
  },
});
