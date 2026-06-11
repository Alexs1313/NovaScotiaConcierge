import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../constants/theme';
import {images} from '../../data/assets';
import {useResponsive} from '../../hooks/useResponsive';

type Props = {
  code: string;
  onClose: () => void;
};

export function FullPassScreen({code, onClose}: Props) {
  const insets = useSafeAreaInsets();
  const responsive = useResponsive();
  const codeFontSize = Math.min(46, responsive.fullQrSize * 0.2);
  const iconSize = Math.max(48, responsive.qrSize * 0.32);

  return (
    <View style={styles.shell}>
      <Pressable
        style={[styles.actionClose, {top: insets.top + 16}]}
        onPress={onClose}>
        <Text style={styles.actionCloseLabel}>Close</Text>
      </Pressable>
      <View style={styles.center}>
        <Image
          source={images.guestMark}
          style={[styles.glyph, {width: iconSize, height: iconSize}]}
          resizeMode="cover"
        />
        <View style={styles.codeWrap}>
          <Text style={styles.fieldLabel}>Guest Pass Code</Text>
          <Text style={[styles.codeValue, {fontSize: codeFontSize}]}>{code}</Text>
        </View>
        <View style={styles.panelHint}>
          <Text style={styles.hint}>Present this code when requested.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
    backgroundColor: colors.expandedBg,
  },
  Glow: {
    position: 'absolute',
    alignSelf: 'center',
    top: '38%',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(201, 164, 48, 0.09)',
  },
  actionClose: {
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
  actionCloseLabel: {
    color: colors.cream,
    fontSize: 13,
    fontWeight: '600',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 28,
    paddingHorizontal: 24,
  },
  glyph: {
    width: 60,
    height: 60,
    borderRadius: 14,
    opacity: 0.85,
  },
  codeWrap: {
    alignItems: 'center',
    gap: 14,
  },
  fieldLabel: {
    color: colors.textMuted,
    fontSize: 11,
    letterSpacing: 2,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  codeValue: {
    color: colors.gold,
    fontSize: 46,
    fontWeight: '700',
    fontFamily: 'Courier',
    letterSpacing: 8,
    textAlign: 'center',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 40,
  },
  panelHint: {
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 25,
    paddingVertical: 13,
  },
  hint: {
    color: colors.textMuted,
    fontSize: 13,
    textAlign: 'center',
  },
});
