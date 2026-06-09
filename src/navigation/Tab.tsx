import React from 'react';
import {Image, type ImageSourcePropType} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GuestPassScreen} from '../screens/GuestPassScreen';
import {
  AssistStack,
  DiningStack,
  EventsStack,
  getTabBarStyle,
  ServicesStack,
} from './Stack';
import {colors} from '../theme/colors';
import {DiningCartProvider} from '../context/DiningCartContext';

const Tab = createBottomTabNavigator();

const TAB_BAR_STYLE = {
  backgroundColor: colors.tabBar,
  borderTopColor: colors.border,
  borderTopWidth: 1,
  height: 72,
  paddingTop: 8,
  paddingBottom: 10,
};

const TAB_ICONS: Record<string, ImageSourcePropType> = {
  Pass: require('../assets/pass.png'),
  Services: require('../assets/services.png'),
  Events: require('../assets/events.png'),
  Dining: require('../assets/dining.png'),
  Assist: require('../assets/assist.png'),
};

function TabIcon({name, focused}: {name: string; focused: boolean}) {
  return (
    <Image
      source={TAB_ICONS[name]}
      style={{
        width: 22,
        height: 22,
        tintColor: focused ? colors.gold : colors.textDim,
      }}
      resizeMode="contain"
    />
  );
}

export function MainTabs() {
  return (
    <DiningCartProvider>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: TAB_BAR_STYLE,
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
          component={GuestPassScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon name="Pass" focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="Services"
          component={ServicesStack}
          options={({route}) => ({
            tabBarStyle: getTabBarStyle('Services', route) ?? TAB_BAR_STYLE,
            tabBarIcon: ({focused}) => (
              <TabIcon name="Services" focused={focused} />
            ),
          })}
        />
        <Tab.Screen
          name="Events"
          component={EventsStack}
          options={({route}) => ({
            tabBarStyle: getTabBarStyle('Events', route) ?? TAB_BAR_STYLE,
            tabBarIcon: ({focused}) => (
              <TabIcon name="Events" focused={focused} />
            ),
          })}
        />
        <Tab.Screen
          name="Dining"
          component={DiningStack}
          options={({route}) => ({
            tabBarStyle: getTabBarStyle('Dining', route) ?? TAB_BAR_STYLE,
            tabBarIcon: ({focused}) => (
              <TabIcon name="Dining" focused={focused} />
            ),
          })}
        />
        <Tab.Screen
          name="Assist"
          component={AssistStack}
          options={({route}) => ({
            tabBarStyle: getTabBarStyle('Assist', route) ?? TAB_BAR_STYLE,
            tabBarIcon: ({focused}) => (
              <TabIcon name="Assist" focused={focused} />
            ),
          })}
        />
      </Tab.Navigator>
    </DiningCartProvider>
  );
}
