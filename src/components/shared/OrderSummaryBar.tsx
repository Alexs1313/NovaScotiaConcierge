import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants/theme';

type Props = {
  itemCount: number;
  total: number;
  onReview: () => void;
};

export function OrderSummaryBar({itemCount, total, onReview}: Props) {
  return (
    <View style={styles.cartSummaryBar}>
      <View style={styles.barStart}>
        <View style={styles.cartSummaryStatusChip}>
          <Text style={styles.cartSummaryStatusChipText}>{itemCount}</Text>
        </View>
        <View>
          <Text style={styles.cartSummarySummaryMeta}>
            {itemCount} item{itemCount === 1 ? '' : 's'} selected
          </Text>
          <Text style={styles.barTotal}>${total}</Text>
        </View>
      </View>
      <Pressable style={styles.actionReview} onPress={onReview}>
        <Text style={styles.actionReviewLabel}>Review Order</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cartSummaryBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.panel,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingHorizontal: 20,
    paddingVertical: 14,
    gap: 12,
  },
  barStart: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  cartSummaryStatusChip: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartSummaryStatusChipText: {
    color: colors.actionText,
    fontSize: 14,
    fontWeight: '700',
  },
  cartSummarySummaryMeta: {
    color: colors.cream,
    fontSize: 12,
  },
  barTotal: {
    color: colors.gold,
    fontSize: 16,
    fontWeight: '700',
  },
  actionReview: {
    backgroundColor: colors.gold,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  actionReviewLabel: {
    color: colors.actionText,
    fontSize: 13,
    fontWeight: '700',
  },
});
