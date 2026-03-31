import { Platform } from 'react-native';

export const colors = {
  background: '#F5F2E9',
  surface: '#FBF8F2',
  surfaceMuted: '#F1ECE2',
  surfaceSoft: '#EFE7D7',
  surfaceTint: '#EBDCD1',
  surfaceGlass: '#FBF8F2E8',
  surfaceInverse: '#2D2926',
  text: '#2D2926',
  textMuted: '#5E5954',
  textSubtle: '#7A736C',
  textInverse: '#F5F2E9',
  border: '#DCD8CB',
  borderSoft: '#E5DECF',
  terracotta: '#B56A4A',
  terracottaSoft: '#F3C8B3',
  olive: '#7D6B3D',
  oliveSoft: '#E4EBD9',
  blueBadge: '#6C8FA6',
  blueBadgeSoft: '#C9D9E3',
  orangeBadge: '#C8844E',
  cream: '#EEE5D7',
  white: '#FFFFFF',
  shadow: '#8C7A541A',
} as const;

export const fontFamilies = {
  brand: 'CormorantGaramond_700Bold',
  brandSemiBold: 'CormorantGaramond_600SemiBold',
  heading: 'NotoSerifSC_700Bold',
  body: 'NotoSansSC_500Medium',
  bodySemiBold: 'NotoSansSC_600SemiBold',
  bodyBold: 'NotoSansSC_700Bold',
  label: 'NotoSansSC_600SemiBold',
  status: 'NotoSansSC_700Bold',
} as const;

export const radii = {
  chip: 999,
  input: 22,
  card: 24,
  panel: 28,
  hero: 30,
  shell: 36,
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  page: 20,
} as const;

export const shadows = Platform.select({
  ios: {
    shadowColor: '#7D6B3D',
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.1,
    shadowRadius: 42,
  },
  android: {
    elevation: 6,
  },
  default: {},
});
