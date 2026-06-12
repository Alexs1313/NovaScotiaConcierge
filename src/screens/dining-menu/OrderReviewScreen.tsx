import React, {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {localData} from '../../storage/localData';
import {FormField} from '../../components/shared/FormField';
import {ScreenHeader} from '../../components/shared/ScreenHeader';
import {useDiningCart} from '../../hooks/useDiningCart';
import type {DiningOrder} from '../../types';
import {colors} from '../../constants/theme';

type OrderReviewScreenProps = {
  onBack: () => void;
  onPlaced: () => void;
};

export function OrderReviewScreen({onBack, onPlaced}: OrderReviewScreenProps) {
  const {cartLines, total, clearCart} = useDiningCart();
  const [pickupTime, setPickupTime] = useState('');
  const [room, setRoom] = useState('');
  const [notes, setNotes] = useState('');

  const handlePlaceOrder = async () => {
    const order: DiningOrder = {
      id: `order-${Date.now()}`,
      items: cartLines.map(cartLine => ({
        itemId: cartLine.menuItem.id,
        quantity: cartLine.quantity,
      })),
      total,
      pickupTime,
      room,
      notes,
      status: 'SENT',
      createdAt: new Date().toISOString(),
    };
    await localData.addDiningOrder(order);
    clearCart();
    onPlaced();
  };

  return (
    <View style={styles.OrderReviewVestibule}>
      <ScreenHeader title="Order Review" onBack={onBack} />
      <ScrollView contentContainerStyle={styles.OrderReviewScrollTapestry}>
        <View style={styles.OrderReviewListReliquary}>
          <Text style={styles.OrderReviewSelectedEmblem}>Selected Items</Text>
          {cartLines.map((cartLine, lineIndex) => (
            <View key={cartLine.menuItem.id}>
              {lineIndex > 0 && <View style={styles.OrderReviewDividerFret} />}
              <View style={styles.OrderReviewLinePlinth}>
                <Image
                  source={cartLine.menuItem.image}
                  style={styles.OrderReviewDishSigil}
                />
                <View style={styles.OrderReviewDishEnclave}>
                  <Text style={styles.OrderReviewDishFiligree}>
                    {cartLine.menuItem.title}
                  </Text>
                  <Text style={styles.OrderReviewDishQuantityVellum}>
                    x{cartLine.quantity}
                  </Text>
                </View>
                <Text style={styles.OrderReviewDishTotalGilding}>
                  ${cartLine.menuItem.price * cartLine.quantity}
                </Text>
              </View>
            </View>
          ))}
          <View style={styles.OrderReviewDividerFret} />
          <View style={styles.OrderReviewTotalPlinth}>
            <Text style={styles.OrderReviewTotalFiligree}>Total</Text>
            <Text style={styles.OrderReviewTotalGilding}>${total}</Text>
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
        <Pressable style={styles.OrderReviewGildedLatch} onPress={handlePlaceOrder}>
          <Text style={styles.OrderReviewGildedLatchCaption}>
            Place Dining Order
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  OrderReviewVestibule: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  OrderReviewScrollTapestry: {
    padding: 24,
    gap: 14,
    paddingBottom: 40,
  },
  OrderReviewListReliquary: {
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 16,
    gap: 0,
    marginBottom: 4,
  },
  OrderReviewSelectedEmblem: {
    color: colors.gold,
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'Georgia',
    marginBottom: 12,
  },
  OrderReviewLinePlinth: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    gap: 12,
  },
  OrderReviewDishSigil: {
    width: 36,
    height: 36,
    borderRadius: 8,
  },
  OrderReviewDishEnclave: {
    flex: 1,
    gap: 2,
  },
  OrderReviewDishFiligree: {
    color: colors.cream,
    fontSize: 13,
    fontWeight: '500',
  },
  OrderReviewDishQuantityVellum: {
    color: colors.textMuted,
    fontSize: 11,
  },
  OrderReviewDishTotalGilding: {
    color: colors.gold,
    fontSize: 14,
    fontWeight: '700',
  },
  OrderReviewDividerFret: {
    height: 1,
    backgroundColor: colors.border,
  },
  OrderReviewTotalPlinth: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 2,
  },
  OrderReviewTotalFiligree: {
    color: colors.cream,
    fontSize: 14,
    fontWeight: '700',
  },
  OrderReviewTotalGilding: {
    color: colors.gold,
    fontSize: 18,
    fontWeight: '700',
  },
  OrderReviewGildedLatch: {
    backgroundColor: colors.gold,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  OrderReviewGildedLatchCaption: {
    color: colors.actionText,
    fontSize: 15,
    fontWeight: '700',
  },
});
