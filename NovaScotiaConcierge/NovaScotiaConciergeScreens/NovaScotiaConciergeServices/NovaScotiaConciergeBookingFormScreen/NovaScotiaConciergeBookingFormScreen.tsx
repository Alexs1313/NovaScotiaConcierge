import React, {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StackScreenProps} from '@react-navigation/stack';
import {FormField} from '../../../NovaScotiaConciergeComponents/NovaScotiaConciergeCommon/NovaScotiaConciergeFormField/NovaScotiaConciergeFormField';
import {ScreenHeader} from '../../../NovaScotiaConciergeComponents/NovaScotiaConciergeCommon/NovaScotiaConciergeScreenHeader/NovaScotiaConciergeScreenHeader';
import {BOOKINGS_KEY} from '../../../NovaScotiaConciergeConstants/NovaScotiaConciergeVault/NovaScotiaConciergeVault';
import {getServiceById} from '../../../../NovaScotiaConciergeData/NovaScotiaConciergeServices/NovaScotiaConciergeServices/NovaScotiaConciergeServices';
import type {BookingRequest} from '../../../NovaScotiaConciergeTypes/NovaScotiaConciergeAssist/NovaScotiaConciergeAssist';
import type {ServicesStackParamList} from '../../../NovaScotiaConciergeNavgt/NovaScotiaConciergeStack/NovaScotiaConciergeStack';
import {colors} from '../../../NovaScotiaConciergeTheme/NovaScotiaConciergeColors/NovaScotiaConciergeColors';

type Props = StackScreenProps<ServicesStackParamList, 'BookingForm'>;

export function BookingFormScreen({navigation, route}: Props) {
  const insets = useSafeAreaInsets();
  const service = getServiceById(route.params.serviceId);
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
    const raw = await AsyncStorage.getItem(BOOKINGS_KEY);
    const existing: BookingRequest[] = raw ? JSON.parse(raw) : [];
    await AsyncStorage.setItem(
      BOOKINGS_KEY,
      JSON.stringify([booking, ...existing]),
    );
    navigation.navigate('BookingConfirmation', {serviceTitle: service.title});
  };

  return (
    <View style={styles.novaScotiaConciergeRoot}>
      <ScrollView
        contentContainerStyle={[
          styles.novaScotiaConciergeContent,
          {paddingBottom: insets.bottom + 24},
        ]}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader title="Booking Form" onBack={() => navigation.goBack()} />
        <View style={{paddingHorizontal: 20, gap: 13}}>
          <View style={styles.novaScotiaConciergeServiceCard}>
            <Text style={styles.novaScotiaConciergeServiceIcon}>
              {service.icon}
            </Text>
            <View style={styles.novaScotiaConciergeServiceInfo}>
              <Text style={styles.novaScotiaConciergeServiceLabel}>
                Selected Service
              </Text>
              <Text style={styles.novaScotiaConciergeServiceTitle}>
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
            style={styles.novaScotiaConciergeConfirmButton}
            onPress={handleConfirm}>
            <Text style={styles.novaScotiaConciergeConfirmText}>
              Confirm Booking
            </Text>
          </Pressable>
        </View>
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
    paddingTop: 14,
    gap: 13,
  },
  novaScotiaConciergeServiceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.selectedServiceBg,
    borderWidth: 1,
    borderColor: colors.selectedServiceBorder,
    borderRadius: 12,
    paddingHorizontal: 17,
    paddingVertical: 13,
  },
  novaScotiaConciergeServiceIcon: {
    fontSize: 20,
  },
  novaScotiaConciergeServiceInfo: {
    flex: 1,
    gap: 2,
  },
  novaScotiaConciergeServiceLabel: {
    color: colors.gold,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  novaScotiaConciergeServiceTitle: {
    color: colors.cream,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  novaScotiaConciergeConfirmButton: {
    backgroundColor: colors.gold,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  novaScotiaConciergeConfirmText: {
    color: colors.buttonText,
    fontSize: 15,
    fontWeight: '700',
  },
});
