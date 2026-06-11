import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import {ScreenHeader} from '../../components/ScreenHeader';
import {GUEST_TIPS} from '../../data/assist';
import type {AssistStackParamList} from '../../nav/types';
import {colors} from '../../constants/theme';

type Props = StackScreenProps<AssistStackParamList, 'GuestTips'>;

export function GuestTipsScreen({navigation}: Props) {
  return (
    <View style={styles.shell}>
      <ScrollView
        contentContainerStyle={styles.inner}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader title="Guest Tips" onBack={() => navigation.goBack()} />
        <View style={styles.main}>
          {GUEST_TIPS.map((tip, index) => (
            <View key={tip} style={styles.panel}>
              <Text style={styles.number}>{index + 1}</Text>
              <Text style={styles.tip}>{tip}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  inner: {
    paddingBottom: 40,
  },
  main: {
    padding: 24,
    gap: 10,
  },
  panel: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 14,
    alignItems: 'flex-start',
  },
  number: {
    color: colors.gold,
    fontSize: 14,
    fontWeight: '700',
    width: 20,
  },
  tip: {
    flex: 1,
    color: colors.cream,
    fontSize: 13,
    lineHeight: 19,
  },
});
