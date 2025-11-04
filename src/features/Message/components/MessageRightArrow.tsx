import { StyleSheet, View } from 'react-native';

import { colors } from '@/ui/theme';

export function MessageRightArrow() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 12,
    borderLeftWidth: 20,
    borderTopColor: 'transparent',
    borderLeftColor: colors.secondary,
    marginLeft: -16,
  },
});
