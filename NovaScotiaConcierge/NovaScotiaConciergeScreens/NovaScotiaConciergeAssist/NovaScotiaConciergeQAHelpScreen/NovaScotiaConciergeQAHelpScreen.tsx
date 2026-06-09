import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import {FaqAccordion} from '../../../NovaScotiaConciergeComponents/NovaScotiaConciergeAssist/NovaScotiaConciergeFaqAccordion/NovaScotiaConciergeFaqAccordion';
import {ScreenHeader} from '../../../NovaScotiaConciergeComponents/NovaScotiaConciergeCommon/NovaScotiaConciergeScreenHeader/NovaScotiaConciergeScreenHeader';
import {FAQ_ITEMS} from '../../../../NovaScotiaConciergeData/NovaScotiaConciergeAssist/NovaScotiaConciergeAssist/NovaScotiaConciergeAssist';
import type {AssistStackParamList} from '../../../NovaScotiaConciergeNavgt/NovaScotiaConciergeStack/NovaScotiaConciergeStack';
import {colors} from '../../../NovaScotiaConciergeTheme/NovaScotiaConciergeColors/NovaScotiaConciergeColors';

type Props = StackScreenProps<AssistStackParamList, 'QAHelp'>;

export function QAHelpScreen({navigation}: Props) {
  return (
    <View style={styles.novaScotiaConciergeRoot}>
      <ScrollView
        contentContainerStyle={styles.novaScotiaConciergeContent}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader title="Q&A Help" onBack={() => navigation.goBack()} />
        <View style={styles.novaScotiaConciergeBody}>
          {FAQ_ITEMS.map(item => (
            <FaqAccordion key={item.id} item={item} />
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
});
