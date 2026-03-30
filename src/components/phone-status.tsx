import { StyleSheet, Text, View } from 'react-native';

import { colors, fontFamilies } from '@/theme/tokens';

export function PhoneStatus() {
  return (
    <View style={styles.row}>
      <Text style={styles.time}>9:41</Text>
      <Text style={styles.signal}>5G 100%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 6,
  },
  time: {
    color: colors.text,
    fontFamily: fontFamilies.sansBold,
    fontSize: 15,
  },
  signal: {
    color: colors.textMuted,
    fontFamily: fontFamilies.sansSemiBold,
    fontSize: 12,
  },
});
