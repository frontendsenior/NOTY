import { Image, StyleSheet, View } from 'react-native';

import { colors } from '@/ui/theme';

export function MessageAvatar() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('@/assets/images/base-avatar.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    borderRadius: 20,
  },
  image: {
    width: 36,
    height: 36,
  },
});
