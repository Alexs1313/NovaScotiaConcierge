import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StackScreenProps} from '@react-navigation/stack';
import {Background} from '../../../NovaScotiaConciergeComponents/NovaScotiaConciergeCommon/NovaScotiaConciergeBackground/NovaScotiaConciergeBackground';
import {DiningMenuCard} from '../../../NovaScotiaConciergeComponents/NovaScotiaConciergeDining/NovaScotiaConciergeDiningMenuCard/NovaScotiaConciergeDiningMenuCard';
import {OrderSummaryBar} from '../../../NovaScotiaConciergeComponents/NovaScotiaConciergeDining/NovaScotiaConciergeOrderSummaryBar/NovaScotiaConciergeOrderSummaryBar';
import {useDiningCart} from '../../../NovaScotiaConciergeContext/NovaScotiaConciergeDiningCartContext/NovaScotiaConciergeDiningCartContext';
import {DINING_MENU} from '../../../../NovaScotiaConciergeData/NovaScotiaConciergeDining/NovaScotiaConciergeDiningMenu/NovaScotiaConciergeDiningMenu';
import type {DiningStackParamList} from '../../../NovaScotiaConciergeNavgt/NovaScotiaConciergeStack/NovaScotiaConciergeStack';
import {colors} from '../../../NovaScotiaConciergeTheme/NovaScotiaConciergeColors/NovaScotiaConciergeColors';

type Props = StackScreenProps<DiningStackParamList, 'DiningMenu'>;

export function DiningMenuScreen({navigation}: Props) {
  const insets = useSafeAreaInsets();
  const {addItem, itemCount, total} = useDiningCart();

  return (
    <View style={styles.novaScotiaConciergeRoot}>
      <Background
        source={require('../../../NovaScotiaConciergeAssets/NovaScotiaConciergeBackground.png')}>
        <View
          style={[
            styles.novaScotiaConciergeHeader,
            {paddingTop: insets.top + 16},
          ]}>
          <View style={styles.novaScotiaConciergeTitleSection}>
            <Text style={styles.novaScotiaConciergeTitle}>Dining Menu</Text>
            <Text style={styles.novaScotiaConciergeSubtitle}>
              Choose dining items and prepare your resort order.
            </Text>
          </View>
        </View>
        <FlatList
          data={DINING_MENU}
          scrollEnabled={false}
          keyExtractor={item => item.id}
          contentContainerStyle={[
            styles.novaScotiaConciergeList,
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
  novaScotiaConciergeRoot: {
    flex: 1,
  },
  novaScotiaConciergeHeader: {
    paddingBottom: 12,
    gap: 10,
  },
  novaScotiaConciergeTitleSection: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 15,
    paddingHorizontal: 20,
    gap: 6,
  },
  novaScotiaConciergeTitle: {
    color: colors.cream,
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Georgia',
  },
  novaScotiaConciergeSubtitle: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  novaScotiaConciergeList: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    paddingTop: 12,
    gap: 12,
  },
});
