import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../constants/theme';

type BookingSuccessScreenProps = {
  onDone: () => void;
};

export function BookingSuccessScreen({onDone}: BookingSuccessScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.BookingSuccessVestibule,
        {paddingTop: insets.top, paddingBottom: insets.bottom},
      ]}>
      <View style={styles.BookingSuccessScrollTapestry}>
        <View style={styles.BookingSuccessSigilReliquary}>
          <Text style={styles.BookingSuccessCheckSigil}>✓</Text>
        </View>
        <View style={styles.BookingSuccessMessageEnclave}>
          <Text style={styles.BookingSuccessCorniceFiligree}>
            Booking request sent
          </Text>
          <Text style={styles.BookingSuccessCorniceEmblem}>
            Your request has been prepared. A resort assistant may confirm the
            details.
          </Text>
        </View>
        <View style={styles.BookingSuccessStatusReliquary}>
          <Text style={styles.BookingSuccessStatusEmblem}>Status</Text>
          <Text style={styles.BookingSuccessStatusVellum}>
            Request Sent — Awaiting Confirmation
          </Text>
        </View>
        <Pressable style={styles.BookingSuccessGildedLatch} onPress={onDone}>
          <Text style={styles.BookingSuccessGildedLatchCaption}>
            Back to Services
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  BookingSuccessVestibule: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  BookingSuccessScrollTapestry: {
    alignItems: 'center',
    gap: 18,
  },
  BookingSuccessSigilReliquary: {
    width: 80,
    height: 80,
    borderRadius: 22,
    backgroundColor: colors.successBg,
    borderWidth: 1,
    borderColor: colors.success,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BookingSuccessCheckSigil: {
    color: colors.success,
    fontSize: 36,
  },
  BookingSuccessMessageEnclave: {
    alignItems: 'center',
    gap: 9,
  },
  BookingSuccessCorniceFiligree: {
    color: colors.cream,
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Georgia',
    textAlign: 'center',
  },
  BookingSuccessCorniceEmblem: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
  },
  BookingSuccessStatusReliquary: {
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
  BookingSuccessStatusEmblem: {
    color: colors.gold,
    fontSize: 12,
    fontWeight: '600',
  },
  BookingSuccessStatusVellum: {
    color: colors.textMuted,
    fontSize: 14,
    textAlign: 'center',
  },
  BookingSuccessGildedLatch: {
    width: '100%',
    backgroundColor: colors.gold,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  BookingSuccessGildedLatchCaption: {
    color: colors.actionText,
    fontSize: 15,
    fontWeight: '700',
  },
});
