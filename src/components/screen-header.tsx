import { StyleSheet, Text, View } from 'react-native';

import { colors, fontFamilies } from '@/theme/tokens';

type ScreenHeaderProps = {
  badge?: string;
  badgeDot?: boolean;
  eyebrow?: string;
  subtitle: string;
  title: string;
};

export function ScreenHeader({
  badge,
  badgeDot = false,
  eyebrow,
  subtitle,
  title,
}: ScreenHeaderProps) {
  return (
    <View style={styles.wrapper}>
      {badge || eyebrow ? (
        <View style={styles.topRow}>
          {badge ? (
            <View style={styles.badge}>
              {badgeDot ? <View style={styles.badgeDot} /> : null}
              <Text style={styles.badgeText}>{badge}</Text>
            </View>
          ) : (
            <View />
          )}
          {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
        </View>
      ) : null}

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: 10,
  },
  topRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badge: {
    alignItems: 'center',
    backgroundColor: '#FFFFFFA6',
    borderColor: colors.border,
    borderRadius: 999,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  badgeDot: {
    backgroundColor: colors.terracotta,
    borderRadius: 4,
    height: 8,
    width: 8,
  },
  badgeText: {
    color: colors.text,
    fontFamily: fontFamilies.label,
    fontSize: 13,
    letterSpacing: 0.2,
  },
  eyebrow: {
    color: colors.textMuted,
    fontFamily: fontFamilies.label,
    fontSize: 11,
    letterSpacing: 0.2,
  },
  title: {
    color: colors.text,
    fontFamily: fontFamilies.heading,
    fontSize: 38,
    lineHeight: 50,
  },
  subtitle: {
    color: colors.textMuted,
    fontFamily: fontFamilies.body,
    fontSize: 16,
    lineHeight: 24,
  },
});
