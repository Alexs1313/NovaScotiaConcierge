import React, {useMemo, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StackScreenProps} from '@react-navigation/stack';
import {Background} from '../components/Background';
import {EventCard} from '../components/EventCard';
import {WeekDayPicker} from '../components/WeekDayPicker';
import {EVENTS, getEventsForDay} from '../data/events';
import type {EventsStackParamList} from '../navigation/Stack';
import {colors} from '../theme/colors';

type Props = StackScreenProps<EventsStackParamList, 'EventsList'>;

export function EventsListScreen({navigation}: Props) {
  const insets = useSafeAreaInsets();
  const [selectedDay, setSelectedDay] = useState(5);
  const daysWithEvents = useMemo(
    () => [...new Set(EVENTS.map(e => e.dayNumber))],
    [],
  );
  const events = useMemo(() => getEventsForDay(selectedDay), [selectedDay]);

  return (
    <Background source={require('../assets/background.png')}>
      <View style={[styles.header, {paddingTop: insets.top + 16}]}>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
            paddingBottom: 15,
            paddingHorizontal: 20,
          }}>
          <Text style={styles.title}>Resort Events</Text>
          <Text style={styles.subtitle}>
            Discover events you can visit during your stay.
          </Text>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text style={styles.section}>This Week</Text>
          <WeekDayPicker
            selectedDay={selectedDay}
            daysWithEvents={daysWithEvents}
            onSelect={setSelectedDay}
          />
        </View>
      </View>
      <FlatList
        data={events}
        scrollEnabled={false}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.empty}>No events scheduled for this day.</Text>
        }
        renderItem={({item}) => (
          <EventCard
            event={item}
            onPress={() =>
              navigation.navigate('EventDetails', {eventId: item.id})
            }
          />
        )}
      />
    </Background>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingBottom: 12,
    gap: 10,
  },
  title: {
    color: colors.cream,
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Georgia',
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  section: {
    color: colors.gold,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Georgia',
    marginTop: 4,
    marginBottom: 10,
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    gap: 14,
  },
  empty: {
    color: colors.textMuted,
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 24,
  },
});
