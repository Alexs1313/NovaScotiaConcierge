import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import {FaqAccordion} from '../components/FaqAccordion';
import {ScreenHeader} from '../components/ScreenHeader';
import {FAQ_ITEMS} from '../data/assist';
import type {AssistStackParamList} from '../navigation/Stack';
import {colors} from '../theme/colors';

type Props = StackScreenProps<AssistStackParamList, 'QAHelp'>;

export function QAHelpScreen({navigation}: Props) {
  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader title="Q&A Help" onBack={() => navigation.goBack()} />
        <View style={styles.body}>
          {FAQ_ITEMS.map(item => (
            <FaqAccordion key={item.id} item={item} />
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
});
