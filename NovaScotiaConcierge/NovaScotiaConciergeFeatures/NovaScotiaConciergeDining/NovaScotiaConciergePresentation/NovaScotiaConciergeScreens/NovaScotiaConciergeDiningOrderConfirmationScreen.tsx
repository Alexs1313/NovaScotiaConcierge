import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StackScreenProps} from '@react-navigation/stack';
import {colors} from '../../../../NovaScotiaConciergeCore/NovaScotiaConciergeTheme/NovaScotiaConciergeColors';
import type {DiningStackParamList} from '../../../../NovaScotiaConciergeAtlas/NovaScotiaConciergeStack';

type Props = StackScreenProps<DiningStackParamList, 'DiningOrderConfirmation'>;

export function DiningOrderConfirmationScreen({navigation}: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.novaScotiaConciergeRoot}>
      <View style={styles.novaScotiaConciergeContent}>
        <View style={styles.novaScotiaConciergeIconSquare}>
          <Text style={styles.novaScotiaConciergeCheck}>✓</Text>
        </View>
        <Text style={styles.novaScotiaConciergeTitle}>Dining order sent</Text>
        <Text style={styles.novaScotiaConciergeSubtitle}>
          Your dining request has been prepared for the restaurant team.
        </Text>
        <View style={styles.novaScotiaConciergeStatusCard}>
          <Text style={styles.novaScotiaConciergeStatusLabel}>Status</Text>
          <Text style={styles.novaScotiaConciergeStatusValue}>
            Order Sent — Awaiting Preparation
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.novaScotiaConciergeFooter,
          {paddingBottom: insets.bottom + 16},
        ]}>
        <Pressable
          style={styles.novaScotiaConciergeButton}
          onPress={() => navigation.popToTop()}>
          <Text style={styles.novaScotiaConciergeButtonText}>Back to Menu</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeRoot: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  novaScotiaConciergeContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 14,
  },
  novaScotiaConciergeIconSquare: {
    width: 72,
    height: 72,
    borderRadius: 16,
    backgroundColor: colors.successBg,
    borderWidth: 2,
    borderColor: colors.success,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  novaScotiaConciergeCheck: {
    color: colors.success,
    fontSize: 32,
    fontWeight: '700',
  },
  novaScotiaConciergeTitle: {
    color: colors.cream,
    fontSize: 22,
    fontWeight: '700',
    fontFamily: 'Georgia',
    textAlign: 'center',
  },
  novaScotiaConciergeSubtitle: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 12,
  },
  novaScotiaConciergeStatusCard: {
    width: '100%',
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    alignItems: 'center',
    gap: 6,
    marginTop: 8,
  },
  novaScotiaConciergeStatusLabel: {
    color: colors.gold,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  novaScotiaConciergeStatusValue: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  novaScotiaConciergeFooter: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  novaScotiaConciergeButton: {
    backgroundColor: colors.gold,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  novaScotiaConciergeButtonText: {
    color: colors.buttonText,
    fontSize: 15,
    fontWeight: '700',
  },
});
