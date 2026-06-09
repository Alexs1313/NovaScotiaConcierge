import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import {SavedEventCard} from '../../../NovaScotiaConciergeComponents/NovaScotiaConciergeEvents/NovaScotiaConciergeSavedEventCard/NovaScotiaConciergeSavedEventCard';
import {ScreenHeader} from '../../../NovaScotiaConciergeComponents/NovaScotiaConciergeCommon/NovaScotiaConciergeScreenHeader/NovaScotiaConciergeScreenHeader';
import {SAVED_EVENTS_KEY} from '../../../NovaScotiaConciergeConstants/NovaScotiaConciergeVault/NovaScotiaConciergeVault';
import {
  EVENTS,
  type ResortEvent,
} from '../../../../NovaScotiaConciergeData/NovaScotiaConciergeEvents/NovaScotiaConciergeEvents/NovaScotiaConciergeEvents';
import type {AssistStackParamList} from '../../../NovaScotiaConciergeNavgt/NovaScotiaConciergeStack/NovaScotiaConciergeStack';
import {colors} from '../../../NovaScotiaConciergeTheme/NovaScotiaConciergeColors/NovaScotiaConciergeColors';

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
    <View style={styles.novaScotiaConciergeRoot}>
      <FlatList
        data={events}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.novaScotiaConciergeList}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <ScreenHeader
            title="Saved Events"
            onBack={() => navigation.goBack()}
          />
        }
        ItemSeparatorComponent={() => (
          <View style={styles.novaScotiaConciergeSeparator} />
        )}
        ListEmptyComponent={
          <Text style={styles.novaScotiaConciergeEmpty}>
            No saved events yet.
          </Text>
        }
        renderItem={({item}) => (
          <View style={styles.novaScotiaConciergeItem}>
            <SavedEventCard event={item} />
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
    height: 12,
  },
  novaScotiaConciergeEmpty: {
    color: colors.textMuted,
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
});
