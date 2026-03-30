import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import type { LanguageCode, OnboardingStep, StackLayer } from '@/data/onboarding';
import { PhoneStatus } from '@/components/phone-status';
import { Pill } from '@/components/pill';
import { colors, fontFamilies, radii, shadows } from '@/theme/tokens';

type OnboardingScreenProps = {
  step: OnboardingStep;
  selectedLanguage: LanguageCode;
  onSelectLanguage: (language: LanguageCode) => void;
  onPrimaryAction: () => void;
};

export function OnboardingScreen({
  step,
  selectedLanguage,
  onSelectLanguage,
  onPrimaryAction,
}: OnboardingScreenProps) {
  return (
    <ScrollView
      bounces={false}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}>
      <PhoneStatus />

      <View style={styles.heroWrapper}>{renderHero(step)}</View>

      <View style={styles.copyBlock}>
        <Text style={styles.title}>{step.title}</Text>
        <Text style={styles.subtitle}>{step.subtitle}</Text>
      </View>

      <View style={styles.pillRow}>
        {step.pills.map((pill) => {
          const active =
            step.key === 'language'
              ? pill.id === selectedLanguage
              : Boolean(pill.highlighted);

          return (
            <Pill
              key={pill.label}
              active={active}
              displayFont={pill.displayFont}
              label={pill.label}
              onPress={
                step.key === 'language' && pill.id
                  ? () => onSelectLanguage(pill.id as LanguageCode)
                  : undefined
              }
            />
          );
        })}
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>{step.card.title}</Text>
        <Text style={styles.infoBody}>{step.card.body}</Text>
      </View>

      <Text style={styles.note}>{step.note}</Text>

      <Pressable onPress={onPrimaryAction} style={styles.actionButton}>
        <LinearGradient
          colors={[colors.accentSoft, colors.accent]}
          end={{ x: 1, y: 0.5 }}
          start={{ x: 0, y: 0.5 }}
          style={styles.actionButtonFill}>
          <Text style={styles.actionLabel}>{step.ctaLabel}</Text>
        </LinearGradient>
      </Pressable>

      <Text style={styles.pageLabel}>{step.pageLabel}</Text>
    </ScrollView>
  );
}

function renderHero(step: OnboardingStep) {
  switch (step.hero.kind) {
    case 'photo':
      return (
        <Image
          contentFit="cover"
          source={step.hero.image}
          style={styles.photoHero}
          transition={150}
        />
      );
    case 'stack':
      return (
        <View style={styles.stackHero}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{step.hero.badge}</Text>
          </View>
          {step.hero.layers?.map((layer) => (
            <LayerCard key={layer.title} layer={layer} />
          ))}
        </View>
      );
    case 'brand':
      return (
        <View style={styles.brandHero}>
          <View style={styles.brandBlocks}>
            <View style={[styles.brandBlock, styles.goldBlock]} />
            <View style={[styles.brandBlock, styles.softAccentBlock]} />
            <View style={[styles.brandBlock, styles.creamBlock]} />
            <View style={styles.stemBlock} />
          </View>
          <View style={styles.brandCard}>
            <Text style={styles.brandTitle}>{step.hero.brandTitle}</Text>
            <Text style={styles.brandSubtitle}>{step.hero.brandSubtitle}</Text>
            <Text style={styles.brandNote}>{step.hero.brandNote}</Text>
          </View>
        </View>
      );
  }
}

