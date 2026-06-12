import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {localData} from '../../storage/localData';
import {SavedEventCard} from '../../components/events/SavedEventCard';
import {ScreenHeader} from '../../components/shared/ScreenHeader';
import {EVENTS, type ResortEvent} from '../../content/events';
import {colors} from '../../constants/theme';

type SavedEventsScreenProps = {
  onBack: () => void;
};

export function SavedEventsScreen({onBack}: SavedEventsScreenProps) {
  const [events, setEvents] = useState<ResortEvent[]>([]);

  useEffect(() => {
    localData.getSavedEventIds().then(ids => {
      setEvents(EVENTS.filter(e => ids.includes(e.id)));
    });
  }, []);

  return (
    <View style={styles.SavedEventsVestibule}>
      <ScrollView
        contentContainerStyle={styles.SavedEventsListTapestry}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader title="Saved Events" onBack={onBack} />
        {events.length === 0 ? (
          <Text style={styles.SavedEventsEmptyVellum}>No saved events yet.</Text>
        ) : (
          events.map((savedEvent, eventIndex) => (
            <View key={savedEvent.id}>
              {eventIndex > 0 ? <View style={styles.SavedEventsSpacerFret} /> : null}
              <View style={styles.SavedEventsRowPlinth}>
                <SavedEventCard event={savedEvent} />
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  SavedEventsVestibule: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  SavedEventsListTapestry: {
    paddingBottom: 24,
    flexGrow: 1,
  },
  SavedEventsRowPlinth: {
    paddingHorizontal: 24,
  },
  SavedEventsSpacerFret: {
    height: 12,
  },
  SavedEventsEmptyVellum: {
    color: colors.textMuted,
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
});
