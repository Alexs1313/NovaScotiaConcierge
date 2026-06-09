import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import {DiningOrderCard} from '../components/DiningOrderCard';
import {ScreenHeader} from '../components/ScreenHeader';
import {DINING_ORDERS_KEY} from '../constants/storage';
import type {DiningOrder} from '../types/assist';
import type {AssistStackParamList} from '../navigation/Stack';
import {colors} from '../theme/colors';

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
    <View style={styles.root}>
      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <ScreenHeader
            title="Dining Orders"
            onBack={() => navigation.goBack()}
          />
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={
          <Text style={styles.empty}>No dining orders yet.</Text>
        }
        renderItem={({item}) => (
          <View style={styles.item}>
            <DiningOrderCard order={item} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  list: {
    paddingBottom: 24,
    flexGrow: 1,
  },
  item: {
    paddingHorizontal: 24,
  },
  separator: {
    height: 14,
  },
  empty: {
    color: colors.textMuted,
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
});
