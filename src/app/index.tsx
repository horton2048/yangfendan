import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton, SectionLabel } from '@/components/app-primitives';
import { PhoneStatus } from '@/components/phone-status';
import { screenCopy, authOptions } from '@/data/app-content';
import { colors, fontFamilies, radii } from '@/theme/tokens';

const heroImage = require('../../assets/v12-exports/WNOTq.png');

export default function EntryRoute() {
  const [contact, setContact] = useState('');

  const handleContinue = () => {
    router.push({
      pathname: '/auth/code',
      params: {
        contact: contact.trim() || '138 **** 2048',
      },
    } as never);
  };

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <ScrollView bounces={false} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <PhoneStatus />

        <View style={styles.header}>
          <Text style={styles.brand}>羊粪蛋</Text>
          <Text style={styles.title}>{screenCopy.auth.title}</Text>
          <Text style={styles.subtitle}>{screenCopy.auth.subtitle}</Text>
        </View>

        <Image contentFit="cover" source={heroImage} style={styles.hero} transition={150} />

        <View style={styles.card}>
          <SectionLabel>手机号或邮箱</SectionLabel>
          <TextInput
            onChangeText={setContact}
            placeholder="输入手机号或邮箱"
            placeholderTextColor={colors.textMuted}
            style={styles.input}
            value={contact}
          />
          <AppButton label="继续" onPress={handleContinue} style={styles.fullButton} />
        </View>

        <View style={styles.altBlock}>
          <SectionLabel>其他方式</SectionLabel>
          <View style={styles.altList}>
            {authOptions.map((option) => (
              <AppButton key={option} label={option} onPress={handleContinue} style={styles.fullButton} tone="outline" />
            ))}
          </View>
        </View>
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
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
  header: {
    gap: 8,
    marginBottom: 16,
  },
  brand: {
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
  hero: {
    borderRadius: radii.hero,
    height: 220,
    marginBottom: 16,
    width: '100%',
  },
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radii.panel,
    borderWidth: 1,
    gap: 12,
    marginBottom: 16,
    padding: 14,
  },
  input: {
    backgroundColor: colors.surfaceMuted,
    borderRadius: radii.input,
    color: colors.text,
    fontFamily: fontFamilies.body,
    fontSize: 15,
    minHeight: 56,
    paddingHorizontal: 16,
  },
  altBlock: {
    gap: 10,
  },
  altList: {
    gap: 10,
  },
  fullButton: {
    width: '100%',
  },
});
