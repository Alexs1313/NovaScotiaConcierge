import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../NovaScotiaConciergeCore/NovaScotiaConciergeTheme/NovaScotiaConciergeColors';

type Props = {total: number; active: number};

export function ProgressDots({total, active}: Props) {
  return (
    <View style={styles.novaScotiaConciergeRow}>
      {Array.from({length: total}).map((_, i) => (
        <View
          key={i}
          style={[styles.novaScotiaConciergeDot, i === active && styles.novaScotiaConciergeDotActive]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  novaScotiaConciergeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.border,
  },
  novaScotiaConciergeDotActive: {
    backgroundColor: colors.gold,
    width: 22,
  },
});
