import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import type {FaqItem} from '../../types';
import {colors} from '../../constants/theme';

type Props = {faqEntry: FaqItem};

export function FaqAccordion({faqEntry}: Props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <View style={styles.faqItemCard}>
      <Pressable
        style={styles.faqItemQuestionRow}
        onPress={() => setExpanded(previous => !previous)}>
        <Text style={styles.faqQuestion}>{faqEntry.question}</Text>
        <Text style={styles.faqItemChevron}>{expanded ? '∨' : '›'}</Text>
      </Pressable>
      {expanded && (
        <View style={styles.faqAnswerWrap}>
          <Text style={styles.faqAnswer}>{faqEntry.answer}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  faqItemCard: {
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 13,
    overflow: 'hidden',
  },
  faqItemQuestionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 13,
    gap: 12,
  },
  faqQuestion: {
    flex: 1,
    color: colors.cream,
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
  },
  faqItemChevron: {
    color: colors.gold,
    fontSize: 16,
  },
  faqAnswerWrap: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 13,
  },
  faqAnswer: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 19,
  },
});
