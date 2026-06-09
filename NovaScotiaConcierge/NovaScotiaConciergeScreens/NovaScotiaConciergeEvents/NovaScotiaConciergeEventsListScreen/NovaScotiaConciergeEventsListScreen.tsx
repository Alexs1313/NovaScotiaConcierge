import React, {useMemo, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StackScreenProps} from '@react-navigation/stack';
import {Background} from '../../../NovaScotiaConciergeComponents/NovaScotiaConciergeCommon/NovaScotiaConciergeBackground/NovaScotiaConciergeBackground';
import {EventCard} from '../../../NovaScotiaConciergeComponents/NovaScotiaConciergeEvents/NovaScotiaConciergeEventCard/NovaScotiaConciergeEventCard';
import {WeekDayPicker} from '../../../NovaScotiaConciergeComponents/NovaScotiaConciergeEvents/NovaScotiaConciergeWeekDayPicker/NovaScotiaConciergeWeekDayPicker';
import {
  EVENTS,
  getEventsForDay,
} from '../../../../NovaScotiaConciergeData/NovaScotiaConciergeEvents/NovaScotiaConciergeEvents/NovaScotiaConciergeEvents';
import type {EventsStackParamList} from '../../../NovaScotiaConciergeNavgt/NovaScotiaConciergeStack/NovaScotiaConciergeStack';
import {colors} from '../../../NovaScotiaConciergeTheme/NovaScotiaConciergeColors/NovaScotiaConciergeColors';

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
    <Background
      source={require('../../../NovaScotiaConciergeAssets/NovaScotiaConciergeBackground.png')}>
      <View
        style={[
          styles.novaScotiaConciergeHeader,
          {paddingTop: insets.top + 16},
        ]}>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
            paddingBottom: 15,
            paddingHorizontal: 20,
          }}>
          <Text style={styles.novaScotiaConciergeTitle}>Resort Events</Text>
          <Text style={styles.novaScotiaConciergeSubtitle}>
            Discover events you can visit during your stay.
          </Text>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text style={styles.novaScotiaConciergeSection}>This Week</Text>
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
        contentContainerStyle={styles.novaScotiaConciergeList}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.novaScotiaConciergeEmpty}>
            No events scheduled for this day.
          </Text>
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
  novaScotiaConciergeHeader: {
    paddingBottom: 12,
    gap: 10,
  },
  novaScotiaConciergeTitle: {
    color: colors.cream,
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Georgia',
  },
  novaScotiaConciergeSubtitle: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  novaScotiaConciergeSection: {
    color: colors.gold,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Georgia',
    marginTop: 4,
    marginBottom: 10,
  },
  novaScotiaConciergeList: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    gap: 14,
  },
  novaScotiaConciergeEmpty: {
    color: colors.textMuted,
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 24,
  },
});
