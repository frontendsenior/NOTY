import { Dispatch } from 'react';
import { Image, StyleSheet } from 'react-native';

import { MESSAGE_TONES_IMAGES } from '@/models';
import { MessageTone } from '@/interfaces';
import { Toggle } from '@/ui/kit';

type Props = {
  tone: MessageTone;
  onToggle: Dispatch<MessageTone>;
  isDisabled: boolean;
};

const TONES = [
  MessageTone.SARCASTIC,
  MessageTone.NEUTRAL,
  MessageTone.FRIENDLY,
];

export function MessageEmotionToggle({ tone, onToggle, isDisabled }: Props) {
  return (
    <Toggle.Root
      currentValue={tone}
      onValueChange={onToggle}
      disabled={isDisabled}
    >
      {TONES.map(value => (
        <Toggle.Option key={value} value={value}>
          <Image style={styles.emotion} source={MESSAGE_TONES_IMAGES[value]} />
        </Toggle.Option>
      ))}
    </Toggle.Root>
  );
}

const styles = StyleSheet.create({
  emotion: {
    width: 24,
    height: 24,
  },
});
