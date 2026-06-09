import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {ServicesListScreen} from '../screens/ServicesListScreen';
import {BookingFormScreen} from '../screens/BookingFormScreen';
import {BookingConfirmationScreen} from '../screens/BookingConfirmationScreen';
import {EventsListScreen} from '../screens/EventsListScreen';
import {EventDetailsScreen} from '../screens/EventDetailsScreen';
import {DiningMenuScreen} from '../screens/DiningMenuScreen';
import {OrderReviewScreen} from '../screens/OrderReviewScreen';
import {DiningOrderConfirmationScreen} from '../screens/DiningOrderConfirmationScreen';
import {AssistListScreen} from '../screens/AssistListScreen';
import {QAHelpScreen} from '../screens/QAHelpScreen';
import {SavedEventsScreen} from '../screens/SavedEventsScreen';
import {MyBookingsScreen} from '../screens/MyBookingsScreen';
import {DiningOrdersScreen} from '../screens/DiningOrdersScreen';
import {GuestTipsScreen} from '../screens/GuestTipsScreen';
import {ResortInfoScreen} from '../screens/ResortInfoScreen';
import {AppInfoScreen} from '../screens/AppInfoScreen';

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

const TAB_ROOT_ROUTES: Record<string, string> = {
  Services: 'ServicesList',
  Events: 'EventsList',
  Dining: 'DiningMenu',
  Assist: 'AssistList',
};

const HIDDEN_TAB_ROUTES: Record<string, string[]> = {
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
  tabName: keyof typeof TAB_ROOT_ROUTES,
  route: {name: string; params?: object},
) {
  const routeName =
    getFocusedRouteNameFromRoute(route) ?? TAB_ROOT_ROUTES[tabName];
  if (HIDDEN_TAB_ROUTES[tabName]?.includes(routeName)) {
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
