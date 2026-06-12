import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import type {Service} from '../../content/services';
import {colors} from '../../constants/theme';

type Props = {
  service: Service;
  onBook: () => void;
};

export function ServiceCard({service, onBook}: Props) {
  return (
    <View style={styles.serviceCard}>
      <View style={styles.serviceTopRow}>
        <View style={styles.serviceIconBox}>
          <Text style={styles.serviceIcon}>{service.icon}</Text>
        </View>
        <View style={styles.serviceDetails}>
          <View style={styles.headingRow}>
            <Text style={styles.serviceTitle}>{service.title}</Text>
            <View style={styles.serviceBadge}>
              <Text style={styles.serviceBadgeText}>{service.tag}</Text>
            </View>
          </View>
          <Text style={styles.serviceSchedule}>{service.time}</Text>
        </View>
      </View>
      <Text style={styles.serviceDescription}>{service.description}</Text>
      <Pressable style={styles.serviceBookButton} onPress={onBook}>
        <Text style={styles.serviceBookButtonText}>Book Now</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  serviceCard: {
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 16,
    gap: 9,
  },
  serviceTopRow: {
    flexDirection: 'row',
    gap: 12,
  },
  serviceIconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: colors.panelInner,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceIcon: {
    fontSize: 20,
  },
  serviceDetails: {
    flex: 1,
    gap: 4,
  },
  headingRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 8,
  },
  serviceTitle: {
    color: colors.cream,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  serviceBadge: {
    backgroundColor: colors.panelInner,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  serviceBadgeText: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  serviceSchedule: {
    color: colors.gold,
    fontSize: 11,
  },
  serviceDescription: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 20,
  },
  serviceBookButton: {
    backgroundColor: colors.panelInner,
    borderWidth: 1,
    borderColor: colors.selectedItemEdge,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  serviceBookButtonText: {
    color: colors.gold,
    fontSize: 13,
    fontWeight: '600',
  },
});
