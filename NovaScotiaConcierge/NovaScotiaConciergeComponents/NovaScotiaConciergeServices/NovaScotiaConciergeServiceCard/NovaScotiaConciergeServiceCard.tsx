import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import type {Service} from '../../../../NovaScotiaConciergeData/NovaScotiaConciergeServices/NovaScotiaConciergeServices/NovaScotiaConciergeServices';
import {colors} from '../../../NovaScotiaConciergeTheme/NovaScotiaConciergeColors/NovaScotiaConciergeColors';

type Props = {
  service: Service;
  onBook: () => void;
};

export function ServiceCard({service, onBook}: Props) {
  return (
    <View style={styles.novaScotiaConciergeCard}>
      <View style={styles.novaScotiaConciergeTopRow}>
        <View style={styles.novaScotiaConciergeIconBox}>
          <Text style={styles.novaScotiaConciergeIcon}>{service.icon}</Text>
        </View>
        <View style={styles.novaScotiaConciergeInfo}>
          <View style={styles.novaScotiaConciergeTitleRow}>
            <Text style={styles.novaScotiaConciergeTitle}>{service.title}</Text>
            <View style={styles.novaScotiaConciergeTag}>
              <Text style={styles.novaScotiaConciergeTagText}>{service.tag}</Text>
            </View>
          </View>
          <Text style={styles.novaScotiaConciergeTime}>{service.time}</Text>
        </View>
      </View>
      <Text style={styles.novaScotiaConciergeDescription}>{service.description}</Text>
      <Pressable style={styles.novaScotiaConciergeBookButton} onPress={onBook}>
        <Text style={styles.novaScotiaConciergeBookButtonText}>Book Now</Text>
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
    paddingHorizontal: 18,
    paddingVertical: 16,
    gap: 9,
  },
  novaScotiaConciergeTopRow: {
    flexDirection: 'row',
    gap: 12,
  },
  novaScotiaConciergeIconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: colors.cardInner,
    alignItems: 'center',
    justifyContent: 'center',
  },
  novaScotiaConciergeIcon: {
    fontSize: 20,
  },
  novaScotiaConciergeInfo: {
    flex: 1,
    gap: 4,
  },
  novaScotiaConciergeTitleRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 8,
  },
  novaScotiaConciergeTitle: {
    color: colors.cream,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  novaScotiaConciergeTag: {
    backgroundColor: colors.cardInner,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  novaScotiaConciergeTagText: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  novaScotiaConciergeTime: {
    color: colors.gold,
    fontSize: 11,
  },
  novaScotiaConciergeDescription: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 20,
  },
  novaScotiaConciergeBookButton: {
    backgroundColor: colors.cardInner,
    borderWidth: 1,
    borderColor: colors.selectedServiceBorder,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  novaScotiaConciergeBookButtonText: {
    color: colors.gold,
    fontSize: 13,
    fontWeight: '600',
  },
});
