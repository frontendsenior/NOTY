import { Dispatch, useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Input } from '@/ui/kit';

import { MessageSendButton } from './MessageSendButton';

type Props = {
  onSubmit: Dispatch<string>;
  isDisabled: boolean;
};

export function MessageInput({ onSubmit, isDisabled }: Props) {
  const [message, setMessage] = useState('');

  const handleSubmit = useCallback(() => {
    onSubmit(message);
    setMessage('');
  }, [message, onSubmit]);

  return (
    <View style={styles.inputContainer}>
      <Input.Text
        value={message}
        disabled={isDisabled}
        placeholder="What are you asked for?"
        onChange={setMessage}
        onSubmit={handleSubmit}
        multiline
      />

      <MessageSendButton onPress={handleSubmit} disabled={isDisabled} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
});
