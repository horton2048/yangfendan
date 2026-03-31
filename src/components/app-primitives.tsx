import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import { colors, fontFamilies, radii } from '@/theme/tokens';

type ButtonProps = {
  label: string;
  onPress?: () => void;
  tone?: 'primary' | 'olive' | 'outline' | 'dark';
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

type ChipProps = {
  label: string;
  selected?: boolean;
  tone?: 'terracotta' | 'olive' | 'default' | 'inverse' | 'soft';
  onPress?: () => void;
  rightAdornment?: 'dot' | 'text';
  adornmentText?: string;
  style?: StyleProp<ViewStyle>;
  compact?: boolean;
};

type IconButtonProps = {
  icon: keyof typeof MaterialIcons.glyphMap;
  onPress?: () => void;
};

export function AppButton({
  disabled = false,
  label,
  onPress,
  style,
  tone = 'primary',
}: ButtonProps) {
  const buttonTone =
    tone === 'olive'
      ? styles.buttonOlive
      : tone === 'outline'
        ? styles.buttonOutline
        : tone === 'dark'
          ? styles.buttonDark
          : styles.buttonPrimary;

  const textTone =
    tone === 'outline' ? styles.buttonOutlineText : styles.buttonFilledText;

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.buttonBase,
        buttonTone,
        pressed && !disabled ? styles.pressed : null,
        disabled ? styles.disabled : null,
        style,
      ]}>
      <Text style={[styles.buttonText, textTone]}>{label}</Text>
    </Pressable>
  );
}

export function AppChip({
  adornmentText,
  compact = false,
  label,
  onPress,
  rightAdornment,
  selected = false,
  style,
  tone = 'default',
}: ChipProps) {
  const selectedTone =
    tone === 'olive'
      ? styles.chipOlive
      : tone === 'inverse'
        ? styles.chipInverse
        : tone === 'soft'
          ? styles.chipSoft
          : styles.chipTerracotta;

  const baseTone = tone === 'inverse' ? styles.chipInverseBase : styles.chipBase;
  const labelTone =
    selected || tone === 'inverse'
      ? tone === 'inverse'
        ? styles.chipLabelInverse
        : styles.chipLabelSelected
      : tone === 'soft'
        ? styles.chipLabelSoft
        : styles.chipLabel;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        compact ? styles.chipCompact : styles.chip,
        selected ? selectedTone : baseTone,
        pressed && onPress ? styles.pressed : null,
        style,
      ]}>
      <Text style={[styles.chipText, labelTone]}>{label}</Text>
      {rightAdornment === 'dot' ? <View style={styles.dot} /> : null}
      {rightAdornment === 'text' && adornmentText ? (
        <Text style={[styles.chipAdornment, labelTone]}>{adornmentText}</Text>
      ) : null}
    </Pressable>
  );
}

export function SectionLabel({ children }: { children: string }) {
  return <Text style={styles.sectionLabel}>{children}</Text>;
}

export function IconCircleButton({ icon, onPress }: IconButtonProps) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.iconButton, pressed ? styles.pressed : null]}>
      <MaterialIcons color={colors.text} name={icon} size={22} />
    </Pressable>
  );
}

export function TextLink({
  children,
  onPress,
  style,
}: {
  children: string;
  onPress?: () => void;
  style?: TextStyle;
}) {
  return (
    <Pressable onPress={onPress}>
      <Text style={[styles.textLink, style]}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonBase: {
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    minHeight: 56,
    paddingHorizontal: 20,
  },
  buttonPrimary: {
    backgroundColor: colors.terracotta,
  },
  buttonOlive: {
    backgroundColor: colors.olive,
  },
  buttonOutline: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
  },
  buttonDark: {
    backgroundColor: colors.surfaceInverse,
  },
  buttonText: {
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 15,
  },
  buttonFilledText: {
    color: colors.textInverse,
  },
  buttonOutlineText: {
    color: colors.text,
  },
  chip: {
    alignItems: 'center',
    borderRadius: radii.chip,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    minHeight: 38,
    paddingHorizontal: 14,
  },
  chipCompact: {
    alignItems: 'center',
    borderRadius: radii.chip,
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    minHeight: 32,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  chipBase: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
  },
  chipInverseBase: {
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  chipTerracotta: {
    backgroundColor: colors.terracotta,
  },
  chipOlive: {
    backgroundColor: colors.olive,
  },
  chipInverse: {
    backgroundColor: colors.surfaceInverse,
  },
  chipSoft: {
    backgroundColor: colors.surfaceSoft,
  },
  chipText: {
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 12,
  },
  chipLabel: {
    color: colors.text,
  },
  chipLabelSelected: {
    color: colors.textInverse,
  },
  chipLabelInverse: {
    color: colors.textInverse,
  },
  chipLabelSoft: {
    color: colors.olive,
  },
  chipAdornment: {
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 12,
  },
  dot: {
    backgroundColor: colors.terracotta,
    borderRadius: 4,
    height: 8,
    width: 8,
  },
  sectionLabel: {
    color: colors.textMuted,
    fontFamily: fontFamilies.label,
    fontSize: 11,
    letterSpacing: 0.4,
  },
  iconButton: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 19,
    borderWidth: 1,
    height: 38,
    justifyContent: 'center',
    width: 46,
  },
  textLink: {
    color: colors.terracotta,
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 14,
  },
  pressed: {
    opacity: 0.86,
  },
  disabled: {
    opacity: 0.55,
  },
});
