import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ScreenHeader} from '../../components/shared/ScreenHeader';
import {GUEST_TIPS} from '../../content/assist';
import {colors} from '../../constants/theme';

type GuestTipsScreenProps = {
  onBack: () => void;
};

export function GuestTipsScreen({onBack}: GuestTipsScreenProps) {
  return (
    <View style={styles.GuestTipsVestibule}>
      <ScrollView
        contentContainerStyle={styles.GuestTipsScrollTapestry}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader title="Guest Tips" onBack={onBack} />
        <View style={styles.GuestTipsBodyEnclave}>
          {GUEST_TIPS.map((tip, index) => (
            <View key={tip} style={styles.GuestTipsCardReliquary}>
              <Text style={styles.GuestTipsOrdinalSigil}>{index + 1}</Text>
              <Text style={styles.GuestTipsVellum}>{tip}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  GuestTipsVestibule: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  GuestTipsScrollTapestry: {
    paddingBottom: 40,
  },
  GuestTipsBodyEnclave: {
    padding: 24,
    gap: 10,
  },
  GuestTipsCardReliquary: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 14,
    alignItems: 'flex-start',
  },
  GuestTipsOrdinalSigil: {
    color: colors.gold,
    fontSize: 14,
    fontWeight: '700',
    width: 20,
  },
  GuestTipsVellum: {
    flex: 1,
    color: colors.cream,
    fontSize: 13,
    lineHeight: 19,
  },
});
