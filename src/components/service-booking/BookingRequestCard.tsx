import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import type {BookingRequest} from '../../types';
import {colors} from '../../constants/theme';

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
    <View style={styles.bookingRequestCard}>
      <View style={styles.bookingRequestHeader}>
        <Text style={styles.bookingRequestTitle}>{booking.serviceTitle}</Text>
        <View style={styles.bookingRequestStatusChip}>
          <Text style={styles.bookingRequestStatusChipText}>{booking.status}</Text>
        </View>
      </View>
      {rows.map((row, index) => (
        <View
          key={row.label}
          style={[styles.bookingRequestRow, index < rows.length - 1 && styles.bookingRequestDividerRow]}>
          <Text style={styles.bookingRequestLabel}>{row.label}</Text>
          <Text style={styles.bookingRequestValue}>{row.value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bookingRequestCard: {
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    overflow: 'hidden',
  },
  bookingRequestHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 12,
    gap: 12,
  },
  bookingRequestTitle: {
    flex: 1,
    color: colors.cream,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Georgia',
    lineHeight: 20,
  },
  bookingRequestStatusChip: {
    backgroundColor: colors.panelInner,
    borderWidth: 1,
    borderColor: colors.goldBorder,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  bookingRequestStatusChipText: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  bookingRequestRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
    gap: 12,
  },
  bookingRequestDividerRow: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  bookingRequestLabel: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '600',
  },
  bookingRequestValue: {
    color: colors.cream,
    fontSize: 12,
    textAlign: 'right',
    flex: 1,
  },
});
