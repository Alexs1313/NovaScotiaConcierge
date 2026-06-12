import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import type {ResortEvent} from '../../content/events';
import {colors} from '../../constants/theme';

type Props = {event: ResortEvent};

export function SavedEventCard({event}: Props) {
  return (
    <View style={styles.savedEventCard}>
      <Text style={styles.savedEventBadge}>{event.tag.toUpperCase()}</Text>
      <Text style={styles.savedEventTitle}>{event.title}</Text>
      <Text style={styles.savedEventMeta}>
        {event.time} · {event.date}
      </Text>
      <Text style={styles.savedEventVenue}>{event.location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  savedEventCard: {
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 16,
    gap: 6,
  },
  savedEventBadge: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  savedEventTitle: {
    color: colors.cream,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Georgia',
    lineHeight: 20,
  },
  savedEventMeta: {
    color: colors.gold,
    fontSize: 12,
    fontWeight: '600',
  },
  savedEventVenue: {
    color: colors.textMuted,
    fontSize: 12,
  },
});
