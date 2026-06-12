import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {localData} from '../../storage/localData';
import {DiningOrderCard} from '../../components/dining-menu/DiningOrderCard';
import {ScreenHeader} from '../../components/shared/ScreenHeader';
import type {DiningOrder} from '../../types';
import {colors} from '../../constants/theme';

type DiningOrdersScreenProps = {
  onBack: () => void;
};

export function DiningOrdersScreen({onBack}: DiningOrdersScreenProps) {
  const [orders, setOrders] = useState<DiningOrder[]>([]);

  useEffect(() => {
    localData.getDiningOrders().then(setOrders);
  }, []);

  return (
    <View style={styles.DiningOrdersVestibule}>
      <ScrollView
        contentContainerStyle={styles.DiningOrdersListTapestry}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader title="Dining Orders" onBack={onBack} />
        {orders.length === 0 ? (
          <Text style={styles.DiningOrdersEmptyVellum}>No dining orders yet.</Text>
        ) : (
          orders.map((diningOrder, orderIndex) => (
            <View key={diningOrder.id}>
              {orderIndex > 0 ? <View style={styles.DiningOrdersSpacerFret} /> : null}
              <View style={styles.DiningOrdersRowPlinth}>
                <DiningOrderCard order={diningOrder} />
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  DiningOrdersVestibule: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  DiningOrdersListTapestry: {
    paddingBottom: 24,
    flexGrow: 1,
  },
  DiningOrdersRowPlinth: {
    paddingHorizontal: 24,
  },
  DiningOrdersSpacerFret: {
    height: 14,
  },
  DiningOrdersEmptyVellum: {
    color: colors.textMuted,
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
});
