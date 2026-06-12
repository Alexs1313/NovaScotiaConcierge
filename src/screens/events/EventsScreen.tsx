import React, {useMemo, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Background} from '../../components/shared/Background';
import {EventCard} from '../../components/events/EventCard';
import {WeekDayPicker} from '../../components/shared/WeekDayPicker';
import {EVENTS, getEventsForDay} from '../../content/events';
import {colors} from '../../constants/theme';

type EventsScreenProps = {
  onOpenEvent: (eventId: string) => void;
};

export function EventsScreen({onOpenEvent}: EventsScreenProps) {
  const insets = useSafeAreaInsets();
  const [selectedDay, setSelectedDay] = useState(5);

  const daysWithEvents = useMemo(
    () => [...new Set(EVENTS.map(e => e.dayNumber))],
    [],
  );
  const events = useMemo(() => getEventsForDay(selectedDay), [selectedDay]);

  return (
    <Background>
      <View style={[styles.EventsCornice, {paddingTop: insets.top + 16}]}>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
            paddingBottom: 15,
            paddingHorizontal: 20,
          }}>
          <Text style={styles.EventsCorniceFiligree}>Resort Events</Text>
          <Text style={styles.EventsCorniceEmblem}>
            Discover events you can visit during your stay.
          </Text>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text style={styles.EventsSectionEmblem}>This Week</Text>
          <WeekDayPicker
            selectedDay={selectedDay}
            daysWithEvents={daysWithEvents}
            onSelect={setSelectedDay}
          />
        </View>
      </View>
      <View style={styles.EventsListTapestry}>
        {events.length === 0 ? (
          <Text style={styles.EventsEmptyVellum}>
            No events scheduled for this day.
          </Text>
        ) : (
          events.map(event => (
            <EventCard
              key={event.id}
              event={event}
              onPress={() => onOpenEvent(event.id)}
            />
          ))
        )}
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  EventsCornice: {
    paddingBottom: 12,
    gap: 10,
  },
  EventsCorniceFiligree: {
    color: colors.cream,
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Georgia',
  },
  EventsCorniceEmblem: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  EventsSectionEmblem: {
    color: colors.gold,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Georgia',
    marginTop: 4,
    marginBottom: 10,
  },
  EventsListTapestry: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    gap: 14,
  },
  EventsEmptyVellum: {
    color: colors.textMuted,
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 24,
  },
});
