import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {WEEK_DAYS} from '../../../../NovaScotiaConciergeData/NovaScotiaConciergeEvents/NovaScotiaConciergeEvents/NovaScotiaConciergeEvents';
import {colors} from '../../../NovaScotiaConciergeTheme/NovaScotiaConciergeColors/NovaScotiaConciergeColors';

type Props = {
  selectedDay: number;
  daysWithEvents: number[];
  onSelect: (dayNumber: number) => void;
};

export function WeekDayPicker({
  selectedDay,
  daysWithEvents,
  onSelect,
}: Props) {
  return (
    <View style={styles.novaScotiaConciergeRow}>
      {WEEK_DAYS.map(day => {
        const active = day.dayNumber === selectedDay;
        const hasEvent = daysWithEvents.includes(day.dayNumber);
        return (
          <Pressable
            key={day.dayNumber}
            style={[styles.novaScotiaConciergeDay, active && styles.novaScotiaConciergeDayActive]}
            onPress={() => onSelect(day.dayNumber)}>
            <Text style={[styles.novaScotiaConciergeLabel, active && styles.novaScotiaConciergeLabelActive]}>
              {day.label}
            </Text>
            <Text style={[styles.novaScotiaConciergeNumber, active && styles.novaScotiaConciergeNumberActive]}>
              {day.dayNumber}
            </Text>
            {hasEvent && (
              <View style={[styles.novaScotiaConciergeDot, active && styles.novaScotiaConciergeDotActive]} />
            )}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 6,
  },
  novaScotiaConciergeDay: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    gap: 2,
  },
  novaScotiaConciergeDayActive: {
    backgroundColor: colors.gold,
    borderColor: colors.gold,
  },
  novaScotiaConciergeLabel: {
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: '600',
  },
  novaScotiaConciergeLabelActive: {
    color: colors.buttonText,
  },
  novaScotiaConciergeNumber: {
    color: colors.cream,
    fontSize: 14,
    fontWeight: '700',
  },
  novaScotiaConciergeNumberActive: {
    color: colors.buttonText,
  },
  novaScotiaConciergeDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: colors.gold,
    marginTop: 2,
  },
  novaScotiaConciergeDotActive: {
    backgroundColor: colors.buttonText,
  },
});
