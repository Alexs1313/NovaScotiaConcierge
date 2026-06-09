import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StackScreenProps} from '@react-navigation/stack';
import {colors} from '../../../NovaScotiaConciergeTheme/NovaScotiaConciergeColors/NovaScotiaConciergeColors';
import type {ServicesStackParamList} from '../../../NovaScotiaConciergeNavgt/NovaScotiaConciergeStack/NovaScotiaConciergeStack';

type Props = StackScreenProps<ServicesStackParamList, 'BookingConfirmation'>;

export function BookingConfirmationScreen({navigation}: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.novaScotiaConciergeRoot,
        {paddingTop: insets.top, paddingBottom: insets.bottom},
      ]}>
      <View style={styles.novaScotiaConciergeContent}>
        <View style={styles.novaScotiaConciergeIconBox}>
          <Text style={styles.novaScotiaConciergeCheck}>✓</Text>
        </View>
        <View style={styles.novaScotiaConciergeTextBlock}>
          <Text style={styles.novaScotiaConciergeTitle}>
            Booking request sent
          </Text>
          <Text style={styles.novaScotiaConciergeSubtitle}>
            Your request has been prepared. A resort assistant may confirm the
            details.
          </Text>
        </View>
        <View style={styles.novaScotiaConciergeStatusCard}>
          <Text style={styles.novaScotiaConciergeStatusLabel}>Status</Text>
          <Text style={styles.novaScotiaConciergeStatusValue}>
            Request Sent — Awaiting Confirmation
          </Text>
        </View>
        <Pressable
          style={styles.novaScotiaConciergeButton}
          onPress={() => navigation.popToTop()}>
          <Text style={styles.novaScotiaConciergeButtonText}>
            Back to Services
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeRoot: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  novaScotiaConciergeContent: {
    alignItems: 'center',
    gap: 18,
  },
  novaScotiaConciergeIconBox: {
    width: 80,
    height: 80,
    borderRadius: 22,
    backgroundColor: colors.successBg,
    borderWidth: 1,
    borderColor: colors.success,
    alignItems: 'center',
    justifyContent: 'center',
  },
  novaScotiaConciergeCheck: {
    color: colors.success,
    fontSize: 36,
  },
  novaScotiaConciergeTextBlock: {
    alignItems: 'center',
    gap: 9,
  },
  novaScotiaConciergeTitle: {
    color: colors.cream,
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Georgia',
    textAlign: 'center',
  },
  novaScotiaConciergeSubtitle: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
  },
  novaScotiaConciergeStatusCard: {
    width: '100%',
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    paddingHorizontal: 21,
    paddingVertical: 15,
    alignItems: 'center',
    gap: 4,
  },
  novaScotiaConciergeStatusLabel: {
    color: colors.gold,
    fontSize: 12,
    fontWeight: '600',
  },
  novaScotiaConciergeStatusValue: {
    color: colors.textMuted,
    fontSize: 14,
    textAlign: 'center',
  },
  novaScotiaConciergeButton: {
    width: '100%',
    backgroundColor: colors.gold,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  novaScotiaConciergeButtonText: {
    color: colors.buttonText,
    fontSize: 15,
    fontWeight: '700',
  },
});
