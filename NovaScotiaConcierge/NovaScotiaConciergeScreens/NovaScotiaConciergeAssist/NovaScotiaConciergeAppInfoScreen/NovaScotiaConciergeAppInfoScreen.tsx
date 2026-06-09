import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import {ScreenHeader} from '../../../NovaScotiaConciergeComponents/NovaScotiaConciergeCommon/NovaScotiaConciergeScreenHeader/NovaScotiaConciergeScreenHeader';
import {APP_ABOUT_TEXT} from '../../../../NovaScotiaConciergeData/NovaScotiaConciergeAssist/NovaScotiaConciergeAssist/NovaScotiaConciergeAssist';
import type {AssistStackParamList} from '../../../NovaScotiaConciergeNavgt/NovaScotiaConciergeStack/NovaScotiaConciergeStack';
import {colors} from '../../../NovaScotiaConciergeTheme/NovaScotiaConciergeColors/NovaScotiaConciergeColors';

type Props = StackScreenProps<AssistStackParamList, 'AppInfo'>;

export function AppInfoScreen({navigation}: Props) {
  return (
    <View style={styles.novaScotiaConciergeRoot}>
      <ScrollView
        contentContainerStyle={styles.novaScotiaConciergeContent}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader title="App Info" onBack={() => navigation.goBack()} />
        <View style={styles.novaScotiaConciergeBody}>
          <View style={styles.novaScotiaConciergeBranding}>
            <Image
              source={require('../../../NovaScotiaConciergeAssets/NovaScotiaConciergeLoadericon.png')}
              style={styles.novaScotiaConciergeIcon}
              resizeMode="contain"
            />
            <Text style={styles.novaScotiaConciergeAppName}>
              {'Nova Scotia Concierge Casino'}
            </Text>
            <Text style={styles.novaScotiaConciergeVersion}>
              Guest Planning App
            </Text>
          </View>
          <View style={styles.novaScotiaConciergeAboutCard}>
            <Text style={styles.novaScotiaConciergeAboutTitle}>
              About This App
            </Text>
            <Text style={styles.novaScotiaConciergeAboutText}>
              {APP_ABOUT_TEXT}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeRoot: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  novaScotiaConciergeContent: {
    paddingBottom: 40,
  },
  novaScotiaConciergeBody: {
    padding: 24,
    gap: 20,
  },
  novaScotiaConciergeBranding: {
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
  },
  novaScotiaConciergeIcon: {
    width: 72,
    height: 72,
    borderRadius: 16,
  },
  novaScotiaConciergeAppName: {
    color: colors.cream,
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Georgia',
  },
  novaScotiaConciergeVersion: {
    color: colors.textMuted,
    fontSize: 13,
  },
  novaScotiaConciergeAboutCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 18,
    gap: 8,
  },
  novaScotiaConciergeAboutTitle: {
    color: colors.cream,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  novaScotiaConciergeAboutText: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 20,
  },
});
