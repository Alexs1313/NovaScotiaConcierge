import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ServiceCard} from '../../components/service-booking/ServiceCard';
import {SERVICES} from '../../content/services';
import {colors} from '../../constants/theme';
import {Background} from '../../components/shared/Background';

type ServicesScreenProps = {
  onOpenBooking: (serviceId: string) => void;
};

export function ServicesScreen({onOpenBooking}: ServicesScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.ServicesVestibule}>
      <Background scrollable={false}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <View style={[styles.ServicesCornice, {paddingTop: insets.top + 17}]}>
            <Text style={styles.ServicesCorniceFiligree}>Book Services</Text>
            <Text style={styles.ServicesCorniceEmblem}>
              Choose a resort service and prepare your visit in advance.
            </Text>
          </View>

          <View style={[styles.ServicesListTapestry, {paddingBottom: insets.bottom + 16}]}>
            {SERVICES.map(service => (
              <ServiceCard
                key={service.id}
                service={service}
                onBook={() => onOpenBooking(service.id)}
              />
            ))}
          </View>
        </ScrollView>
      </Background>
    </View>
  );
}

const styles = StyleSheet.create({
  ServicesVestibule: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  ServicesCornice: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingHorizontal: 20,
    paddingBottom: 15,
    gap: 5,
  },
  ServicesCorniceFiligree: {
    color: colors.cream,
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Georgia',
    letterSpacing: -0.3,
    lineHeight: 29,
  },
  ServicesCorniceEmblem: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
  },
  ServicesListTapestry: {
    paddingHorizontal: 20,
    paddingTop: 12,
    gap: 12,
  },
});
