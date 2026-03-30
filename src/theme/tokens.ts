import { Platform } from 'react-native';

export const colors = {
  background: '#F6F0E6',
  surface: '#FFFDF9',
  surfaceMuted: '#F3E4CB',
  surfaceTint: '#E9D3B7',
  surfaceWarm: '#E6C79E',
  text: '#2D190E',
  textMuted: '#6A4C36',
  textSubtle: '#7E644F',
  accent: '#5A2C17',
  accentSoft: '#8E532E',
  accentGold: '#D9A25D',
  border: '#E8D7BE',
  white: '#FFFDF9',
} as const;

export const fontFamilies = {
  displayBold: 'CormorantGaramond_700Bold',
  displaySemiBold: 'CormorantGaramond_600SemiBold',
  serifBold: 'NotoSerifSC_700Bold',
  sansMedium: 'NotoSansSC_500Medium',
  sansSemiBold: 'NotoSansSC_600SemiBold',
  sansBold: 'NotoSansSC_700Bold',
} as const;

export const radii = {
  chip: 999,
  card: 24,
  hero: 28,
} as const;

export const shadows = Platform.select({
  ios: {
    shadowColor: colors.accent,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
  },
  android: {
    elevation: 4,
  },
  default: {},
});
