import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import type {DiningItem} from '../../../../NovaScotiaConciergeData/NovaScotiaConciergeDining/NovaScotiaConciergeDiningMenu/NovaScotiaConciergeDiningMenu';
import {colors} from '../../../NovaScotiaConciergeTheme/NovaScotiaConciergeColors/NovaScotiaConciergeColors';

type Props = {
  item: DiningItem;
  onAdd: () => void;
};

export function DiningMenuCard({item, onAdd}: Props) {
  return (
    <View style={styles.novaScotiaConciergeCard}>
      <Image source={item.image} style={styles.novaScotiaConciergeImage} />
      <View style={styles.novaScotiaConciergeContent}>
        <View style={styles.novaScotiaConciergeTitleRow}>
          <Text style={styles.novaScotiaConciergeTitle}>{item.title}</Text>
          <Text style={styles.novaScotiaConciergePrice}>${item.price}</Text>
        </View>
        <Text style={styles.novaScotiaConciergeCategory}>{item.category.toUpperCase()}</Text>
        <Text style={styles.novaScotiaConciergeDescription}>{item.description}</Text>
        <Pressable style={styles.novaScotiaConciergeAddButton} onPress={onAdd}>
          <Text style={styles.novaScotiaConciergeAddButtonText}>Add</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeCard: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 14,
    gap: 12,
  },
  novaScotiaConciergeImage: {
    width: 72,
    height: 72,
    borderRadius: 12,
  },
  novaScotiaConciergeContent: {
    flex: 1,
    gap: 4,
  },
  novaScotiaConciergeTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
  },
  novaScotiaConciergeTitle: {
    flex: 1,
    color: colors.cream,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Georgia',
    lineHeight: 18,
  },
  novaScotiaConciergePrice: {
    color: colors.gold,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Georgia',
  },
  novaScotiaConciergeCategory: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  novaScotiaConciergeDescription: {
    color: colors.textMuted,
    fontSize: 11,
    lineHeight: 16,
  },
  novaScotiaConciergeAddButton: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: colors.goldBorder,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginTop: 4,
  },
  novaScotiaConciergeAddButtonText: {
    color: colors.gold,
    fontSize: 12,
    fontWeight: '600',
  },
});
