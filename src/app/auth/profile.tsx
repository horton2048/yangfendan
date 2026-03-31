import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton, TextLink } from '@/components/app-primitives';
import { PhoneStatus } from '@/components/phone-status';
import { colors, fontFamilies, radii } from '@/theme/tokens';

export default function AuthProfileRoute() {
  const [name, setName] = useState('林棠');
  const [city, setCity] = useState('上海');

  const enterApp = () => {
    router.push('/onboarding' as never);
  };

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <ScrollView bounces={false} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <PhoneStatus />

        <View style={styles.header}>
          <Text style={styles.eyebrow}>最后一步</Text>
          <Text style={styles.title}>怎么称呼你</Text>
          <Text style={styles.subtitle}>用户名和城市都可以先随便填，之后也能改。</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>用户名</Text>
          <TextInput onChangeText={setName} style={styles.input} value={name} />

          <Text style={styles.label}>城市（非强制）</Text>
          <TextInput onChangeText={setCity} style={styles.input} value={city} />
        </View>

        <Text style={styles.hint}>以后想改，也可以在“我的”里再改。</Text>

        <AppButton label="进入应用" onPress={enterApp} style={styles.fullButton} tone="olive" />
        <TextLink onPress={enterApp} style={styles.skipLink}>
          先不填，直接进入
        </TextLink>
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
    gap: 16,
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
  header: {
    gap: 8,
  },
  eyebrow: {
    color: colors.textMuted,
    fontFamily: fontFamilies.label,
    fontSize: 13,
  },
  title: {
    color: colors.text,
    fontFamily: fontFamilies.heading,
    fontSize: 38,
    lineHeight: 50,
  },
  subtitle: {
    color: colors.textMuted,
    fontFamily: fontFamilies.body,
    fontSize: 16,
    lineHeight: 24,
  },
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radii.panel,
    borderWidth: 1,
    gap: 12,
    padding: 14,
  },
  label: {
    color: colors.textMuted,
    fontFamily: fontFamilies.label,
    fontSize: 11,
    letterSpacing: 0.3,
  },
  input: {
    backgroundColor: colors.surfaceMuted,
    borderRadius: radii.input,
    color: colors.text,
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 15,
    minHeight: 56,
    paddingHorizontal: 16,
  },
  hint: {
    color: colors.textMuted,
    fontFamily: fontFamilies.body,
    fontSize: 14,
    lineHeight: 22,
  },
  skipLink: {
    marginTop: -6,
  },
  fullButton: {
    width: '100%',
  },
});
