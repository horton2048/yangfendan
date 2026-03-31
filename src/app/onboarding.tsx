import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { OnboardingScreen } from '@/components/onboarding-screen';
import { onboardingSteps } from '@/data/onboarding';
import { colors } from '@/theme/tokens';

export default function OnboardingRoute() {
  const [currentPage, setCurrentPage] = useState(0);
  const step = onboardingSteps[currentPage];

  const handlePrimaryAction = () => {
    if (currentPage === onboardingSteps.length - 1) {
      router.replace('/feed' as never);
      return;
    }

    setCurrentPage((page) => page + 1);
  };

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <OnboardingScreen
        index={currentPage}
        onPrimaryAction={handlePrimaryAction}
        onSkip={() => router.replace('/feed' as never)}
        step={step}
        total={onboardingSteps.length}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
    flex: 1,
  },
});
