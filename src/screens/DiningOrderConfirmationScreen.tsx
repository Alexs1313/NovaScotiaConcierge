import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StackScreenProps} from '@react-navigation/stack';
import {colors} from '../theme/colors';
import type {DiningStackParamList} from '../navigation/Stack';

type Props = StackScreenProps<
  DiningStackParamList,
  'DiningOrderConfirmation'
>;

export function DiningOrderConfirmationScreen({navigation}: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <View style={styles.iconSquare}>
          <Text style={styles.check}>✓</Text>
        </View>
        <Text style={styles.title}>Dining order sent</Text>
        <Text style={styles.subtitle}>
          Your dining request has been prepared for the restaurant team.
        </Text>
        <View style={styles.statusCard}>
          <Text style={styles.statusLabel}>Status</Text>
          <Text style={styles.statusValue}>
            Order Sent — Awaiting Preparation
          </Text>
        </View>
      </View>
      <View style={[styles.footer, {paddingBottom: insets.bottom + 16}]}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.popToTop()}>
          <Text style={styles.buttonText}>Back to Menu</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 14,
  },
  iconSquare: {
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
  check: {
    color: colors.success,
    fontSize: 32,
    fontWeight: '700',
  },
  title: {
    color: colors.cream,
    fontSize: 22,
    fontWeight: '700',
    fontFamily: 'Georgia',
    textAlign: 'center',
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 12,
  },
  statusCard: {
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
  statusLabel: {
    color: colors.gold,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  statusValue: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  footer: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  button: {
    backgroundColor: colors.gold,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 15,
    fontWeight: '700',
  },
});
