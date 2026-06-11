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
import {novaScotiaConciergeDi} from '../../../../NovaScotiaConciergeApp/NovaScotiaConciergeDi';
import {FormField} from '../../../../NovaScotiaConciergeCore/NovaScotiaConciergeUi/NovaScotiaConciergeFormField';
import {ScreenHeader} from '../../../../NovaScotiaConciergeCore/NovaScotiaConciergeUi/NovaScotiaConciergeScreenHeader';
import {useDiningCart} from '../NovaScotiaConciergeState/NovaScotiaConciergeDiningCartContext';
import type {DiningOrder} from '../../../../NovaScotiaConciergeTypes/NovaScotiaConciergeAssist';
import type {DiningStackParamList} from '../../../../NovaScotiaConciergeAtlas/NovaScotiaConciergeStack';
import {colors} from '../../../../NovaScotiaConciergeCore/NovaScotiaConciergeTheme/NovaScotiaConciergeColors';

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
    await novaScotiaConciergeDi.placeDiningOrder.execute(order);
    clearCart();
    navigation.navigate('DiningOrderConfirmation');
  };

  return (
    <View style={styles.novaScotiaConciergeRoot}>
      <ScreenHeader title="Order Review" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.novaScotiaConciergeContent}>
        <View style={styles.novaScotiaConciergeItemsCard}>
          <Text style={styles.novaScotiaConciergeItemsCardTitle}>
            Selected Items
          </Text>
          {lines.map((line, index) => (
            <View key={line.item.id}>
              {index > 0 && <View style={styles.novaScotiaConciergeDivider} />}
              <View style={styles.novaScotiaConciergeLineRow}>
                <Image
                  source={line.item.image}
                  style={styles.novaScotiaConciergeLineImage}
                />
                <View style={styles.novaScotiaConciergeLineInfo}>
                  <Text style={styles.novaScotiaConciergeLineName}>
                    {line.item.title}
                  </Text>
                  <Text style={styles.novaScotiaConciergeLineQty}>
                    x{line.quantity}
                  </Text>
                </View>
                <Text style={styles.novaScotiaConciergeLinePrice}>
                  ${line.item.price * line.quantity}
                </Text>
              </View>
            </View>
          ))}
          <View style={styles.novaScotiaConciergeDivider} />
          <View style={styles.novaScotiaConciergeTotalRow}>
            <Text style={styles.novaScotiaConciergeTotalLabel}>Total</Text>
            <Text style={styles.novaScotiaConciergeTotalValue}>${total}</Text>
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
          style={styles.novaScotiaConciergeButton}
          onPress={handlePlaceOrder}>
          <Text style={styles.novaScotiaConciergeButtonText}>
            Place Dining Order
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeRoot: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  novaScotiaConciergeContent: {
    padding: 24,
    gap: 14,
    paddingBottom: 40,
  },
  novaScotiaConciergeItemsCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 16,
    gap: 0,
    marginBottom: 4,
  },
  novaScotiaConciergeItemsCardTitle: {
    color: colors.gold,
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'Georgia',
    marginBottom: 12,
  },
  novaScotiaConciergeLineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    gap: 12,
  },
  novaScotiaConciergeLineImage: {
    width: 36,
    height: 36,
    borderRadius: 8,
  },
  novaScotiaConciergeLineInfo: {
    flex: 1,
    gap: 2,
  },
  novaScotiaConciergeLineName: {
    color: colors.cream,
    fontSize: 13,
    fontWeight: '500',
  },
  novaScotiaConciergeLineQty: {
    color: colors.textMuted,
    fontSize: 11,
  },
  novaScotiaConciergeLinePrice: {
    color: colors.gold,
    fontSize: 14,
    fontWeight: '700',
  },
  novaScotiaConciergeDivider: {
    height: 1,
    backgroundColor: colors.border,
  },
  novaScotiaConciergeTotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 2,
  },
  novaScotiaConciergeTotalLabel: {
    color: colors.cream,
    fontSize: 14,
    fontWeight: '700',
  },
  novaScotiaConciergeTotalValue: {
    color: colors.gold,
    fontSize: 18,
    fontWeight: '700',
  },
  novaScotiaConciergeButton: {
    backgroundColor: colors.gold,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  novaScotiaConciergeButtonText: {
    color: colors.buttonText,
    fontSize: 15,
    fontWeight: '700',
  },
});
