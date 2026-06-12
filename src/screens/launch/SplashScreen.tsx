import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../constants/theme';
import {images} from '../../content/assets';
import {localData} from '../../storage/localData';

type Props = {onComplete: () => void};

const DURATION_MS = 5002;

export function SplashScreen({onComplete}: Props) {
  const insets = useSafeAreaInsets();
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    localData.ensurePassCode();
    const anim = Animated.timing(progress, {
      toValue: 1,
      duration: DURATION_MS,
      useNativeDriver: false,
    });
    anim.start(({finished}) => {
      if (finished) {
        onComplete();
      }
    });
    return () => anim.stop();
  }, [onComplete, progress]);

  const width = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <ImageBackground
      source={images.splashScene}
      style={styles.splashRoot}
      resizeMode="cover">
      <View style={styles.splashScrollContent}>
        <View style={styles.splashBranding}>
          <Image
            source={images.loaderLogo}
            style={styles.splashLogo}
            resizeMode="contain"
          />
          <Text style={styles.splashTitle}>Nova Scotia Casino:</Text>
        </View>

        <View
          style={[styles.splashLoader, {paddingBottom: insets.bottom + 48}]}>
          <View style={styles.splashProgressTrack}>
            <Animated.View style={[styles.splashProgressFill, {width}]} />
          </View>
          <Text style={styles.splashStatusText}>
            Preparing your concierge access...
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splashRoot: {
    flex: 1,
  },
  splashScrollContent: {
    flex: 1,
  },
  splashBranding: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    gap: 8,
    marginBottom: 30,
  },
  splashLogo: {
    width: 194,
    height: 180,
    marginBottom: 4,
  },
  splashTitle: {
    color: colors.cream,
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Georgia',
    textAlign: 'center',
  },
  splashLoader: {
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 40,
  },
  splashProgressTrack: {
    width: '34%',
    height: 3,
    backgroundColor: 'rgba(26, 44, 72, 0.85)',
    overflow: 'hidden',
  },
  splashProgressFill: {
    height: '100%',
    backgroundColor: colors.gold,
  },
  splashStatusText: {
    color: colors.textMuted,
    fontSize: 12,
    textAlign: 'center',
  },
});
