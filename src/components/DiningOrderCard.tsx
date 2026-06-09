import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {getDiningItemById} from '../data/diningMenu';
import type {DiningOrder} from '../types/assist';
import {colors} from '../theme/colors';

type Props = {order: DiningOrder};

export function DiningOrderCard({order}: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Dining Order</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{order.status}</Text>
        </View>
      </View>
      {order.items.map((line, index) => {
        const item = getDiningItemById(line.itemId);
        if (!item) {
          return null;
        }
        return (
          <View
            key={`${line.itemId}-${index}`}
            style={[
              styles.itemRow,
              index < order.items.length - 1 && styles.itemRowBorder,
            ]}>
            <View style={styles.itemLeft}>
              <Image source={item.image} style={styles.itemImage} />
              <Text style={styles.itemName}>
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
  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 12,
    gap: 12,
  },
  title: {
    flex: 1,
    color: colors.cream,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  badge: {
    backgroundColor: colors.cardInner,
    borderWidth: 1,
    borderColor: colors.goldBorder,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  badgeText: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 11,
    gap: 12,
  },
  itemRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  itemImage: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  itemName: {
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
