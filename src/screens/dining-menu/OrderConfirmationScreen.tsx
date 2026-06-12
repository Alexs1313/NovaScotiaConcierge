import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../constants/theme';

type OrderConfirmationScreenProps = {
  onDone: () => void;
};

export function OrderConfirmationScreen({onDone}: OrderConfirmationScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.OrderConfirmationVestibule}>
      <View style={styles.OrderConfirmationScrollTapestry}>
        <View style={styles.OrderConfirmationSuccessSigil}>
          <Text style={styles.OrderConfirmationCheckGlyph}>✓</Text>
        </View>
        <Text style={styles.OrderConfirmationCorniceFiligree}>
          Dining order sent
        </Text>
        <Text style={styles.OrderConfirmationCorniceEmblem}>
          Your dining request has been prepared for the restaurant team.
        </Text>
        <View style={styles.OrderConfirmationStatusReliquary}>
          <Text style={styles.OrderConfirmationStatusEmblem}>Status</Text>
          <Text style={styles.OrderConfirmationStatusVellum}>
            Order Sent — Awaiting Preparation
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.OrderConfirmationFooterBerth,
          {paddingBottom: insets.bottom + 16},
        ]}>
        <Pressable style={styles.OrderConfirmationGildedLatch} onPress={onDone}>
          <Text style={styles.OrderConfirmationGildedLatchCaption}>
            Back to Menu
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  OrderConfirmationVestibule: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  OrderConfirmationScrollTapestry: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 14,
  },
  OrderConfirmationSuccessSigil: {
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
  OrderConfirmationCheckGlyph: {
    color: colors.success,
    fontSize: 32,
    fontWeight: '700',
  },
  OrderConfirmationCorniceFiligree: {
    color: colors.cream,
    fontSize: 22,
    fontWeight: '700',
    fontFamily: 'Georgia',
    textAlign: 'center',
  },
  OrderConfirmationCorniceEmblem: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 12,
  },
  OrderConfirmationStatusReliquary: {
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
  OrderConfirmationStatusEmblem: {
    color: colors.gold,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  OrderConfirmationStatusVellum: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  OrderConfirmationFooterBerth: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  OrderConfirmationGildedLatch: {
    backgroundColor: colors.gold,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  OrderConfirmationGildedLatchCaption: {
    color: colors.actionText,
    fontSize: 15,
    fontWeight: '700',
  },
});
