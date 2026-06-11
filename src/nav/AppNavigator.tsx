import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SplashScreen} from '../screens/splash/SplashScreen';
import {OnboardingScreen} from '../screens/onboarding/OnboardingScreen';
import MainTabs from './MainTabs';
import {colors} from '../constants/theme';

type AppPhase = 'loading' | 'onboarding' | 'main';

export default function AppNavigator() {
  const [phase, setPhase] = useState<AppPhase>('loading');

  const handleLoaderComplete = useCallback(() => {
    setPhase('onboarding');
  }, []);

  const handleOnboardingComplete = useCallback(() => {
    setPhase('main');
  }, []);

  return (
    <SafeAreaProvider>
      {phase === 'loading' && (
        <View style={styles.shell}>
          <SplashScreen onComplete={handleLoaderComplete} />
        </View>
      )}
      {phase === 'onboarding' && (
        <View style={styles.shell}>
          <OnboardingScreen onComplete={handleOnboardingComplete} />
        </View>
      )}
      {phase === 'main' && (
        <NavigationContainer>
          <MainTabs />
        </NavigationContainer>
      )}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
