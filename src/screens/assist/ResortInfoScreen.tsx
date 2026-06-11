import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import {ScreenHeader} from '../../components/ScreenHeader';
import {
  RESORT_INFO_INTRO,
  RESORT_INFO_SECTIONS,
} from '../../data/assist';
import type {AssistStackParamList} from '../../nav/types';
import {colors} from '../../constants/theme';

type Props = StackScreenProps<AssistStackParamList, 'ResortInfo'>;

export function ResortInfoScreen({navigation}: Props) {
  return (
    <View style={styles.shell}>
      <ScrollView
        contentContainerStyle={styles.inner}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader title="Resort Info" onBack={() => navigation.goBack()} />
        <View style={styles.main}>
          <Text style={styles.intro}>
            {RESORT_INFO_INTRO}
          </Text>
          {RESORT_INFO_SECTIONS.map(section => (
            <View key={section.id} style={styles.panel}>
              <Text style={styles.glyph}>{section.icon}</Text>
              <View style={styles.textBlock}>
                <Text style={styles.heading}>
                  {section.title}
                </Text>
                <Text style={styles.copy}>
                  {section.description}
                </Text>
              </View>
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
    gap: 12,
  },
  intro: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 4,
  },
  panel: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 16,
    alignItems: 'flex-start',
  },
  glyph: {
    fontSize: 22,
  },
  textBlock: {
    flex: 1,
    gap: 4,
  },
  heading: {
    color: colors.cream,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  copy: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 19,
  },
});
