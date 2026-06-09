import React, {useCallback, useEffect, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type {StackScreenProps} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import {ScreenHeader} from '../../../NovaScotiaConciergeComponents/NovaScotiaConciergeCommon/NovaScotiaConciergeScreenHeader/NovaScotiaConciergeScreenHeader';
import {SAVED_EVENTS_KEY} from '../../../NovaScotiaConciergeConstants/NovaScotiaConciergeVault/NovaScotiaConciergeVault';
import {getEventById} from '../../../../NovaScotiaConciergeData/NovaScotiaConciergeEvents/NovaScotiaConciergeEvents/NovaScotiaConciergeEvents';
import type {EventsStackParamList} from '../../../NovaScotiaConciergeNavgt/NovaScotiaConciergeStack/NovaScotiaConciergeStack';
import {colors} from '../../../NovaScotiaConciergeTheme/NovaScotiaConciergeColors/NovaScotiaConciergeColors';

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
    <View style={styles.novaScotiaConciergeRoot}>
      <ScrollView contentContainerStyle={styles.novaScotiaConciergeContent}>
        <ScreenHeader
          title="Event Details"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.novaScotiaConciergeBody}>
          <LinearGradient
            colors={[colors.cardInner, colors.card]}
            style={styles.novaScotiaConciergeHero}>
            <View style={styles.novaScotiaConciergeHeroContent}>
              <Text style={styles.novaScotiaConciergeTag}>
                {event.tag.toUpperCase()}
              </Text>
              <Text style={styles.novaScotiaConciergeTitle}>{event.title}</Text>
              <Text style={styles.novaScotiaConciergeMeta}>
                {event.time} · {event.date}
              </Text>
            </View>
          </LinearGradient>

          <View style={styles.novaScotiaConciergeTable}>
            {details.map((row, index) => (
              <View
                key={row.label}
                style={[
                  styles.novaScotiaConciergeRow,
                  index < details.length - 1 &&
                    styles.novaScotiaConciergeRowBorder,
                ]}>
                <Text style={styles.novaScotiaConciergeLabel}>{row.label}</Text>
                <Text style={styles.novaScotiaConciergeValue}>{row.value}</Text>
              </View>
            ))}
          </View>

          <View style={styles.novaScotiaConciergeAboutCard}>
            <Text style={styles.novaScotiaConciergeSectionTitle}>
              About This Event
            </Text>
            <Text style={styles.novaScotiaConciergeAboutBody}>
              {event.about}
            </Text>
          </View>

          <View style={styles.novaScotiaConciergeTipBar}>
            <View style={styles.novaScotiaConciergeTipIcon}>
              <Text style={styles.novaScotiaConciergeTipIconText}>i</Text>
            </View>
            <Text style={styles.novaScotiaConciergeTipText}>
              {event.usefulNote}
            </Text>
          </View>

          <Pressable
            style={styles.novaScotiaConciergeSaveButton}
            onPress={toggleSave}>
            <Text style={styles.novaScotiaConciergeSaveText}>
              {isSaved ? 'Event Saved' : 'Save Event'}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeRoot: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  novaScotiaConciergeContent: {
    paddingBottom: 40,
  },
  novaScotiaConciergeBody: {
    padding: 20,
    gap: 14,
  },
  novaScotiaConciergeHero: {
    borderRadius: 17,
    borderWidth: 1,
    borderColor: colors.border,
  },
  novaScotiaConciergeHeroContent: {
    padding: 20,
    gap: 5,
  },
  novaScotiaConciergeTag: {
    color: colors.gold,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  novaScotiaConciergeTitle: {
    color: colors.cream,
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Georgia',
    lineHeight: 26,
  },
  novaScotiaConciergeMeta: {
    color: colors.gold,
    fontSize: 13,
    fontWeight: '600',
  },
  novaScotiaConciergeTable: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    overflow: 'hidden',
  },
  novaScotiaConciergeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  novaScotiaConciergeRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  novaScotiaConciergeLabel: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '600',
    flex: 1,
  },
  novaScotiaConciergeValue: {
    color: colors.cream,
    fontSize: 12,
    flex: 1.4,
    textAlign: 'right',
  },
  novaScotiaConciergeAboutCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 16,
    gap: 8,
  },
  novaScotiaConciergeSectionTitle: {
    color: colors.cream,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  novaScotiaConciergeAboutBody: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 20,
  },
  novaScotiaConciergeTipBar: {
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
  novaScotiaConciergeTipIcon: {
    width: 18,
    height: 18,
    borderRadius: 4,
    backgroundColor: colors.cardInner,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  novaScotiaConciergeTipIconText: {
    color: colors.gold,
    fontSize: 11,
    fontWeight: '700',
    fontStyle: 'italic',
  },
  novaScotiaConciergeTipText: {
    flex: 1,
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 18,
  },
  novaScotiaConciergeSaveButton: {
    backgroundColor: colors.gold,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  novaScotiaConciergeSaveText: {
    color: colors.buttonText,
    fontSize: 15,
    fontWeight: '700',
  },
});
