import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import {novaScotiaConciergeDi} from '../../NovaScotiaConciergeApp/NovaScotiaConciergeDi';
import {BookingRequestCard} from '../../NovaScotiaConciergeComponents/NovaScotiaConciergeServices/NovaScotiaConciergeBookingRequestCard';
import {ScreenHeader} from '../../NovaScotiaConciergeCore/NovaScotiaConciergeUi/NovaScotiaConciergeScreenHeader';
import type {BookingRequest} from '../../NovaScotiaConciergeTypes/NovaScotiaConciergeAssist';
import type {AssistStackParamList} from '../../NovaScotiaConciergeAtlas/NovaScotiaConciergeStack';
import {colors} from '../../NovaScotiaConciergeCore/NovaScotiaConciergeTheme/NovaScotiaConciergeColors';

type Props = StackScreenProps<AssistStackParamList, 'MyBookings'>;

export function MyBookingsScreen({navigation}: Props) {
  const [bookings, setBookings] = useState<BookingRequest[]>([]);

  useFocusEffect(
    useCallback(() => {
      novaScotiaConciergeDi.bookingsRepository.list().then(setBookings);
    }, []),
  );

  return (
    <View style={styles.novaScotiaConciergeRoot}>
      <FlatList
        data={bookings}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.novaScotiaConciergeList}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <ScreenHeader
            title="My Bookings"
            onBack={() => navigation.goBack()}
          />
        }
        ItemSeparatorComponent={() => (
          <View style={styles.novaScotiaConciergeSeparator} />
        )}
        ListEmptyComponent={
          <Text style={styles.novaScotiaConciergeEmpty}>
            No booking requests yet.
          </Text>
        }
        renderItem={({item}) => (
          <View style={styles.novaScotiaConciergeItem}>
            <BookingRequestCard booking={item} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeRoot: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  novaScotiaConciergeList: {
    paddingBottom: 24,
    flexGrow: 1,
  },
  novaScotiaConciergeItem: {
    paddingHorizontal: 24,
  },
  novaScotiaConciergeSeparator: {
    height: 14,
  },
  novaScotiaConciergeEmpty: {
    color: colors.textMuted,
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
});
