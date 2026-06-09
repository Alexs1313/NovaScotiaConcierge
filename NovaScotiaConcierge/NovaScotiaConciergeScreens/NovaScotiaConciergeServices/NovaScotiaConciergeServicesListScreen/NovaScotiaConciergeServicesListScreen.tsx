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
import {ServiceCard} from '../../../NovaScotiaConciergeComponents/NovaScotiaConciergeServices/NovaScotiaConciergeServiceCard/NovaScotiaConciergeServiceCard';
import {SERVICES} from '../../../../NovaScotiaConciergeData/NovaScotiaConciergeServices/NovaScotiaConciergeServices/NovaScotiaConciergeServices';
import type {ServicesStackParamList} from '../../../NovaScotiaConciergeNavgt/NovaScotiaConciergeStack/NovaScotiaConciergeStack';
import {colors} from '../../../NovaScotiaConciergeTheme/NovaScotiaConciergeColors/NovaScotiaConciergeColors';
import {Background} from '../../../NovaScotiaConciergeComponents/NovaScotiaConciergeCommon/NovaScotiaConciergeBackground/NovaScotiaConciergeBackground';

type Props = StackScreenProps<ServicesStackParamList, 'ServicesList'>;

export function ServicesListScreen({navigation}: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.novaScotiaConciergeRoot}>
      <Background
        source={require('../../../NovaScotiaConciergeAssets/NovaScotiaConciergeBackground.png')}
        scrollable={false}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <View
            style={[
              styles.novaScotiaConciergeHeader,
              {paddingTop: insets.top + 17},
            ]}>
            <Text style={styles.novaScotiaConciergeTitle}>Book Services</Text>
            <Text style={styles.novaScotiaConciergeSubtitle}>
              Choose a resort service and prepare your visit in advance.
            </Text>
          </View>

          <FlatList
            data={SERVICES}
            scrollEnabled={false}
            keyExtractor={item => item.id}
            contentContainerStyle={[
              styles.novaScotiaConciergeList,
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
  novaScotiaConciergeRoot: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  novaScotiaConciergeBackground: {
    flex: 1,
  },
  novaScotiaConciergeOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.headerOverlay,
  },
  novaScotiaConciergeHeader: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingHorizontal: 20,
    paddingBottom: 15,
    gap: 5,
  },
  novaScotiaConciergeTitle: {
    color: colors.cream,
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Georgia',
    letterSpacing: -0.3,
    lineHeight: 29,
  },
  novaScotiaConciergeSubtitle: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
  },
  novaScotiaConciergeList: {
    paddingHorizontal: 20,
    paddingTop: 12,
    gap: 12,
  },
});
