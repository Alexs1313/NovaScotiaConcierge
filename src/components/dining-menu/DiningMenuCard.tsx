import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import type {DiningItem} from '../../types';
import {colors} from '../../constants/theme';

type Props = {
  menuItem: DiningItem;
  onAdd: () => void;
};

export function DiningMenuCard({menuItem, onAdd}: Props) {
  return (
    <View style={styles.diningMenuCard}>
      <Image source={menuItem.image} style={styles.diningMenuDishPhoto} />
      <View style={styles.diningMenuDishDetails}>
        <View style={styles.diningMenuDishHeader}>
          <Text style={styles.diningMenuDishName}>{menuItem.title}</Text>
          <Text style={styles.diningMenuPrice}>${menuItem.price}</Text>
        </View>
        <Text style={styles.diningMenuCategory}>
          {menuItem.category.toUpperCase()}
        </Text>
        <Text style={styles.diningMenuDescription}>{menuItem.description}</Text>
        <Pressable style={styles.diningMenuAddButton} onPress={onAdd}>
          <Text style={styles.diningMenuAddButtonText}>Add</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  diningMenuCard: {
    flexDirection: 'row',
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 14,
    gap: 12,
  },
  diningMenuDishPhoto: {
    width: 72,
    height: 72,
    borderRadius: 12,
  },
  diningMenuDishDetails: {
    flex: 1,
    gap: 4,
  },
  diningMenuDishHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
  },
  diningMenuDishName: {
    flex: 1,
    color: colors.cream,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Georgia',
    lineHeight: 18,
  },
  diningMenuPrice: {
    color: colors.gold,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Georgia',
  },
  diningMenuCategory: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  diningMenuDescription: {
    color: colors.textMuted,
    fontSize: 11,
    lineHeight: 16,
  },
  diningMenuAddButton: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: colors.goldBorder,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginTop: 4,
  },
  diningMenuAddButtonText: {
    color: colors.gold,
    fontSize: 12,
    fontWeight: '600',
  },
});
