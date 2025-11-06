import { Image, StyleSheet, View } from 'react-native';

import { MESSAGE_TONES_IMAGES } from '@/models';
import { MessageTone } from '@/interfaces';
import { colors } from '@/ui/theme';

type Props = {
  tone: MessageTone;
};

export function MessageEmotion({ tone }: Props) {
  return (
    <View style={styles.emotionContainer}>
      <Image style={styles.emotion} source={MESSAGE_TONES_IMAGES[tone]} />
    </View>
  );
}

const styles = StyleSheet.create({
  emotionContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    borderRadius: 20,
  },
  emotion: {
    width: 36,
    height: 36,
  },
});
