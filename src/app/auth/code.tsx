import { router, useLocalSearchParams } from 'expo-router';
import { useRef, useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton, IconCircleButton, TextLink } from '@/components/app-primitives';
import { PhoneStatus } from '@/components/phone-status';
import { colors, fontFamilies, radii } from '@/theme/tokens';

const BOX_COUNT = 6;

export default function AuthCodeRoute() {
  const params = useLocalSearchParams<{ contact?: string }>();
  const inputRef = useRef<TextInput>(null);
  const [code, setCode] = useState('2846');

  const handleContinue = () => {
    router.push('/auth/profile' as never);
  };

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <ScrollView bounces={false} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <PhoneStatus />

        <View style={styles.backRow}>
          <IconCircleButton icon="arrow-back" onPress={() => router.back()} />
        </View>

        <View style={styles.header}>
          <Text style={styles.eyebrow}>验证码</Text>
          <Text style={styles.title}>看一眼手机</Text>
          <Text style={styles.subtitle}>验证码已经发到 {params.contact ?? '138 **** 2048'}。</Text>
        </View>

        <Pressable onPress={() => inputRef.current?.focus()} style={styles.codeRow}>
          {Array.from({ length: BOX_COUNT }).map((_, index) => {
            const value = code[index];
            const active = index === code.length;

            return (
              <View key={index} style={[styles.codeBox, active ? styles.codeBoxActive : null]}>
                <Text style={styles.codeText}>{value ?? ''}</Text>
              </View>
            );
          })}
          <TextInput
            keyboardType="number-pad"
            maxLength={BOX_COUNT}
            onChangeText={setCode}
            ref={inputRef}
            style={styles.hiddenInput}
            value={code}
          />
        </Pressable>

        <Text style={styles.hint}>47 秒后重新发送</Text>

        <AppButton label="继续" onPress={handleContinue} style={styles.fullButton} />

        <TextLink style={styles.link}>换个手机号或邮箱</TextLink>
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
  backRow: {
    marginBottom: 2,
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
  codeRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 4,
    position: 'relative',
  },
  codeBox: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radii.input,
    borderWidth: 1,
    height: 64,
    justifyContent: 'center',
    width: 54,
  },
  codeBoxActive: {
    borderColor: colors.terracotta,
  },
  codeText: {
    color: colors.text,
    fontFamily: fontFamilies.bodyBold,
    fontSize: 24,
  },
  hiddenInput: {
    height: 1,
    opacity: 0,
    position: 'absolute',
    width: 1,
  },
  hint: {
    color: colors.textMuted,
    fontFamily: fontFamilies.label,
    fontSize: 11,
    letterSpacing: 0.3,
  },
  link: {
    marginTop: -2,
  },
  fullButton: {
    width: '100%',
  },
});
