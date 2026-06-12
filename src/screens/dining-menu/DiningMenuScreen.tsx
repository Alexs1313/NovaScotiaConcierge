import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Background} from '../../components/shared/Background';
import {DiningMenuCard} from '../../components/dining-menu/DiningMenuCard';
import {OrderSummaryBar} from '../../components/shared/OrderSummaryBar';
import {useDiningCart} from '../../hooks/useDiningCart';
import {DINING_MENU} from '../../content/diningMenu';
import {colors} from '../../constants/theme';

type DiningMenuScreenProps = {
  onOpenReview: () => void;
};

export function DiningMenuScreen({onOpenReview}: DiningMenuScreenProps) {
  const insets = useSafeAreaInsets();
  const {addItem, itemCount, total} = useDiningCart();

  return (
    <View style={styles.DiningMenuVestibule}>
      <Background>
        <View style={[styles.DiningMenuCornice, {paddingTop: insets.top + 16}]}>
          <View style={styles.DiningMenuTitleEnclave}>
            <Text style={styles.DiningMenuCorniceFiligree}>Dining Menu</Text>
            <Text style={styles.DiningMenuCorniceEmblem}>
              Choose dining items and prepare your resort order.
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.DiningMenuListTapestry,
            itemCount > 0 && {paddingBottom: insets.bottom + 80},
          ]}>
          {DINING_MENU.map(menuItem => (
            <DiningMenuCard
              key={menuItem.id}
              menuItem={menuItem}
              onAdd={() => addItem(menuItem.id)}
            />
          ))}
        </View>
      </Background>
      {itemCount > 0 && (
        <OrderSummaryBar
          itemCount={itemCount}
          total={total}
          onReview={onOpenReview}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  DiningMenuVestibule: {
    flex: 1,
  },
  DiningMenuCornice: {
    paddingBottom: 12,
    gap: 10,
  },
  DiningMenuTitleEnclave: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 15,
    paddingHorizontal: 20,
    gap: 6,
  },
  DiningMenuCorniceFiligree: {
    color: colors.cream,
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Georgia',
  },
  DiningMenuCorniceEmblem: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  DiningMenuListTapestry: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    paddingTop: 12,
    gap: 12,
  },
});
