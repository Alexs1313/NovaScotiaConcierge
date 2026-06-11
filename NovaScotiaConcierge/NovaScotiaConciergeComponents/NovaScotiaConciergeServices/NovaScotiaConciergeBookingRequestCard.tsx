import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import type {BookingRequest} from '../../NovaScotiaConciergeTypes/NovaScotiaConciergeAssist';
import {colors} from '../../NovaScotiaConciergeCore/NovaScotiaConciergeTheme/NovaScotiaConciergeColors';

type Props = {booking: BookingRequest};

export function BookingRequestCard({booking}: Props) {
  const rows = [
    {label: 'Date', value: booking.date},
    {label: 'Time', value: booking.time},
    {label: 'Guests', value: booking.guests},
    {label: 'Guest Name', value: booking.guestName},
    {label: 'Room', value: booking.room},
  ];

  return (
    <View style={styles.novaScotiaConciergeCard}>
      <View style={styles.novaScotiaConciergeHeader}>
        <Text style={styles.novaScotiaConciergeTitle}>{booking.serviceTitle}</Text>
        <View style={styles.novaScotiaConciergeBadge}>
          <Text style={styles.novaScotiaConciergeBadgeText}>{booking.status}</Text>
        </View>
      </View>
      {rows.map((row, index) => (
        <View
          key={row.label}
          style={[styles.novaScotiaConciergeRow, index < rows.length - 1 && styles.novaScotiaConciergeRowBorder]}>
          <Text style={styles.novaScotiaConciergeLabel}>{row.label}</Text>
          <Text style={styles.novaScotiaConciergeValue}>{row.value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    overflow: 'hidden',
  },
  novaScotiaConciergeHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 12,
    gap: 12,
  },
  novaScotiaConciergeTitle: {
    flex: 1,
    color: colors.cream,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Georgia',
    lineHeight: 20,
  },
  novaScotiaConciergeBadge: {
    backgroundColor: colors.cardInner,
    borderWidth: 1,
    borderColor: colors.goldBorder,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  novaScotiaConciergeBadgeText: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  novaScotiaConciergeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
    gap: 12,
  },
  novaScotiaConciergeRowBorder: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  novaScotiaConciergeLabel: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '600',
  },
  novaScotiaConciergeValue: {
    color: colors.cream,
    fontSize: 12,
    textAlign: 'right',
    flex: 1,
  },
});
