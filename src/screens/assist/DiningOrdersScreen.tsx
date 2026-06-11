import React, {useCallback, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import {localData} from '../../local/localData';
import {DiningOrderCard} from '../../components/DiningOrderCard';
import {ScreenHeader} from '../../components/ScreenHeader';
import type {DiningOrder} from '../../types';
import type {AssistStackParamList} from '../../nav/types';
import {colors} from '../../constants/theme';

type Props = StackScreenProps<AssistStackParamList, 'DiningOrders'>;

export function DiningOrdersScreen({navigation}: Props) {
  const [orders, setOrders] = useState<DiningOrder[]>([]);

  useFocusEffect(
    useCallback(() => {
      localData.getDiningOrders().then(setOrders);
    }, []),
  );

  return (
    <View style={styles.shell}>
      <ScrollView
        contentContainerStyle={styles.listWrap}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader
          title="Dining Orders"
          onBack={() => navigation.goBack()}
        />
        {orders.length === 0 ? (
          <Text style={styles.emptyCopy}>No dining orders yet.</Text>
        ) : (
          orders.map((item, index) => (
            <View key={item.id}>
              {index > 0 ? <View style={styles.gap} /> : null}
              <View style={styles.listItem}>
                <DiningOrderCard order={item} />
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  listWrap: {
    paddingBottom: 24,
    flexGrow: 1,
  },
  listItem: {
    paddingHorizontal: 24,
  },
  gap: {
    height: 14,
  },
  emptyCopy: {
    color: colors.textMuted,
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
});
