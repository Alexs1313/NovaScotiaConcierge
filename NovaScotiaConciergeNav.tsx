import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {LoaderScreen} from './NovaScotiaConcierge/NovaScotiaConciergeScreens/NovaScotiaConciergeStartup/NovaScotiaConciergeLoaderScreen/NovaScotiaConciergeLoaderScreen';
import {OnboardingScreen} from './NovaScotiaConcierge/NovaScotiaConciergeScreens/NovaScotiaConciergeStartup/NovaScotiaConciergeOnboardingScreen/NovaScotiaConciergeOnboardingScreen';
import {MainTabs} from './NovaScotiaConcierge/NovaScotiaConciergeNavgt/NovaScotiaConciergeTab/NovaScotiaConciergeTab';
import {colors} from './NovaScotiaConcierge/NovaScotiaConciergeTheme/NovaScotiaConciergeColors/NovaScotiaConciergeColors';

type AppPhase = 'loading' | 'onboarding' | 'main';

export function NovaScotiaConciergeNav() {
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
