import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import {ScreenHeader} from '../../../NovaScotiaConciergeComponents/NovaScotiaConciergeCommon/NovaScotiaConciergeScreenHeader/NovaScotiaConciergeScreenHeader';
import {
  RESORT_INFO_INTRO,
  RESORT_INFO_SECTIONS,
} from '../../../../NovaScotiaConciergeData/NovaScotiaConciergeAssist/NovaScotiaConciergeAssist/NovaScotiaConciergeAssist';
import type {AssistStackParamList} from '../../../NovaScotiaConciergeNavgt/NovaScotiaConciergeStack/NovaScotiaConciergeStack';
import {colors} from '../../../NovaScotiaConciergeTheme/NovaScotiaConciergeColors/NovaScotiaConciergeColors';

type Props = StackScreenProps<AssistStackParamList, 'ResortInfo'>;

export function ResortInfoScreen({navigation}: Props) {
  return (
    <View style={styles.novaScotiaConciergeRoot}>
      <ScrollView
        contentContainerStyle={styles.novaScotiaConciergeContent}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader title="Resort Info" onBack={() => navigation.goBack()} />
        <View style={styles.novaScotiaConciergeBody}>
          <Text style={styles.novaScotiaConciergeIntro}>
            {RESORT_INFO_INTRO}
          </Text>
          {RESORT_INFO_SECTIONS.map(section => (
            <View key={section.id} style={styles.novaScotiaConciergeCard}>
              <Text style={styles.novaScotiaConciergeIcon}>{section.icon}</Text>
              <View style={styles.novaScotiaConciergeTextBlock}>
                <Text style={styles.novaScotiaConciergeTitle}>
                  {section.title}
                </Text>
                <Text style={styles.novaScotiaConciergeDescription}>
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
  novaScotiaConciergeRoot: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  novaScotiaConciergeContent: {
    paddingBottom: 40,
  },
  novaScotiaConciergeBody: {
    padding: 24,
    gap: 12,
  },
  novaScotiaConciergeIntro: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 4,
  },
  novaScotiaConciergeCard: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 16,
    alignItems: 'flex-start',
  },
  novaScotiaConciergeIcon: {
    fontSize: 22,
  },
  novaScotiaConciergeTextBlock: {
    flex: 1,
    gap: 4,
  },
  novaScotiaConciergeTitle: {
    color: colors.cream,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  novaScotiaConciergeDescription: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 19,
  },
});
