import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import type {ResortEvent} from '../data/events';
import {colors} from '../theme/colors';

type Props = {event: ResortEvent};

export function SavedEventCard({event}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.tag}>{event.tag.toUpperCase()}</Text>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.meta}>
        {event.time} · {event.date}
      </Text>
      <Text style={styles.location}>{event.location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 16,
    gap: 6,
  },
  tag: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  title: {
    color: colors.cream,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Georgia',
    lineHeight: 20,
  },
  meta: {
    color: colors.gold,
    fontSize: 12,
    fontWeight: '600',
  },
  location: {
    color: colors.textMuted,
    fontSize: 12,
  },
});
