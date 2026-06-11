import React, {useCallback, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import {localData} from '../../local/localData';
import {SavedEventCard} from '../../components/SavedEventCard';
import {ScreenHeader} from '../../components/ScreenHeader';
import {
  EVENTS,
  type ResortEvent,
} from '../../data/events';
import type {AssistStackParamList} from '../../nav/types';
import {colors} from '../../constants/theme';

type Props = StackScreenProps<AssistStackParamList, 'SavedEvents'>;

export function SavedEventsScreen({navigation}: Props) {
  const [events, setEvents] = useState<ResortEvent[]>([]);

  useFocusEffect(
    useCallback(() => {
      localData.getSavedEventIds().then(ids => {
        setEvents(EVENTS.filter(e => ids.includes(e.id)));
      });
    }, []),
  );

  return (
    <View style={styles.shell}>
      <ScrollView
        contentContainerStyle={styles.listWrap}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader
          title="Saved Events"
          onBack={() => navigation.goBack()}
        />
        {events.length === 0 ? (
          <Text style={styles.emptyCopy}>No saved events yet.</Text>
        ) : (
          events.map((item, index) => (
            <View key={item.id}>
              {index > 0 ? <View style={styles.gap} /> : null}
              <View style={styles.listItem}>
                <SavedEventCard event={item} />
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
    height: 12,
  },
  emptyCopy: {
    color: colors.textMuted,
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
});
