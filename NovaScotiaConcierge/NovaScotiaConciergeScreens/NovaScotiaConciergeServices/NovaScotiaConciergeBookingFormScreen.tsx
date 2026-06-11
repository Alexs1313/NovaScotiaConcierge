import React, {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StackScreenProps} from '@react-navigation/stack';
import {novaScotiaConciergeDi} from '../../NovaScotiaConciergeApp/NovaScotiaConciergeDi';
import {FormField} from '../../NovaScotiaConciergeCore/NovaScotiaConciergeUi/NovaScotiaConciergeFormField';
import {ScreenHeader} from '../../NovaScotiaConciergeCore/NovaScotiaConciergeUi/NovaScotiaConciergeScreenHeader';
import {getServiceById} from '../../NovaScotiaConciergeData/NovaScotiaConciergeServices/NovaScotiaConciergeServices';
import type {BookingRequest} from '../../NovaScotiaConciergeTypes/NovaScotiaConciergeAssist';
import type {ServicesStackParamList} from '../../NovaScotiaConciergeAtlas/NovaScotiaConciergeStack';
import {colors} from '../../NovaScotiaConciergeCore/NovaScotiaConciergeTheme/NovaScotiaConciergeColors';

type Props = StackScreenProps<ServicesStackParamList, 'BookingForm'>;

export function BookingFormScreen({navigation, route: screen}: Props) {
  const insets = useSafeAreaInsets();
  const service = getServiceById(screen.params.serviceId);
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
    await novaScotiaConciergeDi.bookingsRepository.save(booking);
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
