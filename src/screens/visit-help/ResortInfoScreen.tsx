import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ScreenHeader} from '../../components/shared/ScreenHeader';
import {RESORT_INFO_INTRO, RESORT_INFO_SECTIONS} from '../../content/assist';
import {colors} from '../../constants/theme';

type ResortInfoScreenProps = {
  onBack: () => void;
};

export function ResortInfoScreen({onBack}: ResortInfoScreenProps) {
  return (
    <View style={styles.ResortInfoVestibule}>
      <ScrollView
        contentContainerStyle={styles.ResortInfoScrollTapestry}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader title="Resort Info" onBack={onBack} />
        <View style={styles.ResortInfoBodyEnclave}>
          <Text style={styles.ResortInfoIntroVellum}>{RESORT_INFO_INTRO}</Text>
          {RESORT_INFO_SECTIONS.map(section => (
            <View key={section.id} style={styles.ResortInfoCardReliquary}>
              <Text style={styles.ResortInfoSigilGlyph}>{section.icon}</Text>
              <View style={styles.ResortInfoMessageEnclave}>
                <Text style={styles.ResortInfoCardFiligree}>{section.title}</Text>
                <Text style={styles.ResortInfoCardVellum}>{section.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ResortInfoVestibule: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  ResortInfoScrollTapestry: {
    paddingBottom: 40,
  },
  ResortInfoBodyEnclave: {
    padding: 24,
    gap: 12,
  },
  ResortInfoIntroVellum: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 4,
  },
  ResortInfoCardReliquary: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 16,
    alignItems: 'flex-start',
  },
  ResortInfoSigilGlyph: {
    fontSize: 22,
  },
  ResortInfoMessageEnclave: {
    flex: 1,
    gap: 4,
  },
  ResortInfoCardFiligree: {
    color: colors.cream,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  ResortInfoCardVellum: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 19,
  },
});
