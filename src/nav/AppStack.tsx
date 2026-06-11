import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {ServicesScreen} from '../screens/services/ServicesScreen';
import {BookingScreen} from '../screens/services/BookingScreen';
import {BookingSuccessScreen} from '../screens/services/BookingSuccessScreen';
import {EventsScreen} from '../screens/events/EventsScreen';
import {EventDetailScreen} from '../screens/events/EventDetailScreen';
import {DiningMenuScreen} from '../screens/dining/DiningMenuScreen';
import {OrderReviewScreen} from '../screens/dining/OrderReviewScreen';
import {OrderConfirmationScreen} from '../screens/dining/OrderConfirmationScreen';
import {AssistScreen} from '../screens/assist/AssistScreen';
import {FaqScreen} from '../screens/assist/FaqScreen';
import {SavedEventsScreen} from '../screens/assist/SavedEventsScreen';
import {MyBookingsScreen} from '../screens/assist/MyBookingsScreen';
import {DiningOrdersScreen} from '../screens/assist/DiningOrdersScreen';
import {GuestTipsScreen} from '../screens/assist/GuestTipsScreen';
import {ResortInfoScreen} from '../screens/assist/ResortInfoScreen';
import {AppInfoScreen} from '../screens/assist/AppInfoScreen';
import type {
  AssistStackParamList,
  DiningStackParamList,
  EventsStackParamList,
  ServicesStackParamList,
} from './types';

const Services = createStackNavigator<ServicesStackParamList>();
const Events = createStackNavigator<EventsStackParamList>();
const Dining = createStackNavigator<DiningStackParamList>();
const Assist = createStackNavigator<AssistStackParamList>();

const TAB_ROOT_SCREENS: Record<string, string> = {
  Services: 'ServicesList',
  Events: 'EventsList',
  Dining: 'DiningMenu',
  Assist: 'AssistList',
};

const HIDDEN_TAB_SCREENS: Record<string, string[]> = {
  Services: ['BookingForm', 'BookingConfirmation'],
  Events: ['EventDetails'],
  Dining: ['OrderReview', 'DiningOrderConfirmation'],
  Assist: [
    'QAHelp',
    'SavedEvents',
    'MyBookings',
    'DiningOrders',
    'GuestTips',
    'ResortInfo',
    'AppInfo',
  ],
};

export function getTabBarStyle(
  tabName: keyof typeof TAB_ROOT_SCREENS,
  stackEntry: {name: string; params?: object},
) {
  const screenName =
    getFocusedRouteNameFromRoute(stackEntry) ?? TAB_ROOT_SCREENS[tabName];
  if (HIDDEN_TAB_SCREENS[tabName]?.includes(screenName)) {
    return {display: 'none' as const};
  }
  return undefined;
}

export function ServicesStack() {
  return (
    <Services.Navigator screenOptions={{headerShown: false}}>
      <Services.Screen name="ServicesList" component={ServicesScreen} />
      <Services.Screen name="BookingForm" component={BookingScreen} />
      <Services.Screen
        name="BookingConfirmation"
        component={BookingSuccessScreen}
      />
    </Services.Navigator>
  );
}

export function EventsStack() {
  return (
    <Events.Navigator screenOptions={{headerShown: false}}>
      <Events.Screen name="EventsList" component={EventsScreen} />
      <Events.Screen name="EventDetails" component={EventDetailScreen} />
    </Events.Navigator>
  );
}

export function DiningStack() {
  return (
    <Dining.Navigator screenOptions={{headerShown: false}}>
      <Dining.Screen name="DiningMenu" component={DiningMenuScreen} />
      <Dining.Screen name="OrderReview" component={OrderReviewScreen} />
      <Dining.Screen
        name="DiningOrderConfirmation"
        component={OrderConfirmationScreen}
      />
    </Dining.Navigator>
  );
}

export function AssistStack() {
  return (
    <Assist.Navigator screenOptions={{headerShown: false}}>
      <Assist.Screen name="AssistList" component={AssistScreen} />
      <Assist.Screen name="QAHelp" component={FaqScreen} />
      <Assist.Screen name="SavedEvents" component={SavedEventsScreen} />
      <Assist.Screen name="MyBookings" component={MyBookingsScreen} />
      <Assist.Screen name="DiningOrders" component={DiningOrdersScreen} />
      <Assist.Screen name="GuestTips" component={GuestTipsScreen} />
      <Assist.Screen name="ResortInfo" component={ResortInfoScreen} />
      <Assist.Screen name="AppInfo" component={AppInfoScreen} />
    </Assist.Navigator>
  );
}
