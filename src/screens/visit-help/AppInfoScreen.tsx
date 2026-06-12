import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ScreenHeader} from '../../components/shared/ScreenHeader';
import {APP_ABOUT_TEXT} from '../../content/assist';
import {colors} from '../../constants/theme';
import {images} from '../../content/assets';

type AppInfoScreenProps = {
  onBack: () => void;
};

export function AppInfoScreen({onBack}: AppInfoScreenProps) {
  return (
    <View style={styles.AppInfoVestibule}>
      <ScrollView
        contentContainerStyle={styles.AppInfoScrollTapestry}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader title="App Info" onBack={onBack} />
        <View style={styles.AppInfoBodyEnclave}>
          <View style={styles.AppInfoBrandingEnclave}>
            <Image
              source={images.appMark}
              style={styles.AppInfoMarkSigil}
              resizeMode="contain"
            />
            <Text style={styles.AppInfoCorniceFiligree}>
              Nova Scotia Concierge Casino:
            </Text>
            <Text style={styles.AppInfoCorniceEmblem}>
              Casino Nova Scotia Halifax & Sydney
            </Text>
          </View>
          <View style={styles.AppInfoAboutReliquary}>
            <Text style={styles.AppInfoAboutFiligree}>About This App</Text>
            <Text style={styles.AppInfoAboutVellum}>{APP_ABOUT_TEXT}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  AppInfoVestibule: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  AppInfoScrollTapestry: {
    paddingBottom: 40,
  },
  AppInfoBodyEnclave: {
    padding: 24,
    gap: 20,
  },
  AppInfoBrandingEnclave: {
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
  },
  AppInfoMarkSigil: {
    width: 72,
    height: 72,
    borderRadius: 16,
  },
  AppInfoCorniceFiligree: {
    color: colors.cream,
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Georgia',
  },
  AppInfoCorniceEmblem: {
    color: colors.textMuted,
    fontSize: 13,
  },
  AppInfoAboutReliquary: {
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 18,
    gap: 8,
  },
  AppInfoAboutFiligree: {
    color: colors.cream,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  AppInfoAboutVellum: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 20,
  },
});
