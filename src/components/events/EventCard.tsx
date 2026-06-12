import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import type {ResortEvent} from '../../content/events';
import {colors} from '../../constants/theme';

type Props = {
  event: ResortEvent;
  onPress: () => void;
};

export function EventCard({event, onPress}: Props) {
  return (
    <View style={styles.eventCard}>
      <View style={styles.eventTopRow}>
        <Text style={styles.eventBadge}>{event.tag.toUpperCase()}</Text>
        <Text style={styles.eventSchedule}>{event.time}</Text>
      </View>
      <Text style={styles.eventTitle}>{event.title}</Text>
      <Text style={styles.eventMeta}>
        {event.location} · {event.dayOfWeek}
      </Text>
      <Text style={styles.eventDescription} numberOfLines={3}>
        {event.about}
      </Text>
      <Pressable style={styles.eventPrimaryAction} onPress={onPress}>
        <Text style={styles.eventPrimaryActionText}>View Event</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  eventCard: {
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 18,
    gap: 8,
  },
  eventTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventBadge: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  eventSchedule: {
    color: colors.gold,
    fontSize: 12,
    fontWeight: '600',
  },
  eventTitle: {
    color: colors.cream,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Georgia',
    lineHeight: 24,
  },
  eventMeta: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 18,
  },
  eventDescription: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 18,
  },
  eventPrimaryAction: {
    marginTop: 4,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingVertical: 11,
    alignItems: 'center',
    backgroundColor: colors.panelInner,
  },
  eventPrimaryActionText: {
    color: colors.gold,
    fontSize: 13,
    fontWeight: '600',
  },
});
