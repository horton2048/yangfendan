import { Image } from 'expo-image';
import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton, AppChip, IconCircleButton, SectionLabel } from '@/components/app-primitives';
import { PhoneStatus } from '@/components/phone-status';
import { workDetail } from '@/data/app-content';
import { colors, fontFamilies, radii } from '@/theme/tokens';

export default function WorkDetailRoute() {
  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <View style={styles.screen}>
        <ScrollView bounces={false} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <PhoneStatus />

          <View style={styles.topRow}>
            <IconCircleButton icon="arrow-back" onPress={() => router.back()} />
            <Text style={styles.topTitle}>作品详情</Text>
            <IconCircleButton icon="share" onPress={() => router.push('/share' as never)} />
          </View>

          <Image contentFit="cover" source={workDetail.hero} style={styles.hero} transition={150} />

          <View style={styles.card}>
            <SectionLabel>作品信息</SectionLabel>
            <Text style={styles.title}>{workDetail.title}</Text>
            <Text onPress={() => router.push('/maker' as never)} style={styles.maker}>
              {workDetail.maker}
            </Text>
            <Text style={styles.factLines}>{workDetail.detailLines.join('\n')}</Text>

            <View style={styles.tagRow}>
              <View style={styles.oliveTag}>
                <Text style={styles.oliveTagText}>就这一件</Text>
              </View>
              <View style={styles.stateTag}>
                <Text style={styles.stateTagText}>展示中</Text>
              </View>
            </View>
          </View>

          <View style={styles.agentCard}>
            <Text style={styles.agentTitle}>问问它</Text>
            <Text style={styles.agentBody}>
              可以问它：这件东西是怎么做出来的？她做这个的时候在想什么？
            </Text>
            <View style={styles.askRow}>
              {workDetail.askChips.map((chip) => (
                <AppChip key={chip} label={chip} tone="inverse" />
              ))}
            </View>
          </View>

          <View style={styles.card}>
            <SectionLabel>作品故事</SectionLabel>
            <Text style={styles.story}>{workDetail.story}</Text>
          </View>
        </ScrollView>

        <View style={styles.bottomBar}>
          <View style={styles.bottomActions}>
            <AppButton label="先记着" onPress={() => undefined} style={styles.watchButton} tone="olive" />
            <AppButton label="想要" onPress={() => undefined} style={styles.wantButton} />
              <AppButton
              label="分享出去"
              onPress={() => router.push('/share' as never)}
              style={styles.shareButton}
              tone="outline"
            />
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
    gap: 12,
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
    height: 210,
    width: '100%',
  },
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radii.panel,
    borderWidth: 1,
    gap: 8,
    padding: 12,
  },
  title: {
    color: colors.text,
    fontFamily: fontFamilies.bodyBold,
    fontSize: 24,
  },
  maker: {
    color: colors.text,
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 15,
  },
  factLines: {
    color: colors.textMuted,
    fontFamily: fontFamilies.label,
    fontSize: 12,
    lineHeight: 24,
  },
  tagRow: {
    flexDirection: 'row',
    gap: 8,
  },
  oliveTag: {
    backgroundColor: colors.surfaceSoft,
    borderRadius: radii.chip,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  oliveTagText: {
    color: colors.olive,
    fontFamily: fontFamilies.label,
    fontSize: 10,
  },
  stateTag: {
    backgroundColor: '#F2E8D8',
    borderRadius: radii.chip,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  stateTagText: {
    color: colors.terracotta,
    fontFamily: fontFamilies.label,
    fontSize: 10,
  },
  agentCard: {
    backgroundColor: colors.surfaceInverse,
    borderRadius: radii.panel,
    gap: 8,
    padding: 12,
  },
  agentTitle: {
    color: colors.textInverse,
    fontFamily: fontFamilies.bodyBold,
    fontSize: 20,
  },
  agentBody: {
    color: '#D6D0CA',
    fontFamily: fontFamilies.body,
    fontSize: 14,
    lineHeight: 22,
  },
  askRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  story: {
    color: colors.text,
    fontFamily: fontFamilies.body,
    fontSize: 14,
    lineHeight: 22,
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
  watchButton: {
    width: 110,
  },
  wantButton: {
    width: 110,
  },
  shareButton: {
    flex: 1,
  },
});
