import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StackScreenProps} from '@react-navigation/stack';
import {Background} from '../../components/Background';
import {AssistMenuCard} from '../../components/AssistMenuCard';
import type {AssistStackParamList} from '../../nav/types';
import {colors} from '../../constants/theme';

type Props = StackScreenProps<AssistStackParamList, 'AssistList'>;

const MENU_ITEMS = [
  {
    icon: '❓',
    title: 'Q&A Help',
    description: 'Answers to common guest questions.',
    shell: 'QAHelp' as const,
  },
  {
    icon: '📅',
    title: 'Saved Events',
    description: 'View events you saved from the Events tab.',
    shell: 'SavedEvents' as const,
  },
  {
    icon: '📋',
    title: 'My Bookings',
    description: 'Review your service booking requests.',
    shell: 'MyBookings' as const,
  },
  {
    icon: '🍽',
    title: 'Dining Orders',
    description: 'See placed dining orders and details.',
    shell: 'DiningOrders' as const,
  },
  {
    icon: '💡',
    title: 'Guest Tips',
    description: 'Helpful tips for a smooth resort visit.',
    shell: 'GuestTips' as const,
  },
  {
    icon: '🏨',
    title: 'Resort Info',
    description: 'Overview of guest access, services, and dining.',
    shell: 'ResortInfo' as const,
  },
  {
    icon: 'ℹ️',
    title: 'App Info',
    description: 'About Nova Scotia Concierge Casino.',
    shell: 'AppInfo' as const,
  },
];

export function AssistScreen({navigation}: Props) {
  const insets = useSafeAreaInsets();

  return (
    <Background>
      <View
        style={[
          styles.topBlock,
          {paddingTop: insets.top + 16},
        ]}>
        <View style={styles.headingBlock}>
          <Text style={styles.heading}>Assist</Text>
          <Text style={styles.subheading}>
            Help, saved items, bookings, and resort information.
          </Text>
        </View>
      </View>
      <View style={styles.listWrap}>
        {MENU_ITEMS.map(item => (
          <AssistMenuCard
            key={item.shell}
            icon={item.icon}
            title={item.title}
            description={item.description}
            onPress={() => navigation.navigate(item.shell)}
          />
        ))}
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  topBlock: {
    paddingBottom: 12,
    gap: 10,
  },
  headingBlock: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 15,
    paddingHorizontal: 20,
    gap: 6,
  },
  heading: {
    color: colors.cream,
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Georgia',
  },
  subheading: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  listWrap: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    paddingTop: 12,
    gap: 12,
  },
});
