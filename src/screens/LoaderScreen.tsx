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
import {colors} from '../theme/colors';
import {ensureGuestPassCode} from '../utils/guestPass';

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
      source={require('../assets/ldr.png')}
      style={styles.root}
      resizeMode="cover">
      <View style={styles.content}>
        <View style={styles.branding}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>Nova Scotia Casino</Text>
          <Text style={styles.brandSubtitle}>CONCIERGE</Text>
        </View>

        <View style={[styles.loader, {paddingBottom: insets.bottom + 48}]}>
          <View style={styles.track}>
            <Animated.View style={[styles.fill, {width}]} />
          </View>
          <Text style={styles.status}>Preparing your concierge access...</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  branding: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 40,
    gap: 8,
    marginBottom: 30,
  },
  logo: {
    width: 134,
    height: 100,
    marginBottom: 4,
  },
  title: {
    color: colors.cream,
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Georgia',
    textAlign: 'center',
  },
  brandSubtitle: {
    color: colors.gold,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 4,
    textAlign: 'center',
  },
  loader: {
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 40,
  },
  track: {
    width: '34%',
    height: 3,
    backgroundColor: 'rgba(26, 44, 72, 0.85)',
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: colors.gold,
  },
  status: {
    color: colors.textMuted,
    fontSize: 12,
    textAlign: 'center',
  },
});
