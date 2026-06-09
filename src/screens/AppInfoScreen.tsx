import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import {ScreenHeader} from '../components/ScreenHeader';
import {APP_ABOUT_TEXT} from '../data/assist';
import type {AssistStackParamList} from '../navigation/Stack';
import {colors} from '../theme/colors';

type Props = StackScreenProps<AssistStackParamList, 'AppInfo'>;

export function AppInfoScreen({navigation}: Props) {
  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader title="App Info" onBack={() => navigation.goBack()} />
        <View style={styles.body}>
          <View style={styles.branding}>
            <Image
              source={require('../assets/icon.png')}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.appName}>Nova Scotia Concierge</Text>
            <Text style={styles.version}>Guest Planning App</Text>
          </View>
          <View style={styles.aboutCard}>
            <Text style={styles.aboutTitle}>About This App</Text>
            <Text style={styles.aboutText}>{APP_ABOUT_TEXT}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  content: {
    paddingBottom: 40,
  },
  body: {
    padding: 24,
    gap: 20,
  },
  branding: {
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
  },
  icon: {
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
    backgroundColor: colors.card,
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
