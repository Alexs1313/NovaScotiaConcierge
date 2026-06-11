import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import type {ResortEvent} from '../../NovaScotiaConciergeData/NovaScotiaConciergeEvents/NovaScotiaConciergeEvents';
import {colors} from '../../NovaScotiaConciergeCore/NovaScotiaConciergeTheme/NovaScotiaConciergeColors';

type Props = {
  event: ResortEvent;
  onPress: () => void;
};

export function EventCard({event, onPress}: Props) {
  return (
    <View style={styles.novaScotiaConciergeCard}>
      <View style={styles.novaScotiaConciergeTopRow}>
        <Text style={styles.novaScotiaConciergeTag}>{event.tag.toUpperCase()}</Text>
        <Text style={styles.novaScotiaConciergeTime}>{event.time}</Text>
      </View>
      <Text style={styles.novaScotiaConciergeTitle}>{event.title}</Text>
      <Text style={styles.novaScotiaConciergeMeta}>
        {event.location} · {event.dayOfWeek}
      </Text>
      <Text style={styles.novaScotiaConciergeDescription} numberOfLines={3}>
        {event.about}
      </Text>
      <Pressable style={styles.novaScotiaConciergeButton} onPress={onPress}>
        <Text style={styles.novaScotiaConciergeButtonText}>View Event</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 18,
    gap: 8,
  },
  novaScotiaConciergeTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  novaScotiaConciergeTag: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  novaScotiaConciergeTime: {
    color: colors.gold,
    fontSize: 12,
    fontWeight: '600',
  },
  novaScotiaConciergeTitle: {
    color: colors.cream,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Georgia',
    lineHeight: 24,
  },
  novaScotiaConciergeMeta: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 18,
  },
  novaScotiaConciergeDescription: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 18,
  },
  novaScotiaConciergeButton: {
    marginTop: 4,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingVertical: 11,
    alignItems: 'center',
    backgroundColor: colors.cardInner,
  },
  novaScotiaConciergeButtonText: {
    color: colors.gold,
    fontSize: 13,
    fontWeight: '600',
  },
});
