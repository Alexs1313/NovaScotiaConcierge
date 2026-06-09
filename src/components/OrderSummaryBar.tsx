import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme/colors';

type Props = {
  itemCount: number;
  total: number;
  onReview: () => void;
};

export function OrderSummaryBar({itemCount, total, onReview}: Props) {
  return (
    <View style={styles.bar}>
      <View style={styles.left}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{itemCount}</Text>
        </View>
        <View>
          <Text style={styles.itemsLabel}>
            {itemCount} item{itemCount === 1 ? '' : 's'} selected
          </Text>
          <Text style={styles.total}>${total}</Text>
        </View>
      </View>
      <Pressable style={styles.reviewButton} onPress={onReview}>
        <Text style={styles.reviewButtonText}>Review Order</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
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
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  badge: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: colors.buttonText,
    fontSize: 14,
    fontWeight: '700',
  },
  itemsLabel: {
    color: colors.cream,
    fontSize: 12,
  },
  total: {
    color: colors.gold,
    fontSize: 16,
    fontWeight: '700',
  },
  reviewButton: {
    backgroundColor: colors.gold,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  reviewButtonText: {
    color: colors.buttonText,
    fontSize: 13,
    fontWeight: '700',
  },
});
