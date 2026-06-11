import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StackScreenProps} from '@react-navigation/stack';
import {ServiceCard} from '../../components/ServiceCard';
import {SERVICES} from '../../data/services';
import type {ServicesStackParamList} from '../../nav/types';
import {colors} from '../../constants/theme';
import {Background} from '../../components/Background';

type Props = StackScreenProps<ServicesStackParamList, 'ServicesList'>;

export function ServicesScreen({navigation}: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.shell}>
      <Background scrollable={false}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <View
            style={[
              styles.topBlock,
              {paddingTop: insets.top + 17},
            ]}>
            <Text style={styles.heading}>Book Services</Text>
            <Text style={styles.subheading}>
              Choose a resort service and prepare your visit in advance.
            </Text>
          </View>

          <View
            style={[
              styles.listWrap,
              {paddingBottom: insets.bottom + 16},
            ]}>
            {SERVICES.map(item => (
              <ServiceCard
                key={item.id}
                service={item}
                onBook={() =>
                  navigation.navigate('BookingForm', {serviceId: item.id})
                }
              />
            ))}
          </View>
        </ScrollView>
      </Background>
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  Background: {
    flex: 1,
  },
  Overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.topOverlay,
  },
  topBlock: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingHorizontal: 20,
    paddingBottom: 15,
    gap: 5,
  },
  heading: {
    color: colors.cream,
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Georgia',
    letterSpacing: -0.3,
    lineHeight: 29,
  },
  subheading: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
  },
  listWrap: {
    paddingHorizontal: 20,
    paddingTop: 12,
    gap: 12,
  },
});
