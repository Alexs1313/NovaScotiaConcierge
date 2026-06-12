import React, {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {localData} from '../../storage/localData';
import {FormField} from '../../components/shared/FormField';
import {ScreenHeader} from '../../components/shared/ScreenHeader';
import {getServiceById} from '../../content/services';
import type {BookingRequest} from '../../types';
import {colors} from '../../constants/theme';

type BookingScreenProps = {
  serviceId: string;
  onBack: () => void;
  onConfirmed: () => void;
};

export function BookingScreen({
  serviceId,
  onBack,
  onConfirmed,
}: BookingScreenProps) {
  const insets = useSafeAreaInsets();
  const service = getServiceById(serviceId);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('2');
  const [room, setRoom] = useState('');
  const [notes, setNotes] = useState('');

  if (!service) {
    return null;
  }

  const handleConfirm = async () => {
    const booking: BookingRequest = {
      id: `booking-${Date.now()}`,
      serviceId: service.id,
      serviceTitle: service.title,
      date,
      time,
      guests,
      guestName: '',
      room,
      notes,
      status: 'REQUESTED',
      createdAt: new Date().toISOString(),
    };
    await localData.addBooking(booking);
    onConfirmed();
  };

  return (
    <View style={styles.BookingVestibule}>
      <ScrollView
        contentContainerStyle={[
          styles.BookingScrollTapestry,
          {paddingBottom: insets.bottom + 24},
        ]}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader title="Booking Form" onBack={onBack} />
        <View style={{paddingHorizontal: 20, gap: 13}}>
          <View style={styles.BookingHighlightReliquary}>
            <Text style={styles.BookingSigilGlyph}>{service.icon}</Text>
            <View style={styles.BookingDetailEnclave}>
              <Text style={styles.BookingDetailEmblem}>Selected Service</Text>
              <Text style={styles.BookingDetailFiligree}>{service.title}</Text>
            </View>
          </View>
          <FormField
            label="Date"
            value={date}
            onChangeText={setDate}
            placeholder="Select date"
          />
          <FormField
            label="Time"
            value={time}
            onChangeText={setTime}
            placeholder="Select time"
          />
          <FormField
            label="Number of Guests"
            value={guests}
            onChangeText={setGuests}
            placeholder="2 guests"
            keyboardType="number-pad"
          />
          <FormField
            label="Room Number"
            value={room}
            onChangeText={setRoom}
            placeholder="e.g. 214"
          />
          <FormField
            label="Special Notes"
            value={notes}
            onChangeText={setNotes}
            placeholder="Any special requests or details…"
            multiline
          />
          <Pressable style={styles.BookingGildedLatch} onPress={handleConfirm}>
            <Text style={styles.BookingGildedLatchCaption}>Confirm Booking</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  BookingVestibule: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  BookingScrollTapestry: {
    paddingTop: 14,
    gap: 13,
  },
  BookingHighlightReliquary: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.selectedItemBg,
    borderWidth: 1,
    borderColor: colors.selectedItemEdge,
    borderRadius: 12,
    paddingHorizontal: 17,
    paddingVertical: 13,
  },
  BookingSigilGlyph: {
    fontSize: 20,
  },
  BookingDetailEnclave: {
    flex: 1,
    gap: 2,
  },
  BookingDetailEmblem: {
    color: colors.gold,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  BookingDetailFiligree: {
    color: colors.cream,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  BookingGildedLatch: {
    backgroundColor: colors.gold,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  BookingGildedLatchCaption: {
    color: colors.actionText,
    fontSize: 15,
    fontWeight: '700',
  },
});
