import React, {useCallback, useEffect, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';

import {localData} from '../../local/localData';
import {ScreenHeader} from '../../components/ScreenHeader';
import {getEventById} from '../../data/events';
import type {EventsStackParamList} from '../../nav/types';
import {colors} from '../../constants/theme';

type Props = StackScreenProps<EventsStackParamList, 'EventDetails'>;

export function EventDetailScreen({navigation, route: params}: Props) {
  const event = getEventById(params.params.eventId);
  const [isSaved, setIsSaved] = useState(false);

  const getSavedEvents = useCallback(async () => {
    const isSavedEvnt =
      await localData.isEventSaved(
        params.params.eventId,
      );
    setIsSaved(isSavedEvnt);
  }, [params.params.eventId]);

  useEffect(() => {
    getSavedEvents();
  }, [getSavedEvents]);

  if (!event) {
    return null;
  }

  const details = [
    {label: 'Location', value: event.location},
    {label: 'Date', value: event.date},
    {label: 'Time', value: event.time},
    {label: 'Type', value: event.type},
    {label: 'Guest Info', value: event.guestInfo},
    {label: 'Dress Mood', value: event.dressMood},
  ];

  const toggleSaveEvrnt = async () => {
    const isSavedEvent =
      await localData.toggleSavedEvent(event.id);
    setIsSaved(isSavedEvent);
  };

  return (
    <View style={styles.shell}>
      <ScrollView contentContainerStyle={styles.inner}>
        <ScreenHeader
          title="Event Details"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.main}>
          <LinearGradient
            colors={[colors.panelInner, colors.panel]}
            style={styles.hero}>
            <View style={styles.heroContent}>
              <Text style={styles.tag}>
                {event.tag.toUpperCase()}
              </Text>
              <Text style={styles.heading}>{event.title}</Text>
              <Text style={styles.meta}>
                {event.time} · {event.date}
              </Text>
            </View>
          </LinearGradient>

          <View style={styles.table}>
            {details.map((row, index) => (
              <View
                key={row.label}
                style={[
                  styles.row,
                  index < details.length - 1 &&
                    styles.rowDivider,
                ]}>
                <Text style={styles.fieldLabel}>{row.label}</Text>
                <Text style={styles.fieldValue}>{row.value}</Text>
              </View>
            ))}
          </View>

          <View style={styles.aboutCard}>
            <Text style={styles.sectionTitle}>
              About This Event
            </Text>
            <Text style={styles.aboutBody}>
              {event.about}
            </Text>
          </View>

          <View style={styles.tipBar}>
            <View style={styles.tipIcon}>
              <Text style={styles.tipIconText}>i</Text>
            </View>
            <Text style={styles.tipText}>
              {event.usefulNote}
            </Text>
          </View>

          <Pressable
            style={styles.saveButton}
            onPress={toggleSaveEvrnt}>
            <Text style={styles.saveText}>
              {isSaved ? 'Event Saved' : 'Save Event'}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  inner: {
    paddingBottom: 40,
  },
  main: {
    padding: 20,
    gap: 14,
  },
  hero: {
    borderRadius: 17,
    borderWidth: 1,
    borderColor: colors.border,
  },
  heroContent: {
    padding: 20,
    gap: 5,
  },
  tag: {
    color: colors.gold,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  heading: {
    color: colors.cream,
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Georgia',
    lineHeight: 26,
  },
  meta: {
    color: colors.gold,
    fontSize: 13,
    fontWeight: '600',
  },
  table: {
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  rowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  fieldLabel: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '600',
    flex: 1,
  },
  fieldValue: {
    color: colors.cream,
    fontSize: 12,
    flex: 1.4,
    textAlign: 'right',
  },
  aboutCard: {
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 16,
    gap: 8,
  },
  sectionTitle: {
    color: colors.cream,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  aboutBody: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 20,
  },
  tipBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  tipIcon: {
    width: 18,
    height: 18,
    borderRadius: 4,
    backgroundColor: colors.panelInner,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tipIconText: {
    color: colors.gold,
    fontSize: 11,
    fontWeight: '700',
    fontStyle: 'italic',
  },
  tipText: {
    flex: 1,
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 18,
  },
  saveButton: {
    backgroundColor: colors.gold,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  saveText: {
    color: colors.actionText,
    fontSize: 15,
    fontWeight: '700',
  },
});
