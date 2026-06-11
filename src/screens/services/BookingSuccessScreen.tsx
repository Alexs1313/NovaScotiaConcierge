import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StackScreenProps} from '@react-navigation/stack';
import {colors} from '../../constants/theme';
import type {ServicesStackParamList} from '../../nav/types';

type Props = StackScreenProps<ServicesStackParamList, 'BookingConfirmation'>;

export function BookingSuccessScreen({navigation}: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.shell,
        {paddingTop: insets.top, paddingBottom: insets.bottom},
      ]}>
      <View style={styles.inner}>
        <View style={styles.glyphBox}>
          <Text style={styles.check}>✓</Text>
        </View>
        <View style={styles.textBlock}>
          <Text style={styles.heading}>
            Booking request sent
          </Text>
          <Text style={styles.subheading}>
            Your request has been prepared. A resort assistant may confirm the
            details.
          </Text>
        </View>
        <View style={styles.statusCard}>
          <Text style={styles.statusLabel}>Status</Text>
          <Text style={styles.statusValue}>
            Request Sent — Awaiting Confirmation
          </Text>
        </View>
        <Pressable
          style={styles.action}
          onPress={() => navigation.popToTop()}>
          <Text style={styles.actionLabel}>
            Back to Services
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  inner: {
    alignItems: 'center',
    gap: 18,
  },
  glyphBox: {
    width: 80,
    height: 80,
    borderRadius: 22,
    backgroundColor: colors.successBg,
    borderWidth: 1,
    borderColor: colors.success,
    alignItems: 'center',
    justifyContent: 'center',
  },
  check: {
    color: colors.success,
    fontSize: 36,
  },
  textBlock: {
    alignItems: 'center',
    gap: 9,
  },
  heading: {
    color: colors.cream,
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Georgia',
    textAlign: 'center',
  },
  subheading: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
  },
  statusCard: {
    width: '100%',
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    paddingHorizontal: 21,
    paddingVertical: 15,
    alignItems: 'center',
    gap: 4,
  },
  statusLabel: {
    color: colors.gold,
    fontSize: 12,
    fontWeight: '600',
  },
  statusValue: {
    color: colors.textMuted,
    fontSize: 14,
    textAlign: 'center',
  },
  action: {
    width: '100%',
    backgroundColor: colors.gold,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  actionLabel: {
    color: colors.actionText,
    fontSize: 15,
    fontWeight: '700',
  },
});
