import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import {novaScotiaConciergeDi} from '../../NovaScotiaConciergeApp/NovaScotiaConciergeDi';
import {DiningOrderCard} from '../../NovaScotiaConciergeFeatures/NovaScotiaConciergeDining/NovaScotiaConciergePresentation/NovaScotiaConciergeComponents/NovaScotiaConciergeDiningOrderCard';
import {ScreenHeader} from '../../NovaScotiaConciergeCore/NovaScotiaConciergeUi/NovaScotiaConciergeScreenHeader';
import type {DiningOrder} from '../../NovaScotiaConciergeTypes/NovaScotiaConciergeAssist';
import type {AssistStackParamList} from '../../NovaScotiaConciergeAtlas/NovaScotiaConciergeStack';
import {colors} from '../../NovaScotiaConciergeCore/NovaScotiaConciergeTheme/NovaScotiaConciergeColors';

type Props = StackScreenProps<AssistStackParamList, 'DiningOrders'>;

export function DiningOrdersScreen({navigation}: Props) {
  const [orders, setOrders] = useState<DiningOrder[]>([]);

  useFocusEffect(
    useCallback(() => {
      novaScotiaConciergeDi.diningOrdersRepository.list().then(setOrders);
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
