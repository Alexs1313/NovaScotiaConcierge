import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StackScreenProps} from '@react-navigation/stack';
import {Background} from '../../../../NovaScotiaConciergeCore/NovaScotiaConciergeUi/NovaScotiaConciergeBackground';
import {DiningMenuCard} from '../NovaScotiaConciergeComponents/NovaScotiaConciergeDiningMenuCard';
import {OrderSummaryBar} from '../NovaScotiaConciergeComponents/NovaScotiaConciergeOrderSummaryBar';
import {useDiningCart} from '../NovaScotiaConciergeState/NovaScotiaConciergeDiningCartContext';
import {novaScotiaConciergeDi} from '../../../../NovaScotiaConciergeApp/NovaScotiaConciergeDi';
import type {DiningStackParamList} from '../../../../NovaScotiaConciergeAtlas/NovaScotiaConciergeStack';
import {colors} from '../../../../NovaScotiaConciergeCore/NovaScotiaConciergeTheme/NovaScotiaConciergeColors';

type Props = StackScreenProps<DiningStackParamList, 'DiningMenu'>;

export function DiningMenuScreen({navigation}: Props) {
  const insets = useSafeAreaInsets();
  const {addItem, itemCount, total} = useDiningCart();
  const menu = novaScotiaConciergeDi.diningMenuRepository.getMenu();

  return (
    <View style={styles.novaScotiaConciergeRoot}>
      <Background
        source={require('../../../../NovaScotiaConciergeAssets/NovaScotiaConciergeSceneBackdrop.png')}>
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
          data={menu}
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
