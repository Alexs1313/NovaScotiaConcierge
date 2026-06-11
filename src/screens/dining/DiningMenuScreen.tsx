import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StackScreenProps} from '@react-navigation/stack';
import {Background} from '../../components/Background';
import {DiningMenuCard} from '../../components/DiningMenuCard';
import {OrderSummaryBar} from '../../components/OrderSummaryBar';
import {useDiningCart} from '../../hooks/useDiningCart';
import {DINING_MENU} from '../../data/diningMenu';
import type {DiningStackParamList} from '../../nav/types';
import {colors} from '../../constants/theme';

type Props = StackScreenProps<DiningStackParamList, 'DiningMenu'>;

export function DiningMenuScreen({navigation}: Props) {
  const insets = useSafeAreaInsets();
  const {addItem, itemCount, total} = useDiningCart();
  const menu = DINING_MENU;

  return (
    <View style={styles.shell}>
      <Background>
        <View
          style={[
            styles.topBlock,
            {paddingTop: insets.top + 16},
          ]}>
          <View style={styles.headingBlock}>
            <Text style={styles.heading}>Dining Menu</Text>
            <Text style={styles.subheading}>
              Choose dining items and prepare your resort order.
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.listWrap,
            itemCount > 0 && {paddingBottom: insets.bottom + 80},
          ]}>
          {menu.map(item => (
            <DiningMenuCard
              key={item.id}
              item={item}
              onAdd={() => addItem(item.id)}
            />
          ))}
        </View>
      </Background>
      {itemCount > 0 && (
        <OrderSummaryBar
          itemCount={itemCount}
          total={total}
          onReview={() => navigation.navigate('OrderReview')}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
  },
  topBlock: {
    paddingBottom: 12,
    gap: 10,
  },
  headingBlock: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 15,
    paddingHorizontal: 20,
    gap: 6,
  },
  heading: {
    color: colors.cream,
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Georgia',
  },
  subheading: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  listWrap: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    paddingTop: 12,
    gap: 12,
  },
});
