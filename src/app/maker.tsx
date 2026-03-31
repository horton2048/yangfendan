import { Image } from 'expo-image';
import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton, IconCircleButton, SectionLabel } from '@/components/app-primitives';
import { PhoneStatus } from '@/components/phone-status';
import { makerProfile } from '@/data/app-content';
import { colors, fontFamilies, radii } from '@/theme/tokens';

export default function MakerRoute() {
  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <View style={styles.screen}>
        <ScrollView bounces={false} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <PhoneStatus />

          <View style={styles.topRow}>
            <IconCircleButton icon="arrow-back" onPress={() => router.back()} />
            <Text style={styles.topTitle}>匠人主页</Text>
            <IconCircleButton icon="more-horiz" onPress={() => undefined} />
          </View>

          <Image contentFit="cover" source={makerProfile.hero} style={styles.hero} transition={150} />

          <View style={styles.card}>
            <Text style={styles.name}>{makerProfile.name}</Text>
            <Text style={styles.meta}>{makerProfile.meta}</Text>
            <Text style={styles.body}>{makerProfile.description}</Text>
          </View>

          <SectionLabel>她的动态</SectionLabel>
          <View style={styles.card}>
            <View style={styles.cardTop}>
              <Text style={styles.cardTitle}>她的动态</Text>
              <Text style={styles.meta}>她说的，智能整理</Text>
            </View>
            <Text style={styles.body}>{makerProfile.post}</Text>
          </View>

          <SectionLabel>她的作品</SectionLabel>
          <View style={styles.workCard}>
            <Image contentFit="cover" source={makerProfile.workThumb} style={styles.thumb} transition={150} />
            <View style={styles.workMeta}>
              <Text style={styles.cardTitle}>石榴纹绣片</Text>
              <Text style={styles.meta}>展示中 · 就这一件</Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottomBar}>
          <View style={styles.bottomActions}>
            <AppButton label="跟她说句话" onPress={() => undefined} style={styles.talkButton} />
            <AppButton label="关注她" onPress={() => undefined} style={styles.followButton} tone="olive" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
    flex: 1,
  },
  screen: {
    flex: 1,
  },
  content: {
    gap: 14,
    paddingBottom: 112,
    paddingHorizontal: 20,
    paddingTop: 4,
  },
  topRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topTitle: {
    color: colors.textMuted,
    fontFamily: fontFamilies.label,
    fontSize: 12,
  },
  hero: {
    borderRadius: radii.hero,
    height: 220,
    width: '100%',
  },
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radii.panel,
    borderWidth: 1,
    gap: 8,
    padding: 14,
  },
  name: {
    color: colors.text,
    fontFamily: fontFamilies.bodyBold,
    fontSize: 22,
  },
  meta: {
    color: colors.textMuted,
    fontFamily: fontFamilies.label,
    fontSize: 11,
    lineHeight: 18,
  },
  body: {
    color: colors.text,
    fontFamily: fontFamilies.body,
    fontSize: 14,
    lineHeight: 22,
  },
  cardTop: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    color: colors.text,
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 15,
  },
  workCard: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radii.card,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 12,
    padding: 10,
  },
  thumb: {
    borderRadius: 18,
    height: 72,
    width: 72,
  },
  workMeta: {
    flex: 1,
    gap: 4,
  },
  bottomBar: {
    backgroundColor: colors.background,
    paddingBottom: 16,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  bottomActions: {
    flexDirection: 'row',
    gap: 8,
  },
  talkButton: {
    width: 180,
  },
  followButton: {
    flex: 1,
  },
});
