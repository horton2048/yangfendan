import { Image } from 'expo-image';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton, AppChip, SectionLabel } from '@/components/app-primitives';
import { PhoneStatus } from '@/components/phone-status';
import { ScreenHeader } from '@/components/screen-header';
import { screenCopy, shareCard } from '@/data/app-content';
import { colors, fontFamilies } from '@/theme/tokens';

export default function ShareRoute() {
  const [selectedStyle, setSelectedStyle] =
    useState<(typeof shareCard.styles)[number]>('深色极简');

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <View style={styles.screen}>
        <ScrollView bounces={false} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <PhoneStatus />

          <ScreenHeader badge="羊粪蛋" subtitle={screenCopy.share.subtitle} title={screenCopy.share.title} />

          <View style={styles.preview}>
            <Image contentFit="cover" source={shareCard.image} style={styles.previewImage} transition={150} />
            <Text style={styles.previewTitle}>{shareCard.title}</Text>
            <Text style={styles.previewMeta}>{shareCard.makerMeta}</Text>
            <Text style={styles.previewSign}>{shareCard.subtitle}</Text>
          </View>

          <SectionLabel>分享风格</SectionLabel>
          <View style={styles.row}>
            {shareCard.styles.map((style) => (
              <AppChip
                key={style}
                label={style}
                onPress={() => setSelectedStyle(style)}
                selected={style === selectedStyle}
              />
            ))}
          </View>

          <SectionLabel>分享渠道</SectionLabel>
          <View style={styles.row}>
            {shareCard.channels.map((channel) => (
              <AppChip key={channel} label={channel} />
            ))}
          </View>
        </ScrollView>

        <View style={styles.bottomBar}>
          <AppButton label="分享出去" onPress={() => undefined} style={styles.fullButton} />
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
  preview: {
    backgroundColor: colors.surfaceInverse,
    borderRadius: 32,
    gap: 10,
    padding: 18,
  },
  previewImage: {
    borderRadius: 24,
    height: 220,
    width: '100%',
  },
  previewTitle: {
    color: colors.textInverse,
    fontFamily: fontFamilies.bodyBold,
    fontSize: 24,
  },
  previewMeta: {
    color: '#D6D0CA',
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 14,
  },
  previewSign: {
    color: '#D6D0CA',
    fontFamily: fontFamilies.label,
    fontSize: 11,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  bottomBar: {
    backgroundColor: colors.background,
    paddingBottom: 16,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  fullButton: {
    width: '100%',
  },
});
