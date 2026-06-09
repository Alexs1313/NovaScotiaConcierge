import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../NovaScotiaConciergeTheme/NovaScotiaConciergeColors/NovaScotiaConciergeColors';

export function OnboardingGuestPassCard() {
  return (
    <View style={styles.novaScotiaConciergeCard}>
      <View style={styles.novaScotiaConciergeHeaderRow}>
        <View style={styles.novaScotiaConciergeHeaderText}>
          <Text style={styles.novaScotiaConciergeAccessLabel}>Guest Access</Text>
          <Text style={styles.novaScotiaConciergeCasinoName}>Nova Scotia Casino</Text>
          <Text style={styles.novaScotiaConciergeConciergeLabel}>Concierge</Text>
        </View>
        <Image
          source={require('../../../NovaScotiaConciergeAssets/NovaScotiaConciergeIcon.png')}
          style={styles.novaScotiaConciergeThumbnail}
          resizeMode="cover"
        />
      </View>
      <View style={styles.novaScotiaConciergeCodeSection}>
        <Text style={styles.novaScotiaConciergeCodeLabel}>Pass Code</Text>
        <Text style={styles.novaScotiaConciergeCode}>******</Text>
      </View>
      <Text style={styles.novaScotiaConciergeValidText}>Valid Today</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeCard: {
    alignSelf: 'center',
    width: 244,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.gold,
    borderRadius: 20,
    paddingHorizontal: 23,
    paddingVertical: 21,
    gap: 12,
    shadowColor: colors.gold,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 4,
  },
  novaScotiaConciergeHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  novaScotiaConciergeHeaderText: {
    flex: 1,
    gap: 1,
    paddingRight: 8,
  },
  novaScotiaConciergeAccessLabel: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  novaScotiaConciergeCasinoName: {
    color: colors.cream,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Georgia',
    marginTop: 2,
  },
  novaScotiaConciergeConciergeLabel: {
    color: colors.textMuted,
    fontSize: 10,
  },
  novaScotiaConciergeThumbnail: {
    width: 42,
    height: 42,
    borderRadius: 10,
    opacity: 0.9,
  },
  novaScotiaConciergeCodeSection: {
    gap: 2,
    paddingTop: 4,
  },
  novaScotiaConciergeCodeLabel: {
    color: colors.textMuted,
    fontSize: 9,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  novaScotiaConciergeCode: {
    color: colors.gold,
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 5,
  },
  novaScotiaConciergeValidText: {
    color: colors.textMuted,
    fontSize: 10,
  },
});
