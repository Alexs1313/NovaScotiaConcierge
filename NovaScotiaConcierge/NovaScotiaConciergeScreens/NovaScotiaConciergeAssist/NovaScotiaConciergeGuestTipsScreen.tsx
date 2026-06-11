import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import {ScreenHeader} from '../../NovaScotiaConciergeCore/NovaScotiaConciergeUi/NovaScotiaConciergeScreenHeader';
import {GUEST_TIPS} from '../../NovaScotiaConciergeData/NovaScotiaConciergeAssist/NovaScotiaConciergeAssist';
import type {AssistStackParamList} from '../../NovaScotiaConciergeAtlas/NovaScotiaConciergeStack';
import {colors} from '../../NovaScotiaConciergeCore/NovaScotiaConciergeTheme/NovaScotiaConciergeColors';

type Props = StackScreenProps<AssistStackParamList, 'GuestTips'>;

export function GuestTipsScreen({navigation}: Props) {
  return (
    <View style={styles.novaScotiaConciergeRoot}>
      <ScrollView
        contentContainerStyle={styles.novaScotiaConciergeContent}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader title="Guest Tips" onBack={() => navigation.goBack()} />
        <View style={styles.novaScotiaConciergeBody}>
          {GUEST_TIPS.map((tip, index) => (
            <View key={tip} style={styles.novaScotiaConciergeCard}>
              <Text style={styles.novaScotiaConciergeNumber}>{index + 1}</Text>
              <Text style={styles.novaScotiaConciergeTip}>{tip}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeRoot: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  novaScotiaConciergeContent: {
    paddingBottom: 40,
  },
  novaScotiaConciergeBody: {
    padding: 24,
    gap: 10,
  },
  novaScotiaConciergeCard: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 14,
    alignItems: 'flex-start',
  },
  novaScotiaConciergeNumber: {
    color: colors.gold,
    fontSize: 14,
    fontWeight: '700',
    width: 20,
  },
  novaScotiaConciergeTip: {
    flex: 1,
    color: colors.cream,
    fontSize: 13,
    lineHeight: 19,
  },
});
