import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import type {ResortEvent} from '../data/events';
import {colors} from '../theme/colors';

type Props = {
  event: ResortEvent;
  onPress: () => void;
};

export function EventCard({event, onPress}: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.tag}>{event.tag.toUpperCase()}</Text>
        <Text style={styles.time}>{event.time}</Text>
      </View>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.meta}>
        {event.location} · {event.dayOfWeek}
      </Text>
      <Text style={styles.description} numberOfLines={3}>
        {event.about}
      </Text>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>View Event</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 18,
    gap: 8,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tag: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  time: {
    color: colors.gold,
    fontSize: 12,
    fontWeight: '600',
  },
  title: {
    color: colors.cream,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Georgia',
    lineHeight: 24,
  },
  meta: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 18,
  },
  description: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 18,
  },
  button: {
    marginTop: 4,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingVertical: 11,
    alignItems: 'center',
    backgroundColor: colors.cardInner,
  },
  buttonText: {
    color: colors.gold,
    fontSize: 13,
    fontWeight: '600',
  },
});
