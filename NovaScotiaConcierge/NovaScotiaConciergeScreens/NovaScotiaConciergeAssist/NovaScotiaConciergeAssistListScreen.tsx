import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StackScreenProps} from '@react-navigation/stack';
import {Background} from '../../NovaScotiaConciergeCore/NovaScotiaConciergeUi/NovaScotiaConciergeBackground';
import {AssistMenuCard} from '../../NovaScotiaConciergeComponents/NovaScotiaConciergeAssist/NovaScotiaConciergeAssistMenuCard';
import type {AssistStackParamList} from '../../NovaScotiaConciergeAtlas/NovaScotiaConciergeStack';
import {colors} from '../../NovaScotiaConciergeCore/NovaScotiaConciergeTheme/NovaScotiaConciergeColors';

type Props = StackScreenProps<AssistStackParamList, 'AssistList'>;

const MENU_ITEMS = [
  {
    icon: '❓',
    title: 'Q&A Help',
    description: 'Answers to common guest questions.',
    screen: 'QAHelp' as const,
  },
  {
    icon: '📅',
    title: 'Saved Events',
    description: 'View events you saved from the Events tab.',
    screen: 'SavedEvents' as const,
  },
  {
    icon: '📋',
    title: 'My Bookings',
    description: 'Review your service booking requests.',
    screen: 'MyBookings' as const,
  },
  {
    icon: '🍽',
    title: 'Dining Orders',
    description: 'See placed dining orders and details.',
    screen: 'DiningOrders' as const,
  },
  {
    icon: '💡',
    title: 'Guest Tips',
    description: 'Helpful tips for a smooth resort visit.',
    screen: 'GuestTips' as const,
  },
  {
    icon: '🏨',
    title: 'Resort Info',
    description: 'Overview of guest access, services, and dining.',
    screen: 'ResortInfo' as const,
  },
  {
    icon: 'ℹ️',
    title: 'App Info',
    description: 'About Nova Scotia Concierge Casino.',
    screen: 'AppInfo' as const,
  },
];

export function AssistListScreen({navigation}: Props) {
  const insets = useSafeAreaInsets();

  return (
    <Background
      source={require('../../NovaScotiaConciergeAssets/NovaScotiaConciergeSceneBackdrop.png')}>
      <View
        style={[
          styles.novaScotiaConciergeHeader,
          {paddingTop: insets.top + 16},
        ]}>
        <View style={styles.novaScotiaConciergeTitleSection}>
          <Text style={styles.novaScotiaConciergeTitle}>Assist</Text>
          <Text style={styles.novaScotiaConciergeSubtitle}>
            Help, saved items, bookings, and resort information.
          </Text>
        </View>
      </View>
      <FlatList
        data={MENU_ITEMS}
        scrollEnabled={false}
        keyExtractor={item => item.screen}
        contentContainerStyle={styles.novaScotiaConciergeList}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <AssistMenuCard
            icon={item.icon}
            title={item.title}
            description={item.description}
            onPress={() => navigation.navigate(item.screen)}
          />
        )}
      />
    </Background>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeHeader: {
    paddingBottom: 12,
    gap: 10,
  },
  novaScotiaConciergeTitleSection: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 15,
    paddingHorizontal: 20,
    gap: 6,
  },
  novaScotiaConciergeTitle: {
    color: colors.cream,
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Georgia',
  },
  novaScotiaConciergeSubtitle: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  novaScotiaConciergeList: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    paddingTop: 12,
    gap: 12,
  },
});
