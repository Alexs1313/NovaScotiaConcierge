import React, {useMemo, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StackScreenProps} from '@react-navigation/stack';
import {Background} from '../../components/Background';
import {EventCard} from '../../components/EventCard';
import {WeekDayPicker} from '../../components/WeekDayPicker';
import {
  EVENTS,
  getEventsForDay,
} from '../../data/events';
import type {EventsStackParamList} from '../../nav/types';
import {colors} from '../../constants/theme';

type Props = StackScreenProps<EventsStackParamList, 'EventsList'>;

export function EventsScreen({navigation}: Props) {
  const insets = useSafeAreaInsets();

  const [selectedDay, setSelectedDay] = useState(5);

  const daysWithEvents = useMemo(
    () => [...new Set(EVENTS.map(e => e.dayNumber))],
    [],
  );
  const events = useMemo(() => getEventsForDay(selectedDay), [selectedDay]);

  return (
    <Background>
      <View
        style={[
          styles.topBlock,
          {paddingTop: insets.top + 16},
        ]}>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
            paddingBottom: 15,
            paddingHorizontal: 20,
          }}>
          <Text style={styles.heading}>Resort Events</Text>
          <Text style={styles.subheading}>
            Discover events you can visit during your stay.
          </Text>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text style={styles.sectionLabel}>This Week</Text>
          <WeekDayPicker
            selectedDay={selectedDay}
            daysWithEvents={daysWithEvents}
            onSelect={setSelectedDay}
          />
        </View>
      </View>
      <View style={styles.listWrap}>
        {events.length === 0 ? (
          <Text style={styles.emptyCopy}>No events scheduled for this day.</Text>
        ) : (
          events.map(item => (
            <EventCard
              key={item.id}
              event={item}
              onPress={() =>
                navigation.navigate('EventDetails', {eventId: item.id})
              }
            />
          ))
        )}
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  topBlock: {
    paddingBottom: 12,
    gap: 10,
  },
  heading: {
    color: colors.cream,
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Georgia',
  },
  subheading: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  sectionLabel: {
    color: colors.gold,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Georgia',
    marginTop: 4,
    marginBottom: 10,
  },
  listWrap: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    gap: 14,
  },
  emptyCopy: {
    color: colors.textMuted,
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 24,
  },
});
