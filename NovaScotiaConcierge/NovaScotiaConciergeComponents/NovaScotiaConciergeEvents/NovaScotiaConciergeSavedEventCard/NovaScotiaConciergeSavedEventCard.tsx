import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import type {ResortEvent} from '../../../../NovaScotiaConciergeData/NovaScotiaConciergeEvents/NovaScotiaConciergeEvents/NovaScotiaConciergeEvents';
import {colors} from '../../../NovaScotiaConciergeTheme/NovaScotiaConciergeColors/NovaScotiaConciergeColors';

type Props = {event: ResortEvent};

export function SavedEventCard({event}: Props) {
  return (
    <View style={styles.novaScotiaConciergeCard}>
      <Text style={styles.novaScotiaConciergeTag}>{event.tag.toUpperCase()}</Text>
      <Text style={styles.novaScotiaConciergeTitle}>{event.title}</Text>
      <Text style={styles.novaScotiaConciergeMeta}>
        {event.time} · {event.date}
      </Text>
      <Text style={styles.novaScotiaConciergeLocation}>{event.location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 16,
    gap: 6,
  },
  novaScotiaConciergeTag: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  novaScotiaConciergeTitle: {
    color: colors.cream,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Georgia',
    lineHeight: 20,
  },
  novaScotiaConciergeMeta: {
    color: colors.gold,
    fontSize: 12,
    fontWeight: '600',
  },
  novaScotiaConciergeLocation: {
    color: colors.textMuted,
    fontSize: 12,
  },
});
