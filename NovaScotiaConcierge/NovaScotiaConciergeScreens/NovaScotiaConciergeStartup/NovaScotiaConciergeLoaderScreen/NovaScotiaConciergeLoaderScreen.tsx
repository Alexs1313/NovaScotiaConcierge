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
import {colors} from '../../../NovaScotiaConciergeTheme/NovaScotiaConciergeColors/NovaScotiaConciergeColors';
import {ensureGuestPassCode} from '../../../NovaScotiaConciergeUtils/NovaScotiaConciergeGuestPass/NovaScotiaConciergeGuestPass';

type Props = {onComplete: () => void};

const DURATION_MS = 5000;

export function LoaderScreen({onComplete}: Props) {
  const insets = useSafeAreaInsets();
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    ensureGuestPassCode();
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
      source={require('../../../NovaScotiaConciergeAssets/NovaScotiaConciergeLdr.png')}
      style={styles.novaScotiaConciergeRoot}
      resizeMode="cover">
      <View style={styles.novaScotiaConciergeContent}>
        <View style={styles.novaScotiaConciergeBranding}>
          <Image
            source={require('../../../NovaScotiaConciergeAssets/NovaScotiaConciergeLogo.png')}
            style={styles.novaScotiaConciergeLogo}
            resizeMode="contain"
          />
          <Text style={styles.novaScotiaConciergeTitle}>Nova Scotia Casino</Text>
          <Text style={styles.novaScotiaConciergeBrandSubtitle}>CONCIERGE</Text>
        </View>

        <View style={[styles.novaScotiaConciergeLoader, {paddingBottom: insets.bottom + 48}]}>
          <View style={styles.novaScotiaConciergeTrack}>
            <Animated.View style={[styles.novaScotiaConciergeFill, {width}]} />
          </View>
          <Text style={styles.novaScotiaConciergeStatus}>Preparing your concierge access...</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeRoot: {
    flex: 1,
  },
  novaScotiaConciergeContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  novaScotiaConciergeBranding: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 40,
    gap: 8,
    marginBottom: 30,
  },
  novaScotiaConciergeLogo: {
    width: 134,
    height: 100,
    marginBottom: 4,
  },
  novaScotiaConciergeTitle: {
    color: colors.cream,
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Georgia',
    textAlign: 'center',
  },
  novaScotiaConciergeBrandSubtitle: {
    color: colors.gold,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 4,
    textAlign: 'center',
  },
  novaScotiaConciergeLoader: {
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 40,
  },
  novaScotiaConciergeTrack: {
    width: '34%',
    height: 3,
    backgroundColor: 'rgba(26, 44, 72, 0.85)',
    overflow: 'hidden',
  },
  novaScotiaConciergeFill: {
    height: '100%',
    backgroundColor: colors.gold,
  },
  novaScotiaConciergeStatus: {
    color: colors.textMuted,
    fontSize: 12,
    textAlign: 'center',
  },
});
