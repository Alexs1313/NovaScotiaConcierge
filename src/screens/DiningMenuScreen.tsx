import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StackScreenProps} from '@react-navigation/stack';
import {Background} from '../components/Background';
import {DiningMenuCard} from '../components/DiningMenuCard';
import {OrderSummaryBar} from '../components/OrderSummaryBar';
import {useDiningCart} from '../context/DiningCartContext';
import {DINING_MENU} from '../data/diningMenu';
import type {DiningStackParamList} from '../navigation/Stack';
import {colors} from '../theme/colors';

type Props = StackScreenProps<DiningStackParamList, 'DiningMenu'>;

export function DiningMenuScreen({navigation}: Props) {
  const insets = useSafeAreaInsets();
  const {addItem, itemCount, total} = useDiningCart();

  return (
    <View style={styles.root}>
      <Background source={require('../assets/background.png')}>
        <View style={[styles.header, {paddingTop: insets.top + 16}]}>
          <View style={styles.titleSection}>
            <Text style={styles.title}>Dining Menu</Text>
            <Text style={styles.subtitle}>
              Choose dining items and prepare your resort order.
            </Text>
          </View>
        </View>
        <FlatList
          data={DINING_MENU}
          scrollEnabled={false}
          keyExtractor={item => item.id}
          contentContainerStyle={[
            styles.list,
            itemCount > 0 && {paddingBottom: insets.bottom + 80},
          ]}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <DiningMenuCard item={item} onAdd={() => addItem(item.id)} />
          )}
        />
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
  root: {
    flex: 1,
  },
  header: {
    paddingBottom: 12,
    gap: 10,
  },
  titleSection: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 15,
    paddingHorizontal: 20,
    gap: 6,
  },
  title: {
    color: colors.cream,
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Georgia',
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    paddingTop: 12,
    gap: 12,
  },
});
