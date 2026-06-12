import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../constants/theme';
import {images} from '../../content/assets';
import {useAdaptive} from '../../hooks/useAdaptive';

type Props = {
  code: string;
  onClose: () => void;
};

export function FullPassScreen({code, onClose}: Props) {
  const insets = useSafeAreaInsets();
  const adaptive = useAdaptive();
  const codeFontSize = Math.min(46, adaptive.fullQrSize * 0.2);
  const iconSize = Math.max(48, adaptive.qrSize * 0.32);

  return (
    <View style={styles.fullPassRoot}>
      <Pressable
        style={[styles.fullPassCloseButton, {top: insets.top + 16}]}
        onPress={onClose}>
        <Text style={styles.fullPassCloseLabel}>Close</Text>
      </Pressable>
      <View style={styles.fullPassCenter}>
        <Image
          source={images.guestMark}
          style={[styles.fullPassIcon, {width: iconSize, height: iconSize}]}
          resizeMode="cover"
        />
        <View style={styles.fullPassCodeWrap}>
          <Text style={styles.fullPassLabel}>Guest Pass Code</Text>
          <Text style={[styles.fullPassCodeValue, {fontSize: codeFontSize}]}>
            {code}
          </Text>
        </View>
        <View style={styles.fullPassHintCard}>
          <Text style={styles.fullPassHintText}>
            Present this code when requested.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fullPassRoot: {
    flex: 1,
    backgroundColor: colors.expandedBg,
  },
  fullPassCloseButton: {
    position: 'absolute',
    right: 20,
    zIndex: 1,
    backgroundColor: colors.fieldBg,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 17,
    paddingVertical: 9,
  },
  fullPassCloseLabel: {
    color: colors.cream,
    fontSize: 13,
    fontWeight: '600',
  },
  fullPassCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 28,
    paddingHorizontal: 24,
  },
  fullPassIcon: {
    width: 60,
    height: 60,
    borderRadius: 14,
    opacity: 0.85,
  },
  fullPassCodeWrap: {
    alignItems: 'center',
    gap: 14,
  },
  fullPassLabel: {
    color: colors.textMuted,
    fontSize: 11,
    letterSpacing: 2,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  fullPassCodeValue: {
    color: colors.gold,
    fontSize: 46,
    fontWeight: '700',
    fontFamily: 'Courier',
    letterSpacing: 8,
    textAlign: 'center',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 40,
  },
  fullPassHintCard: {
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 25,
    paddingVertical: 13,
  },
  fullPassHintText: {
    color: colors.textMuted,
    fontSize: 13,
    textAlign: 'center',
  },
});
