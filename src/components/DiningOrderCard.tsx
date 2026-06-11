import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {getDiningItemById} from '../data/diningMenu';
import type {DiningOrder} from '../types';
import {colors} from '../constants/theme';

type Props = {order: DiningOrder};

export function DiningOrderCard({order}: Props) {
  return (
    <View style={styles.panel}>
      <View style={styles.topBlock}>
        <Text style={styles.heading}>Dining Order</Text>
        <View style={styles.chip}>
          <Text style={styles.chipLabel}>{order.status}</Text>
        </View>
      </View>
      {order.items.map((line, index) => {
        const item = getDiningItemById(
          line.itemId,
        );
        if (!item) {
          return null;
        }
        return (
          <View
            key={`${line.itemId}-${index}`}
            style={[
              styles.rowItem,
              index < order.items.length - 1 && styles.rowItemDivider,
            ]}>
            <View style={styles.itemStart}>
              <Image source={item.image} style={styles.itemThumb} />
              <Text style={styles.itemHeading}>
                {item.title} × {line.quantity}
              </Text>
            </View>
            <Text style={styles.itemPrice}>
              ${item.price * line.quantity}
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
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>${order.total}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    overflow: 'hidden',
  },
  topBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 12,
    gap: 12,
  },
  heading: {
    flex: 1,
    color: colors.cream,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  chip: {
    backgroundColor: colors.panelInner,
    borderWidth: 1,
    borderColor: colors.goldBorder,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  chipLabel: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 11,
    gap: 12,
  },
  rowItemDivider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  itemStart: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  itemThumb: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  itemHeading: {
    flex: 1,
    color: colors.textMuted,
    fontSize: 12,
  },
  itemPrice: {
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
  totalLabel: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '600',
  },
  totalValue: {
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
