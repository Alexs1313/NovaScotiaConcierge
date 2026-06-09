import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../theme/colors';

type Props = {
  code: string;
  onClose: () => void;
};

export function FullScreenPassScreen({code, onClose}: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      <Pressable
        style={[styles.closeButton, {top: insets.top + 16}]}
        onPress={onClose}>
        <Text style={styles.closeText}>Close</Text>
      </Pressable>
      <View style={styles.center}>
        <Image
          source={require('../assets/icon.png')}
          style={styles.icon}
          resizeMode="cover"
        />
        <View style={styles.codeBlock}>
          <Text style={styles.label}>Guest Pass Code</Text>
          <Text style={styles.code}>{code}</Text>
        </View>
        <View style={styles.hintCard}>
          <Text style={styles.hint}>Present this code when requested.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.fullScreenBg,
  },
  glow: {
    position: 'absolute',
    alignSelf: 'center',
    top: '38%',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(201, 164, 48, 0.09)',
  },
  closeButton: {
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
  closeText: {
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
  icon: {
    width: 60,
    height: 60,
    borderRadius: 14,
    opacity: 0.85,
  },
  codeBlock: {
    alignItems: 'center',
    gap: 14,
  },
  label: {
    color: colors.textMuted,
    fontSize: 11,
    letterSpacing: 2,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  code: {
    color: colors.gold,
    fontSize: 46,
    fontWeight: '700',
    fontFamily: 'Courier',
    letterSpacing: 8,
    textAlign: 'center',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 40,
  },
  hintCard: {
    backgroundColor: colors.card,
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
