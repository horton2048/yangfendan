import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BottomNav } from '@/components/bottom-nav';
import { PhoneStatus } from '@/components/phone-status';
import { ScreenHeader } from '@/components/screen-header';
import { profileSummary, screenCopy } from '@/data/app-content';
import { colors, fontFamilies, radii } from '@/theme/tokens';

const wantedImage = require('../../assets/v12-exports/4FfYx.png');

export default function MineRoute() {
  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <View style={styles.screen}>
        <ScrollView bounces={false} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <PhoneStatus />

          <ScreenHeader badge="羊粪蛋" subtitle={screenCopy.mine.subtitle} title={screenCopy.mine.title} />

          <View style={styles.profileCard}>
            <View style={styles.profileTop}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{profileSummary.avatar}</Text>
              </View>
              <View style={styles.nameCol}>
                <Text style={styles.name}>{profileSummary.name}</Text>
                <Text style={styles.city}>{profileSummary.city}</Text>
              </View>
            </View>

            <View style={styles.statsRow}>
              <View style={styles.statChip}>
                <Text style={styles.statText}>{profileSummary.makerCount}</Text>
              </View>
              <View style={styles.statChip}>
                <Text style={styles.statText}>{profileSummary.wantedCount}</Text>
              </View>
            </View>
          </View>

          <Text style={styles.sectionLabel}>在看的匠人</Text>
          <View style={styles.card}>
            <View style={styles.makerAvatar}>
              <Text style={styles.makerAvatarText}>热</Text>
            </View>
            <View style={styles.cardMeta}>
              <Text style={styles.cardTitle}>热依拉 · 匠人分身</Text>
              <Text style={styles.cardBody}>今天缝石榴纹的时候，想起母亲说，针脚要留一点呼吸。</Text>
            </View>
          </View>

          <Text style={styles.sectionLabel}>想要的作品</Text>
          <View style={styles.card}>
            <Image contentFit="cover" source={wantedImage} style={styles.thumb} transition={150} />
            <View style={styles.cardMeta}>
              <Text style={styles.cardTitle}>石榴纹绣片</Text>
              <Text style={styles.cardSub}>热依拉</Text>
              <Text style={styles.cardHint}>展示中 · 就这一件</Text>
            </View>
          </View>

          <Text style={styles.sectionLabel}>分享过的</Text>
          <View style={styles.card}>
            <View style={styles.sharePreview} />
            <View style={styles.cardMeta}>
              <Text style={styles.cardTitle}>分享卡 · 石榴纹绣片</Text>
              <Text style={styles.cardHint}>{profileSummary.shareTime}</Text>
              <Text style={styles.cardBody}>{profileSummary.shareBody}</Text>
            </View>
          </View>
        </ScrollView>

        <BottomNav active="mine" />
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
    paddingBottom: 126,
    paddingHorizontal: 20,
    paddingTop: 4,
  },
  profileCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radii.panel,
    borderWidth: 1,
    gap: 12,
    padding: 14,
  },
  profileTop: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: colors.terracotta,
    borderRadius: radii.chip,
    height: 56,
    justifyContent: 'center',
    width: 56,
  },
  avatarText: {
    color: colors.textInverse,
    fontFamily: fontFamilies.bodyBold,
    fontSize: 20,
  },
  nameCol: {
    flex: 1,
    gap: 4,
  },
  name: {
    color: colors.text,
    fontFamily: fontFamilies.bodyBold,
    fontSize: 18,
  },
  city: {
    color: colors.textMuted,
    fontFamily: fontFamilies.label,
    fontSize: 11,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  statChip: {
    backgroundColor: colors.surfaceMuted,
    borderRadius: 20,
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  statText: {
    color: colors.text,
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 14,
  },
  sectionLabel: {
    color: colors.textMuted,
    fontFamily: fontFamilies.label,
    fontSize: 11,
    letterSpacing: 0.4,
  },
  card: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radii.card,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 12,
    padding: 10,
  },
  makerAvatar: {
    alignItems: 'center',
    backgroundColor: colors.blueBadge,
    borderRadius: radii.chip,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  makerAvatarText: {
    color: colors.textInverse,
    fontFamily: fontFamilies.bodyBold,
    fontSize: 16,
  },
  thumb: {
    borderRadius: 18,
    height: 72,
    width: 72,
  },
  sharePreview: {
    backgroundColor: colors.surfaceInverse,
    borderRadius: 18,
    height: 88,
    width: 72,
  },
  cardMeta: {
    flex: 1,
    gap: 4,
  },
  cardTitle: {
    color: colors.text,
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 15,
  },
  cardSub: {
    color: colors.textMuted,
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 13,
  },
  cardHint: {
    color: colors.textMuted,
    fontFamily: fontFamilies.label,
    fontSize: 11,
  },
  cardBody: {
    color: colors.textMuted,
    fontFamily: fontFamilies.body,
    fontSize: 13,
    lineHeight: 20,
  },
});
