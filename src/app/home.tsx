import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { LanguageCode } from '@/data/onboarding';
import { languageLabels } from '@/data/onboarding';
import { colors, fontFamilies, radii, shadows } from '@/theme/tokens';

const homeFeatures = [
  {
    title: '匠人动态',
    body: '看她正在做什么、最近在研究什么，内容节奏更像在真实地靠近一个人。',
    accent: '#E6C79E',
  },
  {
    title: 'AI 对话',
    body: '每次回答都能回到原始素材，知道一句话从哪里来，也知道它没有说过什么。',
    accent: '#D9A25D',
  },
  {
    title: '低噪音社区',
    body: '讨论围绕手艺、地方与生活展开，少一点喧闹，多一点沉浸。',
    accent: '#F3E4CB',
  },
];

export default function HomeRoute() {
  const params = useLocalSearchParams<{ language?: LanguageCode }>();
  const language = params.language ?? 'zh';

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <View>
            <Text style={styles.eyebrow}>Young Fun Damn</Text>
            <Text style={styles.headerTitle}>欢迎进入更慢一点的内容空间</Text>
          </View>
          <Pressable onPress={() => router.replace('/')} style={styles.ghostButton}>
            <Text style={styles.ghostButtonLabel}>重看引导</Text>
          </Pressable>
        </View>

        <LinearGradient
          colors={['#F8EBD7', '#E6C79E']}
          end={{ x: 1, y: 1 }}
          start={{ x: 0, y: 0 }}
          style={styles.heroCard}>
          <Image
            contentFit="contain"
            source={require('../../assets/branding/young-fun-damn-logo-optimized.jpg')}
            style={styles.logo}
          />
          <View style={styles.heroCopy}>
            <Text style={styles.heroTitle}>让生活慢一点。</Text>
            <Text style={styles.heroBody}>
              现在开始，你会先看到匠人的日常，再在需要的时候与 AI 对话，最后回到一个更安静的社区里。
            </Text>
            <View style={styles.languageBadge}>
              <Text style={styles.languageBadgeLabel}>当前语言：{languageLabels[language]}</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.storyCard}>
          <Image
            contentFit="cover"
            source={require('../../assets/branding/weaver-hero.jpg')}
            style={styles.storyImage}
            transition={150}
          />
          <View style={styles.storyContent}>
            <Text style={styles.storyEyebrow}>匠人档案</Text>
            <Text style={styles.storyTitle}>先从一双手开始认识她</Text>
            <Text style={styles.storyBody}>
              真实的录音、片段、翻译稿和 AI 整理稿会并排出现，你始终能分清什么是原话，什么是整理。
            </Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>进入后的三个主要区域</Text>
          <Text style={styles.sectionNote}>全部沿用设计稿里的暖米色、低饱和棕色和纸张感留白。</Text>
        </View>

        {homeFeatures.map((feature) => (
          <View key={feature.title} style={styles.featureCard}>
            <View style={[styles.featureAccent, { backgroundColor: feature.accent }]} />
            <View style={styles.featureCopy}>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureBody}>{feature.body}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  topBar: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  eyebrow: {
    color: colors.textMuted,
    fontFamily: fontFamilies.displaySemiBold,
    fontSize: 18,
    marginBottom: 4,
  },
  headerTitle: {
    color: colors.text,
    fontFamily: fontFamilies.serifBold,
    fontSize: 28,
    lineHeight: 38,
    maxWidth: 240,
  },
  ghostButton: {
    backgroundColor: colors.surface,
    borderRadius: radii.chip,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  ghostButtonLabel: {
    color: colors.textMuted,
    fontFamily: fontFamilies.sansSemiBold,
    fontSize: 13,
  },
  heroCard: {
    borderRadius: 30,
    gap: 18,
    marginBottom: 18,
    overflow: 'hidden',
    padding: 20,
  },
  logo: {
    alignSelf: 'center',
    height: 108,
    width: '100%',
  },
  heroCopy: {
    gap: 8,
  },
  heroTitle: {
    color: colors.text,
    fontFamily: fontFamilies.serifBold,
    fontSize: 24,
    lineHeight: 34,
  },
  heroBody: {
    color: colors.textMuted,
    fontFamily: fontFamilies.sansMedium,
    fontSize: 14,
    lineHeight: 22,
  },
  languageBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(90,44,23,0.08)',
    borderRadius: radii.chip,
    marginTop: 4,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  languageBadgeLabel: {
    color: colors.accent,
    fontFamily: fontFamilies.sansBold,
    fontSize: 13,
  },
  storyCard: {
    backgroundColor: colors.surface,
    borderRadius: 28,
    marginBottom: 20,
    overflow: 'hidden',
    ...shadows,
  },
  storyImage: {
    height: 240,
    width: '100%',
  },
  storyContent: {
    gap: 8,
    padding: 18,
  },
  storyEyebrow: {
    color: colors.textSubtle,
    fontFamily: fontFamilies.sansSemiBold,
    fontSize: 12,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  storyTitle: {
    color: colors.text,
    fontFamily: fontFamilies.serifBold,
    fontSize: 22,
    lineHeight: 32,
  },
  storyBody: {
    color: colors.textMuted,
    fontFamily: fontFamilies.sansMedium,
    fontSize: 14,
    lineHeight: 22,
  },
  sectionHeader: {
    gap: 6,
    marginBottom: 14,
  },
  sectionTitle: {
    color: colors.text,
    fontFamily: fontFamilies.serifBold,
    fontSize: 22,
    lineHeight: 30,
  },
  sectionNote: {
    color: colors.textSubtle,
    fontFamily: fontFamilies.sansMedium,
    fontSize: 13,
    lineHeight: 20,
  },
  featureCard: {
    alignItems: 'center',
    backgroundColor: colors.surfaceMuted,
    borderRadius: 24,
    flexDirection: 'row',
    gap: 14,
    marginBottom: 12,
    padding: 16,
  },
  featureAccent: {
    borderRadius: 18,
    height: 72,
    width: 56,
  },
  featureCopy: {
    flex: 1,
    gap: 6,
  },
  featureTitle: {
    color: colors.text,
    fontFamily: fontFamilies.serifBold,
    fontSize: 18,
    lineHeight: 24,
  },
  featureBody: {
    color: colors.textMuted,
    fontFamily: fontFamilies.sansMedium,
    fontSize: 13,
    lineHeight: 20,
  },
});
