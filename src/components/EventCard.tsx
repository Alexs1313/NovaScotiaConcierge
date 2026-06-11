import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import type {ResortEvent} from '../data/events';
import {colors} from '../constants/theme';

type Props = {
  event: ResortEvent;
  onPress: () => void;
};

export function EventCard({event, onPress}: Props) {
  return (
    <View style={styles.panel}>
      <View style={styles.rowTop}>
        <Text style={styles.tag}>{event.tag.toUpperCase()}</Text>
        <Text style={styles.metaTime}>{event.time}</Text>
      </View>
      <Text style={styles.heading}>{event.title}</Text>
      <Text style={styles.meta}>
        {event.location} · {event.dayOfWeek}
      </Text>
      <Text style={styles.copy} numberOfLines={3}>
        {event.about}
      </Text>
      <Pressable style={styles.action} onPress={onPress}>
        <Text style={styles.actionLabel}>View Event</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 18,
    gap: 8,
  },
  rowTop: {
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
  metaTime: {
    color: colors.gold,
    fontSize: 12,
    fontWeight: '600',
  },
  heading: {
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
  copy: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 18,
  },
  action: {
    marginTop: 4,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingVertical: 11,
    alignItems: 'center',
    backgroundColor: colors.panelInner,
  },
  actionLabel: {
    color: colors.gold,
    fontSize: 13,
    fontWeight: '600',
  },
});
