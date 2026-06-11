import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../../../NovaScotiaConciergeCore/NovaScotiaConciergeTheme/NovaScotiaConciergeColors';

type Props = {
  code: string;
  onClose: () => void;
};

export function FullScreenPassScreen({code, onClose}: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.novaScotiaConciergeRoot}>
      <Pressable
        style={[styles.novaScotiaConciergeCloseButton, {top: insets.top + 16}]}
        onPress={onClose}>
        <Text style={styles.novaScotiaConciergeCloseText}>Close</Text>
      </Pressable>
      <View style={styles.novaScotiaConciergeCenter}>
        <Image
          source={require('../../../../NovaScotiaConciergeAssets/NovaScotiaConciergeGuestMark.png')}
          style={styles.novaScotiaConciergeIcon}
          resizeMode="cover"
        />
        <View style={styles.novaScotiaConciergeCodeBlock}>
          <Text style={styles.novaScotiaConciergeLabel}>Guest Pass Code</Text>
          <Text style={styles.novaScotiaConciergeCode}>{code}</Text>
        </View>
        <View style={styles.novaScotiaConciergeHintCard}>
          <Text style={styles.novaScotiaConciergeHint}>Present this code when requested.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeRoot: {
    flex: 1,
    backgroundColor: colors.fullScreenBg,
  },
  novaScotiaConciergeGlow: {
    position: 'absolute',
    alignSelf: 'center',
    top: '38%',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(201, 164, 48, 0.09)',
  },
  novaScotiaConciergeCloseButton: {
    position: 'absolute',
    right: 20,
    zIndex: 1,
    backgroundColor: colors.inputBg,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 17,
    paddingVertical: 9,
  },
  novaScotiaConciergeCloseText: {
    color: colors.cream,
    fontSize: 13,
    fontWeight: '600',
  },
  novaScotiaConciergeCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 28,
    paddingHorizontal: 24,
  },
  novaScotiaConciergeIcon: {
    width: 60,
    height: 60,
    borderRadius: 14,
    opacity: 0.85,
  },
  novaScotiaConciergeCodeBlock: {
    alignItems: 'center',
    gap: 14,
  },
  novaScotiaConciergeLabel: {
    color: colors.textMuted,
    fontSize: 11,
    letterSpacing: 2,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  novaScotiaConciergeCode: {
    color: colors.gold,
    fontSize: 46,
    fontWeight: '700',
    fontFamily: 'Courier',
    letterSpacing: 8,
    textAlign: 'center',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 40,
  },
  novaScotiaConciergeHintCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 25,
    paddingVertical: 13,
  },
  novaScotiaConciergeHint: {
    color: colors.textMuted,
    fontSize: 13,
    textAlign: 'center',
  },
});
