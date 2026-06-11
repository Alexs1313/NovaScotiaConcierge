import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../../NovaScotiaConciergeCore/NovaScotiaConciergeTheme/NovaScotiaConciergeColors';

type Props = {
  itemCount: number;
  total: number;
  onReview: () => void;
};

export function OrderSummaryBar({itemCount, total, onReview}: Props) {
  return (
    <View style={styles.novaScotiaConciergeBar}>
      <View style={styles.novaScotiaConciergeLeft}>
        <View style={styles.novaScotiaConciergeBadge}>
          <Text style={styles.novaScotiaConciergeBadgeText}>{itemCount}</Text>
        </View>
        <View>
          <Text style={styles.novaScotiaConciergeItemsLabel}>
            {itemCount} item{itemCount === 1 ? '' : 's'} selected
          </Text>
          <Text style={styles.novaScotiaConciergeTotal}>${total}</Text>
        </View>
      </View>
      <Pressable style={styles.novaScotiaConciergeReviewButton} onPress={onReview}>
        <Text style={styles.novaScotiaConciergeReviewButtonText}>Review Order</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.card,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingHorizontal: 20,
    paddingVertical: 14,
    gap: 12,
  },
  novaScotiaConciergeLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  novaScotiaConciergeBadge: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  novaScotiaConciergeBadgeText: {
    color: colors.buttonText,
    fontSize: 14,
    fontWeight: '700',
  },
  novaScotiaConciergeItemsLabel: {
    color: colors.cream,
    fontSize: 12,
  },
  novaScotiaConciergeTotal: {
    color: colors.gold,
    fontSize: 16,
    fontWeight: '700',
  },
  novaScotiaConciergeReviewButton: {
    backgroundColor: colors.gold,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  novaScotiaConciergeReviewButtonText: {
    color: colors.buttonText,
    fontSize: 13,
    fontWeight: '700',
  },
});
