import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { AppButton, AppChip } from '@/components/app-primitives';
import { PhoneStatus } from '@/components/phone-status';
import type { OnboardingStep } from '@/data/onboarding';
import { colors, fontFamilies, radii } from '@/theme/tokens';

type OnboardingScreenProps = {
  index: number;
  onPrimaryAction: () => void;
  onSkip?: () => void;
  step: OnboardingStep;
  total: number;
};

export function OnboardingScreen({
  index,
  onPrimaryAction,
  onSkip,
  step,
  total,
}: OnboardingScreenProps) {
  return (
    <ScrollView bounces={false} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <PhoneStatus />

      <View style={styles.heroShell}>
        {step.key === 'feed' ? (
          <LinearGradient colors={['#EFE5D6', colors.background]} style={styles.logoHero}>
            <Image contentFit="contain" source={step.hero} style={styles.logoPanel} transition={150} />
          </LinearGradient>
        ) : (
          <Image contentFit="cover" source={step.hero} style={styles.photoHero} transition={150} />
        )}

        {step.showSkip ? (
          <Pressable onPress={onSkip} style={styles.skipPill}>
            <Text style={styles.skipText}>跳过</Text>
          </Pressable>
        ) : null}
      </View>

      <View style={styles.panel}>
        <Text style={styles.stepLabel}>{step.stepLabel}</Text>
        <Text style={styles.title}>{step.title}</Text>
        <Text style={styles.body}>{step.body}</Text>

        {step.key === 'belief' && step.quote ? (
          <View style={styles.quoteCard}>
            <Text style={styles.quoteText}>{step.quote}</Text>
          </View>
        ) : null}

        {step.key === 'agent' && step.quote ? (
          <View style={styles.agentPreview}>
            {step.subtitle ? <Text style={styles.agentEyebrow}>{step.subtitle}</Text> : null}
            <Text style={styles.agentBody}>{step.quote}</Text>
          </View>
        ) : null}

        {step.key === 'feed' ? (
          <View style={styles.feedPreview}>
            <Text style={styles.previewLabel}>你会先看到</Text>
            <View style={styles.previewChipRow}>
              {step.previewChips?.map((chip, chipIndex) => (
                <AppChip
                  key={chip}
                  compact
                  label={chip}
                  selected={chipIndex === 0}
                  style={chipIndex === 0 ? undefined : styles.previewChip}
                />
              ))}
            </View>
            {step.footnote ? <Text style={styles.feedPreviewBody}>{step.footnote}</Text> : null}
          </View>
        ) : null}

        {step.key === 'agent' && step.previewChips?.length ? (
          <View style={styles.chipRow}>
            {step.previewChips.map((chip) => (
              <AppChip key={chip} label={chip} />
            ))}
          </View>
        ) : null}

        <View style={styles.dots}>
          {Array.from({ length: total }).map((_, dotIndex) => (
            <View
              key={dotIndex}
              style={[
                styles.dot,
                dotIndex === index ? styles.dotActive : null,
              ]}
            />
          ))}
        </View>

        <AppButton label={step.ctaLabel} onPress={onPrimaryAction} style={styles.fullButton} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 28,
  },
  heroShell: {
    marginBottom: -18,
    position: 'relative',
  },
  photoHero: {
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    height: 420,
    width: '100%',
  },
  logoHero: {
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    height: 420,
    justifyContent: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  logoPanel: {
    backgroundColor: colors.white,
    borderRadius: 34,
    height: 284,
    width: '100%',
  },
  skipPill: {
    alignItems: 'center',
    backgroundColor: '#FBF8F2CC',
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#FFFFFF66',
    height: 34,
    justifyContent: 'center',
    position: 'absolute',
    right: 24,
    top: 16,
    width: 74,
  },
  skipText: {
    color: colors.text,
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 13,
  },
  panel: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    gap: 14,
    minHeight: 476,
    paddingHorizontal: 24,
    paddingTop: 26,
    paddingBottom: 28,
  },
  stepLabel: {
    color: colors.textMuted,
    fontFamily: fontFamilies.label,
    fontSize: 11,
    letterSpacing: 0.4,
  },
  title: {
    color: colors.text,
    fontFamily: fontFamilies.heading,
    fontSize: 36,
    lineHeight: 48,
  },
  body: {
    color: colors.textMuted,
    fontFamily: fontFamilies.body,
    fontSize: 15,
    lineHeight: 24,
  },
  quoteCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 24,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  quoteText: {
    color: colors.text,
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 15,
    lineHeight: 22,
  },
  agentPreview: {
    backgroundColor: colors.surfaceInverse,
    borderRadius: 24,
    gap: 8,
    padding: 14,
  },
  agentEyebrow: {
    color: '#D6D0CA',
    fontFamily: fontFamilies.label,
    fontSize: 10,
    letterSpacing: 0.4,
  },
  agentBody: {
    color: colors.textInverse,
    fontFamily: fontFamilies.body,
    fontSize: 15,
    lineHeight: 22,
  },
  chipRow: {
    flexDirection: 'row',
    gap: 8,
  },
  feedPreview: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 24,
    borderWidth: 1,
    gap: 8,
    padding: 14,
  },
  previewLabel: {
    color: colors.textMuted,
    fontFamily: fontFamilies.label,
    fontSize: 11,
    letterSpacing: 0.4,
  },
  previewChipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  previewChip: {
    backgroundColor: colors.surface,
  },
  feedPreviewBody: {
    color: colors.textMuted,
    fontFamily: fontFamilies.body,
    fontSize: 15,
    lineHeight: 22,
  },
  dots: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    marginTop: 2,
  },
  dot: {
    backgroundColor: '#D8CBBB',
    borderRadius: radii.chip,
    height: 8,
    width: 8,
  },
  dotActive: {
    backgroundColor: colors.terracotta,
    width: 24,
  },
  fullButton: {
    width: '100%',
  },
});
