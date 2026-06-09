import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import {DiningOrderCard} from '../../../NovaScotiaConciergeComponents/NovaScotiaConciergeDining/NovaScotiaConciergeDiningOrderCard/NovaScotiaConciergeDiningOrderCard';
import {ScreenHeader} from '../../../NovaScotiaConciergeComponents/NovaScotiaConciergeCommon/NovaScotiaConciergeScreenHeader/NovaScotiaConciergeScreenHeader';
import {DINING_ORDERS_KEY} from '../../../NovaScotiaConciergeConstants/NovaScotiaConciergeVault/NovaScotiaConciergeVault';
import type {DiningOrder} from '../../../NovaScotiaConciergeTypes/NovaScotiaConciergeAssist/NovaScotiaConciergeAssist';
import type {AssistStackParamList} from '../../../NovaScotiaConciergeNavgt/NovaScotiaConciergeStack/NovaScotiaConciergeStack';
import {colors} from '../../../NovaScotiaConciergeTheme/NovaScotiaConciergeColors/NovaScotiaConciergeColors';

type Props = StackScreenProps<AssistStackParamList, 'DiningOrders'>;

export function DiningOrdersScreen({navigation}: Props) {
  const [orders, setOrders] = useState<DiningOrder[]>([]);

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem(DINING_ORDERS_KEY).then(raw => {
        setOrders(raw ? JSON.parse(raw) : []);
      });
    }, []),
  );

  return (
    <View style={styles.novaScotiaConciergeRoot}>
      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.novaScotiaConciergeList}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <ScreenHeader
            title="Dining Orders"
            onBack={() => navigation.goBack()}
          />
        }
        ItemSeparatorComponent={() => (
          <View style={styles.novaScotiaConciergeSeparator} />
        )}
        ListEmptyComponent={
          <Text style={styles.novaScotiaConciergeEmpty}>
            No dining orders yet.
          </Text>
        }
        renderItem={({item}) => (
          <View style={styles.novaScotiaConciergeItem}>
            <DiningOrderCard order={item} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeRoot: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  novaScotiaConciergeList: {
    paddingBottom: 24,
    flexGrow: 1,
  },
  novaScotiaConciergeItem: {
    paddingHorizontal: 24,
  },
  novaScotiaConciergeSeparator: {
    height: 14,
  },
  novaScotiaConciergeEmpty: {
    color: colors.textMuted,
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
});
