import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppChip, SectionLabel } from '@/components/app-primitives';
import { BottomNav } from '@/components/bottom-nav';
import { PhoneStatus } from '@/components/phone-status';
import { ScreenHeader } from '@/components/screen-header';
import {
  screenCopy,
  workCards,
  worksFilters,
  worksTopTabs,
} from '@/data/app-content';
import { colors, fontFamilies, radii } from '@/theme/tokens';

export default function WorksRoute() {
  const [selectedFilter, setSelectedFilter] = useState('全部');

  const visibleWorks = useMemo(() => {
    if (selectedFilter === '全部') {
      return workCards;
    }

    return workCards.filter((work) => work.status === selectedFilter);
  }, [selectedFilter]);

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <View style={styles.screen}>
        <ScrollView bounces={false} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <PhoneStatus />

          <ScreenHeader badge="羊粪蛋" subtitle={screenCopy.works.subtitle} title={screenCopy.works.title} />

          <View style={styles.topTabs}>
            {worksTopTabs.map((tab) => (
              <AppChip
                key={tab.key}
                label={tab.label}
                onPress={() => {
                  if (tab.key === 'messages') {
                    router.push('/works/messages' as never);
                  }
                }}
                rightAdornment={'unread' in tab && tab.unread ? 'dot' : undefined}
                selected={tab.key === 'works'}
                style={styles.topTab}
              />
            ))}
          </View>

          <SectionLabel>状态</SectionLabel>
          <View style={styles.filterRow}>
            {worksFilters.map((filter) => (
              <AppChip
                key={filter}
                label={filter}
                onPress={() => setSelectedFilter(filter)}
                selected={filter === selectedFilter}
              />
            ))}
          </View>

          <View style={styles.list}>
            {visibleWorks.map((work) => (
              <Pressable key={work.id} onPress={() => router.push('/works/detail' as never)} style={styles.card}>
                <Image contentFit="cover" source={work.image} style={styles.cardImage} transition={150} />
                <View style={styles.cardTop}>
                  <Text style={styles.cardTitle}>{work.name}</Text>
                  <View
                    style={[
                      styles.statusBadge,
                      work.statusTone === 'olive' ? styles.statusBadgeOlive : styles.statusBadgeTerracotta,
                    ]}>
                    <Text
                      style={[
                        styles.statusText,
                        work.statusTone === 'olive' ? styles.statusTextOlive : styles.statusTextTerracotta,
                      ]}>
                      {work.status}
                    </Text>
                  </View>
                </View>
                <Text style={styles.cardMaker}>{work.maker}</Text>
                <Text style={styles.cardMeta}>{work.meta}</Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>

        <BottomNav active="works" />
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
    paddingBottom: 126,
    paddingHorizontal: 20,
    paddingTop: 4,
  },
  topTabs: {
    flexDirection: 'row',
    gap: 10,
  },
  topTab: {
    minWidth: 108,
  },
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  list: {
    gap: 14,
  },
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radii.panel,
    borderWidth: 1,
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  cardImage: {
    borderRadius: 22,
    height: 196,
    width: '100%',
  },
  cardTop: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    color: colors.text,
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 18,
  },
  statusBadge: {
    borderRadius: radii.chip,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  statusBadgeOlive: {
    backgroundColor: colors.surfaceSoft,
  },
  statusBadgeTerracotta: {
    backgroundColor: colors.surfaceTint,
  },
  statusText: {
    fontFamily: fontFamilies.label,
    fontSize: 10,
  },
  statusTextOlive: {
    color: colors.olive,
  },
  statusTextTerracotta: {
    color: colors.terracotta,
  },
  cardMaker: {
    color: colors.text,
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 15,
  },
  cardMeta: {
    color: colors.textMuted,
    fontFamily: fontFamilies.label,
    fontSize: 11,
    letterSpacing: 0.2,
  },
});
