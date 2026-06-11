import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import type {DiningItem} from '../types';
import {colors} from '../constants/theme';

type Props = {
  item: DiningItem;
  onAdd: () => void;
};

export function DiningMenuCard({item, onAdd}: Props) {
  return (
    <View style={styles.panel}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.inner}>
        <View style={styles.headingRow}>
          <Text style={styles.heading}>{item.title}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <Text style={styles.category}>{item.category.toUpperCase()}</Text>
        <Text style={styles.copy}>{item.description}</Text>
        <Pressable style={styles.addButton} onPress={onAdd}>
          <Text style={styles.addButtonText}>Add</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    flexDirection: 'row',
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 14,
    gap: 12,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 12,
  },
  inner: {
    flex: 1,
    gap: 4,
  },
  headingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
  },
  heading: {
    flex: 1,
    color: colors.cream,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Georgia',
    lineHeight: 18,
  },
  price: {
    color: colors.gold,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Georgia',
  },
  category: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  copy: {
    color: colors.textMuted,
    fontSize: 11,
    lineHeight: 16,
  },
  addButton: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: colors.goldBorder,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginTop: 4,
  },
  addButtonText: {
    color: colors.gold,
    fontSize: 12,
    fontWeight: '600',
  },
});
