import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppChip, SectionLabel } from '@/components/app-primitives';
import { BottomNav } from '@/components/bottom-nav';
import { PhoneStatus } from '@/components/phone-status';
import { ScreenHeader } from '@/components/screen-header';
import { messageGroups, screenCopy, worksTopTabs } from '@/data/app-content';
import { colors, fontFamilies, radii } from '@/theme/tokens';

export default function MessagesRoute() {
  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <View style={styles.screen}>
        <ScrollView bounces={false} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <PhoneStatus />

          <ScreenHeader badge="羊粪蛋" subtitle={screenCopy.messages.subtitle} title={screenCopy.messages.title} />

          <View style={styles.topTabs}>
            {worksTopTabs.map((tab) => (
              <AppChip
                key={tab.key}
                label={tab.label}
                onPress={() => {
                  if (tab.key === 'works') {
                    router.replace('/works' as never);
                  }
                }}
                selected={tab.key === 'messages'}
                style={styles.topTab}
              />
            ))}
          </View>

          <View style={styles.list}>
            <SectionLabel>系统通知</SectionLabel>
            {messageGroups.system.map((message) => (
              <View key={message.title} style={styles.card}>
                <View style={styles.cardTop}>
                  <Text style={styles.cardTitle}>{message.title}</Text>
                  <Text style={styles.cardTime}>{message.time}</Text>
                </View>
                <Text style={styles.cardBody}>{message.body}</Text>
              </View>
            ))}

            <SectionLabel>匠人来信</SectionLabel>
            <View style={styles.agentCard}>
              <View style={styles.cardTop}>
                <Text style={styles.agentTitle}>{messageGroups.agent.title}</Text>
                <Text style={styles.agentTime}>{messageGroups.agent.time}</Text>
              </View>
              <Text style={styles.agentBody}>{messageGroups.agent.body}</Text>
              <Text style={styles.agentTag}>她说的，智能整理</Text>
            </View>
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
  list: {
    gap: 14,
  },
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radii.card,
    borderWidth: 1,
    gap: 8,
    padding: 12,
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
  cardTime: {
    color: colors.textMuted,
    fontFamily: fontFamilies.label,
    fontSize: 10,
  },
  cardBody: {
    color: colors.textMuted,
    fontFamily: fontFamilies.body,
    fontSize: 14,
    lineHeight: 22,
  },
  agentCard: {
    backgroundColor: colors.surfaceInverse,
    borderRadius: radii.card,
    gap: 10,
    padding: 14,
  },
  agentTitle: {
    color: colors.textInverse,
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 16,
  },
  agentTime: {
    color: '#D6D0CA',
    fontFamily: fontFamilies.label,
    fontSize: 10,
  },
  agentBody: {
    color: '#D6D0CA',
    fontFamily: fontFamilies.body,
    fontSize: 14,
    lineHeight: 22,
  },
  agentTag: {
    color: '#D6D0CA',
    fontFamily: fontFamilies.label,
    fontSize: 10,
  },
});
