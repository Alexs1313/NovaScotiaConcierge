import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import {ScreenHeader} from '../components/ScreenHeader';
import {RESORT_INFO_INTRO, RESORT_INFO_SECTIONS} from '../data/assist';
import type {AssistStackParamList} from '../navigation/Stack';
import {colors} from '../theme/colors';

type Props = StackScreenProps<AssistStackParamList, 'ResortInfo'>;

export function ResortInfoScreen({navigation}: Props) {
  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader title="Resort Info" onBack={() => navigation.goBack()} />
        <View style={styles.body}>
          <Text style={styles.intro}>{RESORT_INFO_INTRO}</Text>
          {RESORT_INFO_SECTIONS.map(section => (
            <View key={section.id} style={styles.card}>
              <Text style={styles.icon}>{section.icon}</Text>
              <View style={styles.textBlock}>
                <Text style={styles.title}>{section.title}</Text>
                <Text style={styles.description}>{section.description}</Text>
              </View>
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
    gap: 12,
  },
  intro: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 4,
  },
  card: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 16,
    alignItems: 'flex-start',
  },
  icon: {
    fontSize: 22,
  },
  textBlock: {
    flex: 1,
    gap: 4,
  },
  title: {
    color: colors.cream,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  description: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 19,
  },
});
