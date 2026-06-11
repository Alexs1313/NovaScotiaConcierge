import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import {ScreenHeader} from '../../components/ScreenHeader';
import {APP_ABOUT_TEXT} from '../../data/assist';
import type {AssistStackParamList} from '../../nav/types';
import {colors} from '../../constants/theme';
import {images} from '../../data/assets';

type Props = StackScreenProps<AssistStackParamList, 'AppInfo'>;

export function AppInfoScreen({navigation}: Props) {
  return (
    <View style={styles.shell}>
      <ScrollView
        contentContainerStyle={styles.inner}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader title="App Info" onBack={() => navigation.goBack()} />
        <View style={styles.main}>
          <View style={styles.branding}>
            <Image
              source={images.appMark}
              style={styles.glyph}
              resizeMode="contain"
            />
            <Text style={styles.appName}>
              {'Nova Scotia Concierge Casino'}
            </Text>
            <Text style={styles.version}>
              Guest Planning App
            </Text>
          </View>
          <View style={styles.aboutCard}>
            <Text style={styles.aboutTitle}>
              About This App
            </Text>
            <Text style={styles.aboutText}>
              {APP_ABOUT_TEXT}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  inner: {
    paddingBottom: 40,
  },
  main: {
    padding: 24,
    gap: 20,
  },
  branding: {
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
  },
  glyph: {
    width: 72,
    height: 72,
    borderRadius: 16,
  },
  appName: {
    color: colors.cream,
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Georgia',
  },
  version: {
    color: colors.textMuted,
    fontSize: 13,
  },
  aboutCard: {
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 18,
    gap: 8,
  },
  aboutTitle: {
    color: colors.cream,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  aboutText: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 20,
  },
});
