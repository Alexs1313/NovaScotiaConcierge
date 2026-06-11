import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../NovaScotiaConciergeCore/NovaScotiaConciergeTheme/NovaScotiaConciergeColors';

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
    <View style={styles.novaScotiaConciergeColumn}>
      <Pressable style={styles.novaScotiaConciergeNextButton} onPress={onNext}>
        <Text style={styles.novaScotiaConciergeNextText}>{nextLabel}</Text>
      </Pressable>
      {showSkip && onSkip ? (
        <Pressable style={styles.novaScotiaConciergeSkipButton} onPress={onSkip}>
          <Text style={styles.novaScotiaConciergeSkipText}>Skip</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeColumn: {
    gap: 9,
    width: '100%',
  },
  novaScotiaConciergeNextButton: {
    width: '100%',
    backgroundColor: colors.gold,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  novaScotiaConciergeNextText: {
    color: colors.buttonText,
    fontSize: 15,
    fontWeight: '700',
  },
  novaScotiaConciergeSkipButton: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  novaScotiaConciergeSkipText: {
    color: colors.cream,
    fontSize: 14,
    fontWeight: '400',
  },
});
