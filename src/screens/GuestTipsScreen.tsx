import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import {ScreenHeader} from '../components/ScreenHeader';
import {GUEST_TIPS} from '../data/assist';
import type {AssistStackParamList} from '../navigation/Stack';
import {colors} from '../theme/colors';

type Props = StackScreenProps<AssistStackParamList, 'GuestTips'>;

export function GuestTipsScreen({navigation}: Props) {
  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader title="Guest Tips" onBack={() => navigation.goBack()} />
        <View style={styles.body}>
          {GUEST_TIPS.map((tip, index) => (
            <View key={tip} style={styles.card}>
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
  root: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  content: {
    paddingBottom: 40,
  },
  body: {
    padding: 24,
    gap: 10,
  },
  card: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: colors.card,
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
