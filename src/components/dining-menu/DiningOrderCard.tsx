import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {getDiningItemById} from '../../content/diningMenu';
import type {DiningOrder} from '../../types';
import {colors} from '../../constants/theme';

type Props = {order: DiningOrder};

export function DiningOrderCard({order}: Props) {
  return (
    <View style={styles.diningOrderCard}>
      <View style={styles.diningOrderHeader}>
        <Text style={styles.diningOrderTitle}>Dining Order</Text>
        <View style={styles.diningOrderStatusChip}>
          <Text style={styles.diningOrderStatusChipText}>{order.status}</Text>
        </View>
      </View>
      {order.items.map((orderLine, lineIndex) => {
        const menuItem = getDiningItemById(orderLine.itemId);
        if (!menuItem) {
          return null;
        }
        return (
          <View
            key={`${orderLine.itemId}-${lineIndex}`}
            style={[
              styles.diningOrderItemRow,
              lineIndex < order.items.length - 1 &&
                styles.diningOrderItemDivider,
            ]}>
            <View style={styles.diningOrderDishStart}>
              <Image
                source={menuItem.image}
                style={styles.diningOrderDishThumb}
              />
              <Text style={styles.diningOrderDishName}>
                {menuItem.title} × {orderLine.quantity}
              </Text>
            </View>
            <Text style={styles.diningOrderDishPrice}>
              ${menuItem.price * orderLine.quantity}
            </Text>
          </View>
        );
      })}
      <View style={styles.summarySection}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Pickup Time</Text>
          <Text style={styles.summaryValue}>{order.pickupTime}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Room</Text>
          <Text style={styles.summaryValue}>{order.room}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.diningOrderTotalLabel}>Total</Text>
          <Text style={styles.diningOrderTotalValue}>${order.total}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  diningOrderCard: {
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    overflow: 'hidden',
  },
  diningOrderHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 12,
    gap: 12,
  },
  diningOrderTitle: {
    flex: 1,
    color: colors.cream,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  diningOrderStatusChip: {
    backgroundColor: colors.panelInner,
    borderWidth: 1,
    borderColor: colors.goldBorder,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  diningOrderStatusChipText: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  diningOrderItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 11,
    gap: 12,
  },
  diningOrderItemDivider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  diningOrderDishStart: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  diningOrderDishThumb: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  diningOrderDishName: {
    flex: 1,
    color: colors.textMuted,
    fontSize: 12,
  },
  diningOrderDishPrice: {
    color: colors.cream,
    fontSize: 12,
    fontWeight: '600',
  },
  summarySection: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingHorizontal: 18,
    paddingVertical: 12,
    gap: 8,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  diningOrderTotalLabel: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '600',
  },
  diningOrderTotalValue: {
    color: colors.gold,
    fontSize: 14,
    fontWeight: '700',
  },
  summaryLabel: {
    color: colors.textMuted,
    fontSize: 12,
  },
  summaryValue: {
    color: colors.cream,
    fontSize: 12,
  },
});
