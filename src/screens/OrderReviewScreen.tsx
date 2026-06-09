import React, {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type {StackScreenProps} from '@react-navigation/stack';
import {FormField} from '../components/FormField';
import {ScreenHeader} from '../components/ScreenHeader';
import {DINING_ORDERS_KEY} from '../constants/storage';
import {useDiningCart} from '../context/DiningCartContext';
import type {DiningOrder} from '../types/assist';
import type {DiningStackParamList} from '../navigation/Stack';
import {colors} from '../theme/colors';

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
    const raw = await AsyncStorage.getItem(DINING_ORDERS_KEY);
    const existing: DiningOrder[] = raw ? JSON.parse(raw) : [];
    await AsyncStorage.setItem(
      DINING_ORDERS_KEY,
      JSON.stringify([order, ...existing]),
    );
    clearCart();
    navigation.navigate('DiningOrderConfirmation');
  };

  return (
    <View style={styles.root}>
      <ScreenHeader
        title="Order Review"
        onBack={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.itemsCard}>
          <Text style={styles.itemsCardTitle}>Selected Items</Text>
          {lines.map((line, index) => (
            <View key={line.item.id}>
              {index > 0 && <View style={styles.divider} />}
              <View style={styles.lineRow}>
                <Image source={line.item.image} style={styles.lineImage} />
                <View style={styles.lineInfo}>
                  <Text style={styles.lineName}>{line.item.title}</Text>
                  <Text style={styles.lineQty}>x{line.quantity}</Text>
                </View>
                <Text style={styles.linePrice}>
                  ${line.item.price * line.quantity}
                </Text>
              </View>
            </View>
          ))}
          <View style={styles.divider} />
          <View style={styles.totalRow}>
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
        <Pressable style={styles.button} onPress={handlePlaceOrder}>
          <Text style={styles.buttonText}>Place Dining Order</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  content: {
    padding: 24,
    gap: 14,
    paddingBottom: 40,
  },
  itemsCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 16,
    gap: 0,
    marginBottom: 4,
  },
  itemsCardTitle: {
    color: colors.gold,
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'Georgia',
    marginBottom: 12,
  },
  lineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    gap: 12,
  },
  lineImage: {
    width: 36,
    height: 36,
    borderRadius: 8,
  },
  lineInfo: {
    flex: 1,
    gap: 2,
  },
  lineName: {
    color: colors.cream,
    fontSize: 13,
    fontWeight: '500',
  },
  lineQty: {
    color: colors.textMuted,
    fontSize: 11,
  },
  linePrice: {
    color: colors.gold,
    fontSize: 14,
    fontWeight: '700',
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
  },
  totalRow: {
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
  button: {
    backgroundColor: colors.gold,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 15,
    fontWeight: '700',
  },
});
