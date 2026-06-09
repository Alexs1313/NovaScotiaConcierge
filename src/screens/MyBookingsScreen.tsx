import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import {BookingRequestCard} from '../components/BookingRequestCard';
import {ScreenHeader} from '../components/ScreenHeader';
import {BOOKINGS_KEY} from '../constants/storage';
import type {BookingRequest} from '../types/assist';
import type {AssistStackParamList} from '../navigation/Stack';
import {colors} from '../theme/colors';

type Props = StackScreenProps<AssistStackParamList, 'MyBookings'>;

export function MyBookingsScreen({navigation}: Props) {
  const [bookings, setBookings] = useState<BookingRequest[]>([]);

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem(BOOKINGS_KEY).then(raw => {
        setBookings(raw ? JSON.parse(raw) : []);
      });
    }, []),
  );

  return (
    <View style={styles.root}>
      <FlatList
        data={bookings}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <ScreenHeader
            title="My Bookings"
            onBack={() => navigation.goBack()}
          />
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={
          <Text style={styles.empty}>No booking requests yet.</Text>
        }
        renderItem={({item}) => (
          <View style={styles.item}>
            <BookingRequestCard booking={item} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  list: {
    paddingBottom: 24,
    flexGrow: 1,
  },
  item: {
    paddingHorizontal: 24,
  },
  separator: {
    height: 14,
  },
  empty: {
    color: colors.textMuted,
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
});
