import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../constants/theme';

type Props = {total: number; active: number};

export function ProgressDots({total, active}: Props) {
  return (
    <View style={styles.stepDotsRow}>
      {Array.from({length: total}).map((_, i) => (
        <View
          key={i}
          style={[styles.stepDotsBullet, i === active && styles.dotOn]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  stepDotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  stepDotsBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.border,
  },
  dotOn: {
    backgroundColor: colors.gold,
    width: 22,
  },
});
