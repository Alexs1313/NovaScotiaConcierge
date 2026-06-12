import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {WEEK_DAYS} from '../../content/events';
import {colors} from '../../constants/theme';

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
    <View style={styles.weekPickerRow}>
      {WEEK_DAYS.map(day => {
        const active = day.dayNumber === selectedDay;
        const hasEvent = daysWithEvents.includes(day.dayNumber);
        return (
          <Pressable
            key={day.dayNumber}
            style={[styles.day, active && styles.dayActive]}
            onPress={() => onSelect(day.dayNumber)}>
            <Text style={[styles.weekPickerLabel, active && styles.labelActive]}>
              {day.label}
            </Text>
            <Text style={[styles.number, active && styles.numberActive]}>
              {day.dayNumber}
            </Text>
            {hasEvent && (
              <View style={[styles.weekPickerBullet, active && styles.dotOn]} />
            )}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  weekPickerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 6,
  },
  day: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.panel,
    gap: 2,
  },
  dayActive: {
    backgroundColor: colors.gold,
    borderColor: colors.gold,
  },
  weekPickerLabel: {
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: '600',
  },
  labelActive: {
    color: colors.actionText,
  },
  number: {
    color: colors.cream,
    fontSize: 14,
    fontWeight: '700',
  },
  numberActive: {
    color: colors.actionText,
  },
  weekPickerBullet: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: colors.gold,
    marginTop: 2,
  },
  dotOn: {
    backgroundColor: colors.actionText,
  },
});
