import { StyleSheet, View, Text } from 'react-native';

import { colors } from '../../theme';

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NO TY</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.primary,
  },
});
