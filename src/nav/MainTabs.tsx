import React from 'react';
import {Image, type ImageSourcePropType} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PassScreen} from '../screens/pass/PassScreen';
import {
  AssistStack,
  DiningStack,
  EventsStack,
  getTabBarStyle,
  ServicesStack,
} from './AppStack';
import {colors} from '../constants/theme';
import {DiningCartProvider} from '../hooks/useDiningCart';
import {useResponsive} from '../hooks/useResponsive';
import {images} from '../data/assets';

const Tab = createBottomTabNavigator();

const TAB_ICONS: Record<string, ImageSourcePropType> = {
  Pass: images.tabGuestBadge,
  Services: images.tabServices,
  Events: images.tabEvents,
  Dining: images.tabDining,
  Assist: images.tabAssist,
};

function TabIcon({
  name,
  focused,
  size,
}: {
  name: string;
  focused: boolean;
  size: number;
}) {
  return (
    <Image
      source={TAB_ICONS[name]}
      style={{
        width: size,
        height: size,
        tintColor: focused ? colors.gold : colors.textDim,
      }}
      resizeMode="contain"
    />
  );
}

export default function MainTabs() {
  const responsive = useResponsive();
  const tabBarStyle = {
    backgroundColor: colors.dockBg,
    borderTopColor: colors.border,
    borderTopWidth: 1,
    height: responsive.tabHeight + 10,
    paddingTop: responsive.isTinyHeight ? 6 : 8,
    paddingBottom: responsive.isTinyHeight ? 8 : 10,
  };
  const iconSize = responsive.isTinyHeight ? 20 : 22;

  return (
    <DiningCartProvider>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle,
          tabBarActiveTintColor: colors.gold,
          tabBarInactiveTintColor: colors.textDim,
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '600',
            marginTop: 4,
          },
        }}>
        <Tab.Screen
          name="Pass"
          component={PassScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon name="Pass" focused={focused} size={iconSize} />
            ),
          }}
        />
        <Tab.Screen
          name="Services"
          component={ServicesStack}
          options={({route: stackEntry}) => ({
            tabBarStyle: getTabBarStyle('Services', stackEntry) ?? tabBarStyle,
            tabBarIcon: ({focused}) => (
              <TabIcon name="Services" focused={focused} size={iconSize} />
            ),
          })}
        />
        <Tab.Screen
          name="Events"
          component={EventsStack}
          options={({route: stackEntry}) => ({
            tabBarStyle: getTabBarStyle('Events', stackEntry) ?? tabBarStyle,
            tabBarIcon: ({focused}) => (
              <TabIcon name="Events" focused={focused} size={iconSize} />
            ),
          })}
        />
        <Tab.Screen
          name="Dining"
          component={DiningStack}
          options={({route: stackEntry}) => ({
            tabBarStyle: getTabBarStyle('Dining', stackEntry) ?? tabBarStyle,
            tabBarIcon: ({focused}) => (
              <TabIcon name="Dining" focused={focused} size={iconSize} />
            ),
          })}
        />
        <Tab.Screen
          name="Assist"
          component={AssistStack}
          options={({route: stackEntry}) => ({
            tabBarStyle: getTabBarStyle('Assist', stackEntry) ?? tabBarStyle,
            tabBarIcon: ({focused}) => (
              <TabIcon name="Assist" focused={focused} size={iconSize} />
            ),
          })}
        />
      </Tab.Navigator>
    </DiningCartProvider>
  );
}
