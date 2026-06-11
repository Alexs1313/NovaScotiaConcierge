import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {LoaderScreen} from '../NovaScotiaConciergeScreens/NovaScotiaConciergeStartup/NovaScotiaConciergeLoaderScreen';
import {OnboardingScreen} from '../NovaScotiaConciergeScreens/NovaScotiaConciergeStartup/NovaScotiaConciergeOnboardingScreen';
import {MainTabs} from '../NovaScotiaConciergeAtlas/NovaScotiaConciergeTab';
import {colors} from '../NovaScotiaConciergeCore/NovaScotiaConciergeTheme/NovaScotiaConciergeColors';

type AppPhase = 'loading' | 'onboarding' | 'main';

export function NovaScotiaConciergeShell() {
  const [phase, setPhase] = useState<AppPhase>('loading');

  const handleLoaderComplete = useCallback(() => {
    setPhase('onboarding');
  }, []);

  const handleOnboardingComplete = useCallback(() => {
    setPhase('main');
  }, []);

  if (phase === 'loading') {
    return (
      <View style={styles.novaScotiaConciergeRoot}>
        <LoaderScreen onComplete={handleLoaderComplete} />
      </View>
    );
  }

  if (phase === 'onboarding') {
    return (
      <View style={styles.novaScotiaConciergeRoot}>
        <OnboardingScreen onComplete={handleOnboardingComplete} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeRoot: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
