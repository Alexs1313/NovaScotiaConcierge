import React, {useCallback, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import {localData} from '../../local/localData';
import {BookingRequestCard} from '../../components/BookingRequestCard';
import {ScreenHeader} from '../../components/ScreenHeader';
import type {BookingRequest} from '../../types';
import type {AssistStackParamList} from '../../nav/types';
import {colors} from '../../constants/theme';

type Props = StackScreenProps<AssistStackParamList, 'MyBookings'>;

export function MyBookingsScreen({navigation}: Props) {
  const [bookings, setBookings] = useState<BookingRequest[]>([]);

  useFocusEffect(
    useCallback(() => {
      localData.getBookings().then(setBookings);
    }, []),
  );

  return (
    <View style={styles.shell}>
      <ScrollView
        contentContainerStyle={styles.listWrap}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader
          title="My Bookings"
          onBack={() => navigation.goBack()}
        />
        {bookings.length === 0 ? (
          <Text style={styles.emptyCopy}>No booking requests yet.</Text>
        ) : (
          bookings.map((item, index) => (
            <View key={item.id}>
              {index > 0 ? <View style={styles.gap} /> : null}
              <View style={styles.listItem}>
                <BookingRequestCard booking={item} />
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
