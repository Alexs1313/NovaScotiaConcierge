import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import {SavedEventCard} from '../components/SavedEventCard';
import {ScreenHeader} from '../components/ScreenHeader';
import {SAVED_EVENTS_KEY} from '../constants/storage';
import {EVENTS, type ResortEvent} from '../data/events';
import type {AssistStackParamList} from '../navigation/Stack';
import {colors} from '../theme/colors';

type Props = StackScreenProps<AssistStackParamList, 'SavedEvents'>;

export function SavedEventsScreen({navigation}: Props) {
  const [events, setEvents] = useState<ResortEvent[]>([]);

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem(SAVED_EVENTS_KEY).then(raw => {
        const ids: string[] = raw ? JSON.parse(raw) : [];
        setEvents(EVENTS.filter(e => ids.includes(e.id)));
      });
    }, []),
  );

  return (
    <View style={styles.root}>
      <FlatList
        data={events}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <ScreenHeader
            title="Saved Events"
            onBack={() => navigation.goBack()}
          />
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={
          <Text style={styles.empty}>No saved events yet.</Text>
        }
        renderItem={({item}) => (
          <View style={styles.item}>
            <SavedEventCard event={item} />
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
    height: 12,
  },
  empty: {
    color: colors.textMuted,
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
});
