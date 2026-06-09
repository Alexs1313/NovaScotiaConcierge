import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import type {Service} from '../data/services';
import {colors} from '../theme/colors';

type Props = {
  service: Service;
  onBook: () => void;
};

export function ServiceCard({service, onBook}: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.iconBox}>
          <Text style={styles.icon}>{service.icon}</Text>
        </View>
        <View style={styles.info}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{service.title}</Text>
            <View style={styles.tag}>
              <Text style={styles.tagText}>{service.tag}</Text>
            </View>
          </View>
          <Text style={styles.time}>{service.time}</Text>
        </View>
      </View>
      <Text style={styles.description}>{service.description}</Text>
      <Pressable style={styles.bookButton} onPress={onBook}>
        <Text style={styles.bookButtonText}>Book Now</Text>
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
    paddingHorizontal: 18,
    paddingVertical: 16,
    gap: 9,
  },
  topRow: {
    flexDirection: 'row',
    gap: 12,
  },
  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: colors.cardInner,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 20,
  },
  info: {
    flex: 1,
    gap: 4,
  },
  titleRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    color: colors.cream,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  tag: {
    backgroundColor: colors.cardInner,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  tagText: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  time: {
    color: colors.gold,
    fontSize: 11,
  },
  description: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 20,
  },
  bookButton: {
    backgroundColor: colors.cardInner,
    borderWidth: 1,
    borderColor: colors.selectedServiceBorder,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  bookButtonText: {
    color: colors.gold,
    fontSize: 13,
    fontWeight: '600',
  },
});
