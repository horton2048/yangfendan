import { Pressable, StyleSheet, Text } from 'react-native';

import { colors, fontFamilies, radii } from '@/theme/tokens';

type PillProps = {
  active?: boolean;
  displayFont?: boolean;
  label: string;
  onPress?: () => void;
};

export function Pill({ active = false, displayFont = false, label, onPress }: PillProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        active ? styles.active : styles.inactive,
        pressed && onPress ? styles.pressed : null,
      ]}>
      <Text
        style={[
          styles.label,
          displayFont ? styles.displayLabel : null,
          active ? styles.activeLabel : styles.inactiveLabel,
        ]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    borderRadius: radii.chip,
    justifyContent: 'center',
    minHeight: 42,
    minWidth: 94,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  active: {
    backgroundColor: colors.terracotta,
  },
  inactive: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
  },
  pressed: {
    opacity: 0.86,
  },
  label: {
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 13,
    lineHeight: 18,
  },
  displayLabel: {
    fontFamily: fontFamilies.brandSemiBold,
    fontSize: 16,
    lineHeight: 18,
  },
  activeLabel: {
    color: colors.textInverse,
  },
  inactiveLabel: {
    color: colors.textMuted,
  },
});
