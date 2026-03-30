import { router } from 'expo-router';
import { useRef, useState } from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { OnboardingScreen } from '@/components/onboarding-screen';
import { onboardingSteps, type LanguageCode } from '@/data/onboarding';
import { colors } from '@/theme/tokens';

export default function OnboardingRoute() {
  const { width } = useWindowDimensions();
  const scrollRef = useRef<ScrollView>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>('zh');

  const handleMomentumEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const nextPage = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentPage(nextPage);
  };

  const handlePrimaryAction = () => {
    if (currentPage === onboardingSteps.length - 1) {
      router.push({
        pathname: '/home',
        params: { language: selectedLanguage },
      });
      return;
    }

    const nextPage = currentPage + 1;
    scrollRef.current?.scrollTo({ x: nextPage * width, animated: true });
    setCurrentPage(nextPage);
  };

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <View pointerEvents="none" style={styles.backgroundBlobLeft} />
      <View pointerEvents="none" style={styles.backgroundBlobRight} />

      <ScrollView
        ref={scrollRef}
        bounces={false}
        horizontal
        onMomentumScrollEnd={handleMomentumEnd}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.pager}>
        {onboardingSteps.map((step) => (
          <View key={step.key} style={[styles.page, { width }]}>
            <OnboardingScreen
              onPrimaryAction={handlePrimaryAction}
              onSelectLanguage={setSelectedLanguage}
              selectedLanguage={selectedLanguage}
              step={step}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
    flex: 1,
  },
  pager: {
    flex: 1,
  },
  page: {
    flex: 1,
  },
  backgroundBlobLeft: {
    backgroundColor: '#ECDCC5',
    borderRadius: 220,
    height: 220,
    left: -110,
    opacity: 0.6,
    position: 'absolute',
    top: 80,
    width: 220,
  },
  backgroundBlobRight: {
    backgroundColor: '#F1E5D3',
    borderRadius: 180,
    height: 180,
    opacity: 0.9,
    position: 'absolute',
    right: -70,
    top: 280,
    width: 180,
  },
});
