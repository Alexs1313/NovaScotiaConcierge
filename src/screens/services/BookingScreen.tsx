import React, {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StackScreenProps} from '@react-navigation/stack';
import {localData} from '../../local/localData';
import {FormField} from '../../components/FormField';
import {ScreenHeader} from '../../components/ScreenHeader';
import {getServiceById} from '../../data/services';
import type {BookingRequest} from '../../types';
import type {ServicesStackParamList} from '../../nav/types';
import {colors} from '../../constants/theme';

type Props = StackScreenProps<ServicesStackParamList, 'BookingForm'>;

export function BookingScreen({navigation, route: params}: Props) {
  const insets = useSafeAreaInsets();
  const service = getServiceById(params.params.serviceId);
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
    navigation.navigate('BookingConfirmation', {serviceTitle: service.title});
  };

  return (
    <View style={styles.shell}>
      <ScrollView
        contentContainerStyle={[
          styles.inner,
          {paddingBottom: insets.bottom + 24},
        ]}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader title="Booking Form" onBack={() => navigation.goBack()} />
        <View style={{paddingHorizontal: 20, gap: 13}}>
          <View style={styles.panelHighlight}>
            <Text style={styles.infoGlyph}>
              {service.icon}
            </Text>
            <View style={styles.infoBlock}>
              <Text style={styles.infoLabel}>
                Selected Service
              </Text>
              <Text style={styles.infoHeading}>
                {service.title}
              </Text>
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
          <Pressable
            style={styles.actionConfirm}
            onPress={handleConfirm}>
            <Text style={styles.actionConfirmLabel}>
              Confirm Booking
            </Text>
          </Pressable>
        </View>
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
    paddingTop: 14,
    gap: 13,
  },
  panelHighlight: {
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
  infoGlyph: {
    fontSize: 20,
  },
  infoBlock: {
    flex: 1,
    gap: 2,
  },
  infoLabel: {
    color: colors.gold,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  infoHeading: {
    color: colors.cream,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  actionConfirm: {
    backgroundColor: colors.gold,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  actionConfirmLabel: {
    color: colors.actionText,
    fontSize: 15,
    fontWeight: '700',
  },
});
