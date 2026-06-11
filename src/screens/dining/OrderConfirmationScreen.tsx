import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StackScreenProps} from '@react-navigation/stack';
import {colors} from '../../constants/theme';
import type {DiningStackParamList} from '../../nav/types';

type Props = StackScreenProps<DiningStackParamList, 'DiningOrderConfirmation'>;

export function OrderConfirmationScreen({navigation}: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.shell}>
      <View style={styles.inner}>
        <View style={styles.iconSquare}>
          <Text style={styles.check}>✓</Text>
        </View>
        <Text style={styles.heading}>Dining order sent</Text>
        <Text style={styles.subheading}>
          Your dining request has been prepared for the restaurant team.
        </Text>
        <View style={styles.statusCard}>
          <Text style={styles.statusLabel}>Status</Text>
          <Text style={styles.statusValue}>
            Order Sent — Awaiting Preparation
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.footer,
          {paddingBottom: insets.bottom + 16},
        ]}>
        <Pressable
          style={styles.action}
          onPress={() => navigation.popToTop()}>
          <Text style={styles.actionLabel}>Back to Menu</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  inner: {
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
  heading: {
    color: colors.cream,
    fontSize: 22,
    fontWeight: '700',
    fontFamily: 'Georgia',
    textAlign: 'center',
  },
  subheading: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 12,
  },
  statusCard: {
    width: '100%',
    backgroundColor: colors.panel,
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
  action: {
    backgroundColor: colors.gold,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  actionLabel: {
    color: colors.actionText,
    fontSize: 15,
    fontWeight: '700',
  },
});
