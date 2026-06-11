import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import type {StackScreenProps} from '@react-navigation/stack';
import {FaqAccordion} from '../../components/FaqAccordion';
import {ScreenHeader} from '../../components/ScreenHeader';
import {FAQ_ITEMS} from '../../data/assist';
import type {AssistStackParamList} from '../../nav/types';
import {colors} from '../../constants/theme';

type Props = StackScreenProps<AssistStackParamList, 'QAHelp'>;

export function FaqScreen({navigation}: Props) {
  return (
    <View style={styles.shell}>
      <ScrollView
        contentContainerStyle={styles.inner}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader title="Q&A Help" onBack={() => navigation.goBack()} />
        <View style={styles.main}>
          {FAQ_ITEMS.map(item => (
            <FaqAccordion key={item.id} item={item} />
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
});
