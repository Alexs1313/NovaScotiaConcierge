import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {FaqAccordion} from '../../components/shared/FaqAccordion';
import {ScreenHeader} from '../../components/shared/ScreenHeader';
import {FAQ_ITEMS} from '../../content/assist';
import {colors} from '../../constants/theme';

type FaqScreenProps = {
  onBack: () => void;
};

export function FaqScreen({onBack}: FaqScreenProps) {
  return (
    <View style={styles.FaqVestibule}>
      <ScrollView
        contentContainerStyle={styles.FaqScrollTapestry}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader title="Q&A Help" onBack={onBack} />
        <View style={styles.FaqBodyEnclave}>
          {FAQ_ITEMS.map(faqEntry => (
            <FaqAccordion key={faqEntry.id} faqEntry={faqEntry} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  FaqVestibule: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  FaqScrollTapestry: {
    paddingBottom: 40,
  },
  FaqBodyEnclave: {
    padding: 24,
    gap: 12,
  },
});
