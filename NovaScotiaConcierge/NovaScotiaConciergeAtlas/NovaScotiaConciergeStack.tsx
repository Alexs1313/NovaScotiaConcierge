import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {ServicesListScreen} from '../NovaScotiaConciergeScreens/NovaScotiaConciergeServices/NovaScotiaConciergeServicesListScreen';
import {BookingFormScreen} from '../NovaScotiaConciergeScreens/NovaScotiaConciergeServices/NovaScotiaConciergeBookingFormScreen';
import {BookingConfirmationScreen} from '../NovaScotiaConciergeScreens/NovaScotiaConciergeServices/NovaScotiaConciergeBookingConfirmationScreen';
import {EventsListScreen} from '../NovaScotiaConciergeScreens/NovaScotiaConciergeEvents/NovaScotiaConciergeEventsListScreen';
import {EventDetailsScreen} from '../NovaScotiaConciergeScreens/NovaScotiaConciergeEvents/NovaScotiaConciergeEventDetailsScreen';
import {DiningMenuScreen} from '../NovaScotiaConciergeFeatures/NovaScotiaConciergeDining/NovaScotiaConciergePresentation/NovaScotiaConciergeScreens/NovaScotiaConciergeDiningMenuScreen';
import {OrderReviewScreen} from '../NovaScotiaConciergeFeatures/NovaScotiaConciergeDining/NovaScotiaConciergePresentation/NovaScotiaConciergeScreens/NovaScotiaConciergeOrderReviewScreen';
import {DiningOrderConfirmationScreen} from '../NovaScotiaConciergeFeatures/NovaScotiaConciergeDining/NovaScotiaConciergePresentation/NovaScotiaConciergeScreens/NovaScotiaConciergeDiningOrderConfirmationScreen';
import {AssistListScreen} from '../NovaScotiaConciergeScreens/NovaScotiaConciergeAssist/NovaScotiaConciergeAssistListScreen';
import {QAHelpScreen} from '../NovaScotiaConciergeScreens/NovaScotiaConciergeAssist/NovaScotiaConciergeQAHelpScreen';
import {SavedEventsScreen} from '../NovaScotiaConciergeScreens/NovaScotiaConciergeAssist/NovaScotiaConciergeSavedEventsScreen';
import {MyBookingsScreen} from '../NovaScotiaConciergeScreens/NovaScotiaConciergeAssist/NovaScotiaConciergeMyBookingsScreen';
import {DiningOrdersScreen} from '../NovaScotiaConciergeScreens/NovaScotiaConciergeAssist/NovaScotiaConciergeDiningOrdersScreen';
import {GuestTipsScreen} from '../NovaScotiaConciergeScreens/NovaScotiaConciergeAssist/NovaScotiaConciergeGuestTipsScreen';
import {ResortInfoScreen} from '../NovaScotiaConciergeScreens/NovaScotiaConciergeAssist/NovaScotiaConciergeResortInfoScreen';
import {AppInfoScreen} from '../NovaScotiaConciergeScreens/NovaScotiaConciergeAssist/NovaScotiaConciergeAppInfoScreen';

export type ServicesStackParamList = {
  ServicesList: undefined;
  BookingForm: {serviceId: string};
  BookingConfirmation: {serviceTitle: string};
};

export type EventsStackParamList = {
  EventsList: undefined;
  EventDetails: {eventId: string};
};

export type DiningStackParamList = {
  DiningMenu: undefined;
  OrderReview: undefined;
  DiningOrderConfirmation: undefined;
};

export type AssistStackParamList = {
  AssistList: undefined;
  QAHelp: undefined;
  SavedEvents: undefined;
  MyBookings: undefined;
  DiningOrders: undefined;
  GuestTips: undefined;
  ResortInfo: undefined;
  AppInfo: undefined;
};

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
  stackState: {name: string; params?: object},
) {
  const screenName =
    getFocusedRouteNameFromRoute(stackState) ?? TAB_ROOT_SCREENS[tabName];
  if (HIDDEN_TAB_SCREENS[tabName]?.includes(screenName)) {
    return {display: 'none' as const};
  }
  return undefined;
}

export function ServicesStack() {
  return (
    <Services.Navigator screenOptions={{headerShown: false}}>
      <Services.Screen name="ServicesList" component={ServicesListScreen} />
      <Services.Screen name="BookingForm" component={BookingFormScreen} />
      <Services.Screen
        name="BookingConfirmation"
        component={BookingConfirmationScreen}
      />
    </Services.Navigator>
  );
}

export function EventsStack() {
  return (
    <Events.Navigator screenOptions={{headerShown: false}}>
      <Events.Screen name="EventsList" component={EventsListScreen} />
      <Events.Screen name="EventDetails" component={EventDetailsScreen} />
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
        component={DiningOrderConfirmationScreen}
      />
    </Dining.Navigator>
  );
}

export function AssistStack() {
  return (
    <Assist.Navigator screenOptions={{headerShown: false}}>
      <Assist.Screen name="AssistList" component={AssistListScreen} />
      <Assist.Screen name="QAHelp" component={QAHelpScreen} />
      <Assist.Screen name="SavedEvents" component={SavedEventsScreen} />
      <Assist.Screen name="MyBookings" component={MyBookingsScreen} />
      <Assist.Screen name="DiningOrders" component={DiningOrdersScreen} />
      <Assist.Screen name="GuestTips" component={GuestTipsScreen} />
      <Assist.Screen name="ResortInfo" component={ResortInfoScreen} />
      <Assist.Screen name="AppInfo" component={AppInfoScreen} />
    </Assist.Navigator>
  );
}
