import React, {useCallback, useEffect, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type {StackScreenProps} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import {ScreenHeader} from '../components/ScreenHeader';
import {SAVED_EVENTS_KEY} from '../constants/storage';
import {getEventById} from '../data/events';
import type {EventsStackParamList} from '../navigation/Stack';
import {colors} from '../theme/colors';

type Props = StackScreenProps<EventsStackParamList, 'EventDetails'>;

export function EventDetailsScreen({navigation, route}: Props) {
  const event = getEventById(route.params.eventId);
  const [isSaved, setIsSaved] = useState(false);

  const loadSaved = useCallback(async () => {
    const raw = await AsyncStorage.getItem(SAVED_EVENTS_KEY);
    const ids: string[] = raw ? JSON.parse(raw) : [];
    setIsSaved(ids.includes(route.params.eventId));
  }, [route.params.eventId]);

  useEffect(() => {
    loadSaved();
  }, [loadSaved]);

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

  const toggleSave = async () => {
    const raw = await AsyncStorage.getItem(SAVED_EVENTS_KEY);
    const ids: string[] = raw ? JSON.parse(raw) : [];
    const next = isSaved
      ? ids.filter(id => id !== event.id)
      : [...ids, event.id];
    await AsyncStorage.setItem(SAVED_EVENTS_KEY, JSON.stringify(next));
    setIsSaved(!isSaved);
  };

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.content}>
        <ScreenHeader
          title="Event Details"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.body}>
          <LinearGradient
            colors={[colors.cardInner, colors.card]}
            style={styles.hero}>
            <View style={styles.heroContent}>
              <Text style={styles.tag}>{event.tag.toUpperCase()}</Text>
              <Text style={styles.title}>{event.title}</Text>
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
                  index < details.length - 1 && styles.rowBorder,
                ]}>
                <Text style={styles.label}>{row.label}</Text>
                <Text style={styles.value}>{row.value}</Text>
              </View>
            ))}
          </View>

          <View style={styles.aboutCard}>
            <Text style={styles.sectionTitle}>About This Event</Text>
            <Text style={styles.aboutBody}>{event.about}</Text>
          </View>

          <View style={styles.tipBar}>
            <View style={styles.tipIcon}>
              <Text style={styles.tipIconText}>i</Text>
            </View>
            <Text style={styles.tipText}>{event.usefulNote}</Text>
          </View>

          <Pressable style={styles.saveButton} onPress={toggleSave}>
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
  root: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  content: {
    paddingBottom: 40,
  },
  body: {
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
  title: {
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
    backgroundColor: colors.card,
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
  rowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  label: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '600',
    flex: 1,
  },
  value: {
    color: colors.cream,
    fontSize: 12,
    flex: 1.4,
    textAlign: 'right',
  },
  aboutCard: {
    backgroundColor: colors.card,
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
    backgroundColor: colors.card,
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
    backgroundColor: colors.cardInner,
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
    color: colors.buttonText,
    fontSize: 15,
    fontWeight: '700',
  },
});
