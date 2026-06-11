import React, {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import {localData} from '../../local/localData';
import {FormField} from '../../components/FormField';
import {ScreenHeader} from '../../components/ScreenHeader';
import {useDiningCart} from '../../hooks/useDiningCart';
import type {DiningOrder} from '../../types';
import type {DiningStackParamList} from '../../nav/types';
import {colors} from '../../constants/theme';

type Props = StackScreenProps<DiningStackParamList, 'OrderReview'>;

export function OrderReviewScreen({navigation}: Props) {
  const {lines, total, clearCart} = useDiningCart();
  const [pickupTime, setPickupTime] = useState('');
  const [room, setRoom] = useState('');
  const [notes, setNotes] = useState('');

  const handlePlaceOrder = async () => {
    const order: DiningOrder = {
      id: `order-${Date.now()}`,
      items: lines.map(l => ({itemId: l.item.id, quantity: l.quantity})),
      total,
      pickupTime,
      room,
      notes,
      status: 'SENT',
      createdAt: new Date().toISOString(),
    };
    await localData.addDiningOrder(order);
    clearCart();
    navigation.navigate('DiningOrderConfirmation');
  };

  return (
    <View style={styles.shell}>
      <ScreenHeader title="Order Review" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.inner}>
        <View style={styles.panelList}>
          <Text style={styles.panelListHeading}>
            Selected Items
          </Text>
          {lines.map((line, index) => (
            <View key={line.item.id}>
              {index > 0 && <View style={styles.line} />}
              <View style={styles.rowLine}>
                <Image
                  source={line.item.image}
                  style={styles.lineThumb}
                />
                <View style={styles.lineInfo}>
                  <Text style={styles.lineHeading}>
                    {line.item.title}
                  </Text>
                  <Text style={styles.lineMeta}>
                    x{line.quantity}
                  </Text>
                </View>
                <Text style={styles.lineValue}>
                  ${line.item.price * line.quantity}
                </Text>
              </View>
            </View>
          ))}
          <View style={styles.line} />
          <View style={styles.rowTotal}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>${total}</Text>
          </View>
        </View>

        <FormField
          label="Pickup / Delivery Time"
          value={pickupTime}
          onChangeText={setPickupTime}
          placeholder="9:00 AM"
        />
        <FormField
          label="Room Number"
          value={room}
          onChangeText={setRoom}
          placeholder="214"
          keyboardType="number-pad"
        />
        <FormField
          label="Notes"
          value={notes}
          onChangeText={setNotes}
          placeholder="Allergies, preferences, or other notes..."
          multiline
        />
        <Pressable
          style={styles.action}
          onPress={handlePlaceOrder}>
          <Text style={styles.actionLabel}>
            Place Dining Order
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  inner: {
    padding: 24,
    gap: 14,
    paddingBottom: 40,
  },
  panelList: {
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 16,
    gap: 0,
    marginBottom: 4,
  },
  panelListHeading: {
    color: colors.gold,
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'Georgia',
    marginBottom: 12,
  },
  rowLine: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    gap: 12,
  },
  lineThumb: {
    width: 36,
    height: 36,
    borderRadius: 8,
  },
  lineInfo: {
    flex: 1,
    gap: 2,
  },
  lineHeading: {
    color: colors.cream,
    fontSize: 13,
    fontWeight: '500',
  },
  lineMeta: {
    color: colors.textMuted,
    fontSize: 11,
  },
  lineValue: {
    color: colors.gold,
    fontSize: 14,
    fontWeight: '700',
  },
  line: {
    height: 1,
    backgroundColor: colors.border,
  },
  rowTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 2,
  },
  totalLabel: {
    color: colors.cream,
    fontSize: 14,
    fontWeight: '700',
  },
  totalValue: {
    color: colors.gold,
    fontSize: 18,
    fontWeight: '700',
  },
  action: {
    backgroundColor: colors.gold,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  actionLabel: {
    color: colors.actionText,
    fontSize: 15,
    fontWeight: '700',
  },
});