function LayerCard({ layer }: { layer: StackLayer }) {
  const cardStyle =
    layer.tone === 'accent'
      ? styles.layerAccent
      : layer.tone === 'muted'
        ? styles.layerMuted
        : styles.layerLight;

  const titleStyle = layer.tone === 'accent' ? styles.layerAccentTitle : styles.layerTitle;
  const bodyStyle = layer.tone === 'accent' ? styles.layerAccentBody : styles.layerBody;

  return (
    <View style={[styles.layerCard, cardStyle]}>
      <Text style={titleStyle}>{layer.title}</Text>
      <Text style={bodyStyle}>{layer.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 8,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  heroWrapper: {
    marginBottom: 20,
  },
  copyBlock: {
    gap: 8,
    marginBottom: 18,
  },
  title: {
    color: colors.text,
    fontFamily: fontFamilies.serifBold,
    fontSize: 30,
    lineHeight: 42,
  },
  subtitle: {
    color: colors.textMuted,
    fontFamily: fontFamilies.sansMedium,
    fontSize: 14,
    lineHeight: 22,
  },
  pillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 18,
  },
  infoCard: {
    backgroundColor: colors.surfaceMuted,
    borderRadius: radii.card,
    gap: 8,
    marginBottom: 16,
    padding: 18,
    ...shadows,
  },
  infoTitle: {
    color: colors.text,
    fontFamily: fontFamilies.serifBold,
    fontSize: 20,
    lineHeight: 30,
  },
  infoBody: {
    color: colors.textMuted,
    fontFamily: fontFamilies.sansMedium,
    fontSize: 14,
    lineHeight: 23,
  },
  note: {
    color: colors.textSubtle,
    fontFamily: fontFamilies.sansMedium,
    fontSize: 13,
    lineHeight: 21,
    marginBottom: 18,
  },
  actionButton: {
    borderRadius: radii.chip,
    marginBottom: 14,
    overflow: 'hidden',
  },
  actionButtonFill: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 54,
    paddingHorizontal: 24,
  },
  actionLabel: {
    color: colors.white,
    fontFamily: fontFamilies.sansBold,
    fontSize: 16,
  },
  pageLabel: {
    color: '#B99A7D',
    fontFamily: fontFamilies.displaySemiBold,
    fontSize: 22,
    lineHeight: 28,
    textAlign: 'center',
  },
  photoHero: {
    borderRadius: radii.hero,
    height: 320,
    width: '100%',
  },
  stackHero: {
    backgroundColor: colors.surfaceTint,
    borderRadius: radii.hero,
    gap: 12,
    padding: 16,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.accent,
    borderRadius: radii.chip,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  badgeText: {
    color: colors.white,
    fontFamily: fontFamilies.sansBold,
    fontSize: 12,
  },
  layerCard: {
    borderRadius: 22,
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  layerLight: {
    backgroundColor: colors.surface,
  },
  layerMuted: {
    backgroundColor: colors.background,
  },
  layerAccent: {
    backgroundColor: colors.accentSoft,
  },
  layerTitle: {
    color: colors.text,
    fontFamily: fontFamilies.serifBold,
    fontSize: 18,
    lineHeight: 26,
  },
  layerBody: {
    color: colors.textMuted,
    fontFamily: fontFamilies.sansMedium,
    fontSize: 13,
    lineHeight: 20,
  },
  layerAccentTitle: {
    color: colors.white,
    fontFamily: fontFamilies.serifBold,
    fontSize: 18,
    lineHeight: 26,
  },
  layerAccentBody: {
    color: '#F6EBDD',
    fontFamily: fontFamilies.sansMedium,
    fontSize: 13,
    lineHeight: 20,
  },
  brandHero: {
    backgroundColor: colors.surfaceWarm,
    borderRadius: radii.hero,
    gap: 14,
    padding: 18,
  },
  brandBlocks: {
    flexDirection: 'row',
    gap: 10,
    height: 62,
  },
  brandBlock: {
    borderRadius: 20,
    flex: 1,
  },
  goldBlock: {
    backgroundColor: colors.accentGold,
  },
  softAccentBlock: {
    backgroundColor: colors.accentSoft,
    flex: 1.45,
  },
  creamBlock: {
    backgroundColor: '#F8ECD4',
    flex: 1.15,
  },
  stemBlock: {
    backgroundColor: colors.accent,
    borderRadius: 18,
    width: 20,
  },
  brandCard: {
    backgroundColor: colors.surface,
    borderRadius: radii.card,
    gap: 8,
    padding: 18,
  },
  brandTitle: {
    color: colors.text,
    fontFamily: fontFamilies.displayBold,
    fontSize: 30,
    lineHeight: 34,
  },
  brandSubtitle: {
    color: colors.accent,
    fontFamily: fontFamilies.serifBold,
    fontSize: 18,
    lineHeight: 28,
  },
  brandNote: {
    color: colors.textMuted,
    fontFamily: fontFamilies.sansMedium,
    fontSize: 13,
    lineHeight: 20,
  },
});
