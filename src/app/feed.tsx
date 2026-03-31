import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppChip, SectionLabel } from '@/components/app-primitives';
import { BottomNav } from '@/components/bottom-nav';
import { PhoneStatus } from '@/components/phone-status';
import { ScreenHeader } from '@/components/screen-header';
import { feedCards, feedCircles, screenCopy } from '@/data/app-content';
import { colors, fontFamilies, radii } from '@/theme/tokens';

export default function FeedRoute() {
  const [selectedCircle, setSelectedCircle] = useState('全部');

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <View style={styles.screen}>
        <ScrollView bounces={false} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <PhoneStatus />

          <ScreenHeader
            badge="羊粪蛋"
            badgeDot
            eyebrow={screenCopy.feed.eyebrow}
            subtitle={screenCopy.feed.subtitle}
            title={screenCopy.feed.title}
          />

          <SectionLabel>圈子</SectionLabel>
          <View style={styles.circleRow}>
            {feedCircles.map((circle) => (
              <AppChip
                key={circle}
                label={circle}
                onPress={() => setSelectedCircle(circle)}
                selected={selectedCircle === circle}
              />
            ))}
          </View>

          <View style={styles.feedList}>
            <View style={styles.card}>
              <View style={styles.cardTopRow}>
                <View style={styles.softBadge}>
                  <Text style={styles.softBadgeText}>系统自动</Text>
                </View>
                <Text style={styles.metaLabel}>{feedCards.system.state}</Text>
              </View>

              <Image contentFit="cover" source={feedCards.system.image} style={styles.systemImage} transition={150} />
              <Text style={styles.cardTitle}>{feedCards.system.title}</Text>
              <Text style={styles.cardSubtitle}>{feedCards.system.subtitle}</Text>
              <Text style={styles.metaLabel}>{feedCards.system.meta}</Text>
            </View>

            <View style={styles.agentCard}>
              <View style={styles.agentHead}>
                <View style={styles.agentAvatar}>
                  <Text style={styles.agentAvatarText}>{feedCards.agent.avatar}</Text>
                </View>
                <View style={styles.agentMeta}>
                  <Text style={styles.agentName}>{feedCards.agent.name}</Text>
                  <Text style={styles.agentStatus}>{feedCards.agent.status}</Text>
                </View>
                <View style={styles.agentBadge}>
                  <Text style={styles.agentBadgeText}>{feedCards.agent.badge}</Text>
                </View>
              </View>

              <Text style={styles.agentQuote}>{feedCards.agent.quote}</Text>
              <View style={styles.agentFooter}>
                <Text style={styles.agentIdentity}>她说的，智能整理</Text>
                <Text style={styles.agentFollow}>关注她</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.arrivedHead}>
                <View style={styles.greenBadge}>
                  <Text style={styles.greenBadgeText}>{feedCards.arrived.badge}</Text>
                </View>
                <Text style={styles.cardSubtitle}>{feedCards.arrived.city}</Text>
              </View>

              <Text style={styles.arrivedBody}>{feedCards.arrived.body}</Text>

              <Pressable onPress={() => router.push('/works/detail' as never)} style={styles.linkCard}>
                <Image contentFit="cover" source={feedCards.arrived.thumb} style={styles.linkThumb} transition={150} />
                <View style={styles.linkMeta}>
                  <Text style={styles.cardSubtitle}>{feedCards.arrived.title}</Text>
                  <Text style={styles.metaLabel}>关联作品 · 展示中</Text>
                </View>
              </Pressable>

              <View style={styles.actions}>
                <Text style={styles.wantAction}>想要 36</Text>
                <Text style={styles.metaLabel}>说点什么</Text>
                <Text style={styles.metaLabel}>分享出去</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <Pressable style={styles.fab}>
          <Text style={styles.fabIcon}>+</Text>
          <Text style={styles.fabText}>说点什么</Text>
        </Pressable>

        <BottomNav active="feed" />
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
    gap: 16,
    paddingHorizontal: 20,
    paddingTop: 4,
    paddingBottom: 126,
  },
  circleRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  feedList: {
    gap: 14,
  },
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radii.panel,
    borderWidth: 1,
    gap: 8,
    padding: 10,
  },
  cardTopRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  softBadge: {
    backgroundColor: colors.surfaceSoft,
    borderRadius: radii.chip,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  softBadgeText: {
    color: colors.text,
    fontFamily: fontFamilies.label,
    fontSize: 11,
    letterSpacing: 0.4,
  },
  metaLabel: {
    color: colors.textMuted,
    fontFamily: fontFamilies.label,
    fontSize: 11,
    letterSpacing: 0.2,
  },
  systemImage: {
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#D6C7B7',
    height: 80,
    width: '100%',
  },
  cardTitle: {
    color: colors.text,
    fontFamily: fontFamilies.bodyBold,
    fontSize: 22,
  },
  cardSubtitle: {
    color: colors.text,
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 16,
  },
  agentCard: {
    backgroundColor: colors.surfaceInverse,
    borderRadius: radii.panel,
    gap: 10,
    padding: 12,
  },
  agentHead: {
    flexDirection: 'row',
    gap: 12,
  },
  agentAvatar: {
    alignItems: 'center',
    backgroundColor: colors.blueBadge,
    borderRadius: radii.chip,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  agentAvatarText: {
    color: colors.textInverse,
    fontFamily: fontFamilies.bodyBold,
    fontSize: 15,
  },
  agentMeta: {
    flex: 1,
    gap: 4,
  },
  agentName: {
    color: colors.textInverse,
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 17,
  },
  agentStatus: {
    color: '#D6D0CA',
    fontFamily: fontFamilies.label,
    fontSize: 11,
    letterSpacing: 0.4,
  },
  agentBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF1A',
    borderRadius: radii.chip,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  agentBadgeText: {
    color: colors.blueBadgeSoft,
    fontFamily: fontFamilies.label,
    fontSize: 11,
    letterSpacing: 0.4,
  },
  agentQuote: {
    color: colors.textInverse,
    fontFamily: fontFamilies.body,
    fontSize: 14,
    lineHeight: 22,
  },
  agentFooter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  agentIdentity: {
    color: '#D6D0CA',
    fontFamily: fontFamilies.label,
    fontSize: 11,
  },
  agentFollow: {
    color: colors.terracottaSoft,
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 14,
  },
  arrivedHead: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  greenBadge: {
    backgroundColor: colors.oliveSoft,
    borderRadius: radii.chip,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  greenBadgeText: {
    color: '#758D62',
    fontFamily: fontFamilies.label,
    fontSize: 11,
    letterSpacing: 0.4,
  },
  arrivedBody: {
    color: colors.text,
    fontFamily: fontFamilies.body,
    fontSize: 15,
    lineHeight: 24,
  },
  linkCard: {
    alignItems: 'center',
    backgroundColor: colors.surfaceMuted,
    borderRadius: 20,
    flexDirection: 'row',
    gap: 12,
    padding: 10,
  },
  linkThumb: {
    borderRadius: 16,
    height: 56,
    width: 56,
  },
  linkMeta: {
    flex: 1,
    gap: 4,
  },
  actions: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wantAction: {
    color: colors.terracotta,
    fontFamily: fontFamilies.label,
    fontSize: 12,
    letterSpacing: 0.4,
  },
  fab: {
    alignItems: 'center',
    backgroundColor: colors.terracotta,
    borderRadius: 999,
    bottom: 108,
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    position: 'absolute',
    right: 20,
    shadowColor: '#7D4F3F',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 18,
  },
  fabIcon: {
    color: colors.textInverse,
    fontFamily: fontFamilies.bodyBold,
    fontSize: 18,
  },
  fabText: {
    color: colors.textInverse,
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 13,
  },
});
