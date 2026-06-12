import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants/theme';

type Props = {
  onNext: () => void;
  onSkip?: () => void;
  nextLabel?: string;
  showSkip?: boolean;
};

export function OnboardingButtons({
  onNext,
  onSkip,
  nextLabel = 'Next',
  showSkip = true,
}: Props) {
  return (
    <View style={styles.column}>
      <Pressable style={styles.nextButton} onPress={onNext}>
        <Text style={styles.nextText}>{nextLabel}</Text>
      </Pressable>
      {showSkip && onSkip ? (
        <Pressable style={styles.skipButton} onPress={onSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  column: {
    gap: 9,
    width: '100%',
  },
  nextButton: {
    width: '100%',
    backgroundColor: colors.gold,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  nextText: {
    color: colors.actionText,
    fontSize: 15,
    fontWeight: '700',
  },
  skipButton: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  skipText: {
    color: colors.cream,
    fontSize: 14,
    fontWeight: '400',
  },
});
