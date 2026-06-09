import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../theme/colors';

type Props = {total: number; active: number};

export function ProgressDots({total, active}: Props) {
  return (
    <View style={styles.row}>
      {Array.from({length: total}).map((_, i) => (
        <View
          key={i}
          style={[styles.dot, i === active && styles.dotActive]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.border,
  },
  dotActive: {
    backgroundColor: colors.gold,
    width: 22,
  },
});
