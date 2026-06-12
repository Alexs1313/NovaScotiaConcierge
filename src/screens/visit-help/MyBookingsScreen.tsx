import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {localData} from '../../storage/localData';
import {BookingRequestCard} from '../../components/service-booking/BookingRequestCard';
import {ScreenHeader} from '../../components/shared/ScreenHeader';
import type {BookingRequest} from '../../types';
import {colors} from '../../constants/theme';

type MyBookingsScreenProps = {
  onBack: () => void;
};

export function MyBookingsScreen({onBack}: MyBookingsScreenProps) {
  const [bookings, setBookings] = useState<BookingRequest[]>([]);

  useEffect(() => {
    localData.getBookings().then(setBookings);
  }, []);

  return (
    <View style={styles.MyBookingsVestibule}>
      <ScrollView
        contentContainerStyle={styles.MyBookingsListTapestry}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader title="My Bookings" onBack={onBack} />
        {bookings.length === 0 ? (
          <Text style={styles.MyBookingsEmptyVellum}>
            No booking requests yet.
          </Text>
        ) : (
          bookings.map((booking, bookingIndex) => (
            <View key={booking.id}>
              {bookingIndex > 0 ? <View style={styles.MyBookingsSpacerFret} /> : null}
              <View style={styles.MyBookingsRowPlinth}>
                <BookingRequestCard booking={booking} />
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  MyBookingsVestibule: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  MyBookingsListTapestry: {
    paddingBottom: 24,
    flexGrow: 1,
  },
  MyBookingsRowPlinth: {
    paddingHorizontal: 24,
  },
  MyBookingsSpacerFret: {
    height: 14,
  },
  MyBookingsEmptyVellum: {
    color: colors.textMuted,
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
});
