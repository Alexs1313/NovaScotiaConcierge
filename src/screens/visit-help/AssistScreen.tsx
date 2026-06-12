import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Background} from '../../components/shared/Background';
import {AssistMenuCard} from '../../components/visit-help/AssistMenuCard';
import type {AssistRouteName} from '../../navigation/types';
import {colors} from '../../constants/theme';

type AssistScreenProps = {
  onOpenRoute: (route: AssistRouteName) => void;
};

const ASSIST_MENU_ENTRIES = [
  {
    icon: '❓',
    title: 'Q&A Help',
    description: 'Answers to common guest questions.',
    routeName: 'QAHelp' as const,
  },
  {
    icon: '📅',
    title: 'Saved Events',
    description: 'View events you saved from the Events tab.',
    routeName: 'SavedEvents' as const,
  },
  {
    icon: '📋',
    title: 'My Bookings',
    description: 'Review your service booking requests.',
    routeName: 'MyBookings' as const,
  },
  {
    icon: '🍽',
    title: 'Dining Orders',
    description: 'See placed dining orders and details.',
    routeName: 'DiningOrders' as const,
  },
  {
    icon: '💡',
    title: 'Guest Tips',
    description: 'Helpful tips for a smooth resort visit.',
    routeName: 'GuestTips' as const,
  },
  {
    icon: '🏨',
    title: 'Resort Info',
    description: 'Overview of guest access, services, and dining.',
    routeName: 'ResortInfo' as const,
  },
  {
    icon: 'ℹ️',
    title: 'App Info',
    description: 'About Nova Scotia Concierge Casino:',
    routeName: 'AppInfo' as const,
  },
];

export function AssistScreen({onOpenRoute}: AssistScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <Background>
      <View style={[styles.AssistCornice, {paddingTop: insets.top + 16}]}>
        <View style={styles.AssistTitleEnclave}>
          <Text style={styles.AssistCorniceFiligree}>Assist</Text>
          <Text style={styles.AssistCorniceEmblem}>
            Help, saved items, bookings, and resort information.
          </Text>
        </View>
      </View>
      <View style={styles.AssistListTapestry}>
        {ASSIST_MENU_ENTRIES.map(menuEntry => (
          <AssistMenuCard
            key={menuEntry.routeName}
            icon={menuEntry.icon}
            title={menuEntry.title}
            description={menuEntry.description}
            onPress={() => onOpenRoute(menuEntry.routeName)}
          />
        ))}
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  AssistCornice: {
    paddingBottom: 12,
    gap: 10,
  },
  AssistTitleEnclave: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 15,
    paddingHorizontal: 20,
    gap: 6,
  },
  AssistCorniceFiligree: {
    color: colors.cream,
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Georgia',
  },
  AssistCorniceEmblem: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  AssistListTapestry: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    paddingTop: 12,
    gap: 12,
  },
});
