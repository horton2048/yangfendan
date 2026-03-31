import type { ImageSourcePropType } from 'react-native';

import { onboardingSlides } from '@/data/app-content';

export type OnboardingStep = {
  body: string;
  ctaLabel: string;
  footnote?: string;
  hero: ImageSourcePropType;
  key: 'belief' | 'agent' | 'feed';
  previewChips?: string[];
  quote?: string;
  showSkip?: boolean;
  stepLabel: string;
  subtitle?: string;
  title: string;
};

export const onboardingSteps: OnboardingStep[] = onboardingSlides;
