import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {DiningCartProvider} from '../hooks/useDiningCart';
import {SplashScreen} from '../screens/launch/SplashScreen';
import {OnboardingScreen} from '../screens/welcome/OnboardingScreen';
import {PassScreen} from '../screens/member-pass/PassScreen';
import {ServicesScreen} from '../screens/service-booking/ServicesScreen';
import {BookingScreen} from '../screens/service-booking/BookingScreen';
import {BookingSuccessScreen} from '../screens/service-booking/BookingSuccessScreen';
import {EventsScreen} from '../screens/events/EventsScreen';
import {EventDetailScreen} from '../screens/events/EventDetailScreen';
import {DiningMenuScreen} from '../screens/dining-menu/DiningMenuScreen';
import {OrderReviewScreen} from '../screens/dining-menu/OrderReviewScreen';
import {OrderConfirmationScreen} from '../screens/dining-menu/OrderConfirmationScreen';
import {AssistScreen} from '../screens/visit-help/AssistScreen';
import {FaqScreen} from '../screens/visit-help/FaqScreen';
import {SavedEventsScreen} from '../screens/visit-help/SavedEventsScreen';
import {MyBookingsScreen} from '../screens/visit-help/MyBookingsScreen';
import {DiningOrdersScreen} from '../screens/visit-help/DiningOrdersScreen';
import {GuestTipsScreen} from '../screens/visit-help/GuestTipsScreen';
import {ResortInfoScreen} from '../screens/visit-help/ResortInfoScreen';
import {AppInfoScreen} from '../screens/visit-help/AppInfoScreen';
import {colors} from '../constants/theme';
import {BottomTabBar} from './BottomTabBar';
import type {AssistRouteName, MainTabId} from './types';

type AppPhase = 'loading' | 'onboarding' | 'main';
type ServicesView = 'list' | 'booking' | 'confirmation';
type EventsView = 'list' | 'detail';
type DiningView = 'menu' | 'review' | 'confirmation';
type AssistView = 'list' | AssistRouteName;

function MainShell(): React.JSX.Element {
  const [mainTab, setMainTab] = useState<MainTabId>('pass');
  const [servicesView, setServicesView] = useState<ServicesView>('list');
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [eventsView, setEventsView] = useState<EventsView>('list');
  const [eventId, setEventId] = useState<string | null>(null);
  const [diningView, setDiningView] = useState<DiningView>('menu');
  const [assistView, setAssistView] = useState<AssistView>('list');

  const resetSubViews = useCallback(() => {
    setServicesView('list');
    setServiceId(null);
    setEventsView('list');
    setEventId(null);
    setDiningView('menu');
    setAssistView('list');
  }, []);

  useEffect(() => {
    if (mainTab !== 'services') {
      setServicesView('list');
      setServiceId(null);
    }
    if (mainTab !== 'events') {
      setEventsView('list');
      setEventId(null);
    }
    if (mainTab !== 'dining') {
      setDiningView('menu');
    }
    if (mainTab !== 'assist') {
      setAssistView('list');
    }
  }, [mainTab]);

  const showTabBar =
    mainTab === 'pass' ||
    (mainTab === 'services' && servicesView === 'list') ||
    (mainTab === 'events' && eventsView === 'list') ||
    (mainTab === 'dining' && diningView === 'menu') ||
    (mainTab === 'assist' && assistView === 'list');

  const content = (() => {
    if (mainTab === 'pass') {
      return <PassScreen />;
    }

    if (mainTab === 'services') {
      if (servicesView === 'booking' && serviceId) {
        return (
          <BookingScreen
            serviceId={serviceId}
            onBack={() => {
              setServicesView('list');
              setServiceId(null);
            }}
            onConfirmed={() => setServicesView('confirmation')}
          />
        );
      }
      if (servicesView === 'confirmation') {
        return (
          <BookingSuccessScreen
            onDone={() => {
              setServicesView('list');
              setServiceId(null);
            }}
          />
        );
      }
      return (
        <ServicesScreen
          onOpenBooking={id => {
            setServiceId(id);
            setServicesView('booking');
          }}
        />
      );
    }

    if (mainTab === 'events') {
      if (eventsView === 'detail' && eventId) {
        return (
          <EventDetailScreen
            eventId={eventId}
            onBack={() => {
              setEventsView('list');
              setEventId(null);
            }}
          />
        );
      }
      return (
        <EventsScreen
          onOpenEvent={id => {
            setEventId(id);
            setEventsView('detail');
          }}
        />
      );
    }

    if (mainTab === 'dining') {
      if (diningView === 'review') {
        return (
          <OrderReviewScreen
            onBack={() => setDiningView('menu')}
            onPlaced={() => setDiningView('confirmation')}
          />
        );
      }
      if (diningView === 'confirmation') {
        return <OrderConfirmationScreen onDone={() => setDiningView('menu')} />;
      }
      return <DiningMenuScreen onOpenReview={() => setDiningView('review')} />;
    }

    if (mainTab === 'assist') {
      if (assistView === 'QAHelp') {
        return <FaqScreen onBack={() => setAssistView('list')} />;
      }
      if (assistView === 'SavedEvents') {
        return <SavedEventsScreen onBack={() => setAssistView('list')} />;
      }
      if (assistView === 'MyBookings') {
        return <MyBookingsScreen onBack={() => setAssistView('list')} />;
      }
      if (assistView === 'DiningOrders') {
        return <DiningOrdersScreen onBack={() => setAssistView('list')} />;
      }
      if (assistView === 'GuestTips') {
        return <GuestTipsScreen onBack={() => setAssistView('list')} />;
      }
      if (assistView === 'ResortInfo') {
        return <ResortInfoScreen onBack={() => setAssistView('list')} />;
      }
      if (assistView === 'AppInfo') {
        return <AppInfoScreen onBack={() => setAssistView('list')} />;
      }
      return <AssistScreen onOpenRoute={route => setAssistView(route)} />;
    }

    return null;
  })();

  return (
    <DiningCartProvider>
      <View style={styles.RouterinoChassis}>
        <View style={styles.RouterinoBodyVellum}>{content}</View>
        {showTabBar ? (
          <BottomTabBar
            active={mainTab}
            onChange={tab => {
              setMainTab(tab);
              resetSubViews();
            }}
          />
        ) : null}
      </View>
    </DiningCartProvider>
  );
}

export default function AppNavigator(): React.JSX.Element {
  const [phase, setPhase] = useState<AppPhase>('loading');

  const handleLoaderComplete = useCallback(() => {
    setPhase('onboarding');
  }, []);

  const handleOnboardingComplete = useCallback(() => {
    setPhase('main');
  }, []);

  return (
    <SafeAreaProvider>
      {phase === 'loading' && (
        <View style={styles.LaunchChassis}>
          <SplashScreen onComplete={handleLoaderComplete} />
        </View>
      )}
      {phase === 'onboarding' && (
        <View style={styles.LaunchChassis}>
          <OnboardingScreen onComplete={handleOnboardingComplete} />
        </View>
      )}
      {phase === 'main' && <MainShell />}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  LaunchChassis: {
    flex: 1,
    backgroundColor: colors.background,
  },
  RouterinoChassis: {
    flex: 1,
  },
  RouterinoBodyVellum: {
    flex: 1,
  },
});
