import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {LoaderScreen} from '../screens/LoaderScreen';
import {OnboardingScreen} from '../screens/OnboardingScreen';
import {MainTabs} from './Tab';
import {colors} from '../theme/colors';

type AppPhase = 'loading' | 'onboarding' | 'main';

export function RootNavigator() {
  const [phase, setPhase] = useState<AppPhase>('loading');

  const handleLoaderComplete = useCallback(() => {
    setPhase('onboarding');
  }, []);

  const handleOnboardingComplete = useCallback(() => {
    setPhase('main');
  }, []);

  if (phase === 'loading') {
    return (
      <View style={styles.root}>
        <LoaderScreen onComplete={handleLoaderComplete} />
      </View>
    );
  }

  if (phase === 'onboarding') {
    return (
      <View style={styles.root}>
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
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
