import { StyleSheet, View } from 'react-native';

import { colors } from '@/ui/theme';

export function MessageLeftArrow() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 12,
    borderRightWidth: 20,
    borderTopColor: 'transparent',
    borderRightColor: colors.secondary,
    marginRight: -16,
  },
});
