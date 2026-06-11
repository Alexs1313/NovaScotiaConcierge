import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {novaScotiaConciergeDi} from '../../../../NovaScotiaConciergeApp/NovaScotiaConciergeDi';
import type {DiningOrder} from '../../../../NovaScotiaConciergeTypes/NovaScotiaConciergeAssist';
import {colors} from '../../../../NovaScotiaConciergeCore/NovaScotiaConciergeTheme/NovaScotiaConciergeColors';

type Props = {order: DiningOrder};

export function DiningOrderCard({order}: Props) {
  return (
    <View style={styles.novaScotiaConciergeCard}>
      <View style={styles.novaScotiaConciergeHeader}>
        <Text style={styles.novaScotiaConciergeTitle}>Dining Order</Text>
        <View style={styles.novaScotiaConciergeBadge}>
          <Text style={styles.novaScotiaConciergeBadgeText}>{order.status}</Text>
        </View>
      </View>
      {order.items.map((line, index) => {
        const item = novaScotiaConciergeDi.diningMenuRepository.getItemById(
          line.itemId,
        );
        if (!item) {
          return null;
        }
        return (
          <View
            key={`${line.itemId}-${index}`}
            style={[
              styles.novaScotiaConciergeItemRow,
              index < order.items.length - 1 && styles.novaScotiaConciergeItemRowBorder,
            ]}>
            <View style={styles.novaScotiaConciergeItemLeft}>
              <Image source={item.image} style={styles.novaScotiaConciergeItemImage} />
              <Text style={styles.novaScotiaConciergeItemName}>
                {item.title} × {line.quantity}
              </Text>
            </View>
            <Text style={styles.novaScotiaConciergeItemPrice}>
              ${item.price * line.quantity}
            </Text>
          </View>
        );
      })}
      <View style={styles.novaScotiaConciergeSummarySection}>
        <View style={styles.novaScotiaConciergeSummaryRow}>
          <Text style={styles.novaScotiaConciergeSummaryLabel}>Pickup Time</Text>
          <Text style={styles.novaScotiaConciergeSummaryValue}>{order.pickupTime}</Text>
        </View>
        <View style={styles.novaScotiaConciergeSummaryRow}>
          <Text style={styles.novaScotiaConciergeSummaryLabel}>Room</Text>
          <Text style={styles.novaScotiaConciergeSummaryValue}>{order.room}</Text>
        </View>
        <View style={styles.novaScotiaConciergeSummaryRow}>
          <Text style={styles.novaScotiaConciergeTotalLabel}>Total</Text>
          <Text style={styles.novaScotiaConciergeTotalValue}>${order.total}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    overflow: 'hidden',
  },
  novaScotiaConciergeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 12,
    gap: 12,
  },
  novaScotiaConciergeTitle: {
    flex: 1,
    color: colors.cream,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  novaScotiaConciergeBadge: {
    backgroundColor: colors.cardInner,
    borderWidth: 1,
    borderColor: colors.goldBorder,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  novaScotiaConciergeBadgeText: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  novaScotiaConciergeItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 11,
    gap: 12,
  },
  novaScotiaConciergeItemRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  novaScotiaConciergeItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  novaScotiaConciergeItemImage: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  novaScotiaConciergeItemName: {
    flex: 1,
    color: colors.textMuted,
    fontSize: 12,
  },
  novaScotiaConciergeItemPrice: {
    color: colors.cream,
    fontSize: 12,
    fontWeight: '600',
  },
  novaScotiaConciergeSummarySection: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingHorizontal: 18,
    paddingVertical: 12,
    gap: 8,
  },
  novaScotiaConciergeSummaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  novaScotiaConciergeTotalLabel: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '600',
  },
  novaScotiaConciergeTotalValue: {
    color: colors.gold,
    fontSize: 14,
    fontWeight: '700',
  },
  novaScotiaConciergeSummaryLabel: {
    color: colors.textMuted,
    fontSize: 12,
  },
  novaScotiaConciergeSummaryValue: {
    color: colors.cream,
    fontSize: 12,
  },
});
