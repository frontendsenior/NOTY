import { Image, StyleSheet } from 'react-native';

import { Button } from '@/ui/kit';

type Props = {
  onPress: () => void;
  disabled: boolean;
};

export function MessageSendButton({ onPress, disabled }: Props) {
  return (
    <Button.Round onPress={onPress} disabled={disabled}>
      <Image
        style={styles.image}
        source={require('@/assets/images/arrow-up.png')}
      />
    </Button.Round>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
    objectFit: 'contain',
  },
});
