import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme/colors';

export function OnboardingGuestPassCard() {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View style={styles.headerText}>
          <Text style={styles.accessLabel}>Guest Access</Text>
          <Text style={styles.casinoName}>Nova Scotia Casino</Text>
          <Text style={styles.conciergeLabel}>Concierge</Text>
        </View>
        <Image
          source={require('../assets/icon.png')}
          style={styles.thumbnail}
          resizeMode="cover"
        />
      </View>
      <View style={styles.codeSection}>
        <Text style={styles.codeLabel}>Pass Code</Text>
        <Text style={styles.code}>******</Text>
      </View>
      <Text style={styles.validText}>Valid Today</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerText: {
    flex: 1,
    gap: 1,
    paddingRight: 8,
  },
  accessLabel: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  casinoName: {
    color: colors.cream,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Georgia',
    marginTop: 2,
  },
  conciergeLabel: {
    color: colors.textMuted,
    fontSize: 10,
  },
  thumbnail: {
    width: 42,
    height: 42,
    borderRadius: 10,
    opacity: 0.9,
  },
  codeSection: {
    gap: 2,
    paddingTop: 4,
  },
  codeLabel: {
    color: colors.textMuted,
    fontSize: 9,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  code: {
    color: colors.gold,
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 5,
  },
  validText: {
    color: colors.textMuted,
    fontSize: 10,
  },
});
