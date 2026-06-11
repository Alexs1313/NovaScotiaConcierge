import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import type {ResortEvent} from '../data/events';
import {colors} from '../constants/theme';

type Props = {event: ResortEvent};

export function SavedEventCard({event}: Props) {
  return (
    <View style={styles.panel}>
      <Text style={styles.tag}>{event.tag.toUpperCase()}</Text>
      <Text style={styles.heading}>{event.title}</Text>
      <Text style={styles.meta}>
        {event.time} · {event.date}
      </Text>
      <Text style={styles.metaPlace}>{event.location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: colors.panel,
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
  heading: {
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
  metaPlace: {
    color: colors.textMuted,
    fontSize: 12,
  },
});
