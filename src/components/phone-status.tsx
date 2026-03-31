import { StyleSheet, Text, View } from 'react-native';

import { colors, fontFamilies } from '@/theme/tokens';

export function PhoneStatus() {
  return (
    <View style={styles.row}>
      <Text style={styles.time}>9:41</Text>
      <Text style={styles.signal}>5G    86%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
    minHeight: 24,
  },
  time: {
    color: colors.text,
    fontFamily: fontFamilies.status,
    fontSize: 15,
  },
  signal: {
    color: colors.textMuted,
    fontFamily: fontFamilies.label,
    fontSize: 11,
    letterSpacing: 0.2,
  },
});
