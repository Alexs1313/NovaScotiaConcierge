import React from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StackScreenProps} from '@react-navigation/stack';
import {ServiceCard} from '../components/ServiceCard';
import {SERVICES} from '../data/services';
import type {ServicesStackParamList} from '../navigation/Stack';
import {colors} from '../theme/colors';
import {Background} from '../components/Background';

type Props = StackScreenProps<ServicesStackParamList, 'ServicesList'>;

export function ServicesListScreen({navigation}: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      <Background
        source={require('../assets/background.png')}
        scrollable={false}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <View style={[styles.header, {paddingTop: insets.top + 17}]}>
            <Text style={styles.title}>Book Services</Text>
            <Text style={styles.subtitle}>
              Choose a resort service and prepare your visit in advance.
            </Text>
          </View>

          <FlatList
            data={SERVICES}
            scrollEnabled={false}
            keyExtractor={item => item.id}
            contentContainerStyle={[
              styles.list,
              {paddingBottom: insets.bottom + 16},
            ]}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <ServiceCard
                service={item}
                onBook={() =>
                  navigation.navigate('BookingForm', {serviceId: item.id})
                }
              />
            )}
          />
        </ScrollView>
      </Background>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  background: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.headerOverlay,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingHorizontal: 20,
    paddingBottom: 15,
    gap: 5,
  },
  title: {
    color: colors.cream,
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Georgia',
    letterSpacing: -0.3,
    lineHeight: 29,
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
  },
  list: {
    paddingHorizontal: 20,
    paddingTop: 12,
    gap: 12,
  },
});
