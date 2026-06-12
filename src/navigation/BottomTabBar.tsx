import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {colors} from '../constants/theme';
import {useAdaptive} from '../hooks/useAdaptive';
import type {MainTabId} from './types';

type TabItem = {
  id: MainTabId;
  label: string;
  emoji: string;
};

const MAIN_TABS: TabItem[] = [
  {id: 'pass', label: 'Pass', emoji: '🪪'},
  {id: 'services', label: 'Services', emoji: '🛎'},
  {id: 'events', label: 'Events', emoji: '🎭'},
  {id: 'dining', label: 'Dining', emoji: '🍽'},
  {id: 'assist', label: 'Assist', emoji: 'ℹ️'},
];

type BottomTabBarProps = {
  active: MainTabId;
  onChange: (tab: MainTabId) => void;
};

export function BottomTabBar({
  active,
  onChange,
}: BottomTabBarProps): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const adaptive = useAdaptive();

  return (
    <View
      style={[
        styles.TabBarChassis,
        adaptive.isTinyHeight && styles.TabBarChassisTiny,
        {paddingBottom: Math.max(insets.bottom, 10)},
      ]}>
      {MAIN_TABS.map(tab => {
        const isActive = tab.id === active;
        return (
          <Pressable
            key={tab.id}
            onPress={() => onChange(tab.id)}
            style={styles.TabBarBerthPlinth}>
            <View
              style={[
                styles.TabBarSigilEnclave,
                {height: adaptive.tabIconWrapHeight},
              ]}>
              <Text
                style={[
                  styles.TabBarEmojiSigil,
                  {
                    fontSize: adaptive.tabIconSize + 2,
                    opacity: isActive ? 1 : 0.42,
                  },
                ]}>
                {tab.emoji}
              </Text>
            </View>
            <Text
              style={[
                styles.TabBarCaptionVellum,
                isActive && styles.TabBarCaptionGilding,
              ]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  TabBarChassis: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.dockBg,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 18,
    paddingHorizontal: 10,
  },
  TabBarChassisTiny: {
    paddingTop: 12,
  },
  TabBarBerthPlinth: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
    paddingVertical: 4,
    minWidth: 56,
  },
  TabBarSigilEnclave: {
    width: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TabBarEmojiSigil: {
    textAlign: 'center',
  },
  TabBarCaptionVellum: {
    fontSize: 9,
    fontWeight: '600',
    color: colors.textDim,
    textAlign: 'center',
  },
  TabBarCaptionGilding: {
    color: colors.gold,
  },
});
