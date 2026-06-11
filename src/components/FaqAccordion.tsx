import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import type {FaqItem} from '../types';
import {colors} from '../constants/theme';

type Props = {item: FaqItem};

export function FaqAccordion({item}: Props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <View style={styles.panel}>
      <Pressable
        style={styles.rowQuestion}
        onPress={() => setExpanded(v => !v)}>
        <Text style={styles.question}>{item.question}</Text>
        <Text style={styles.chevron}>{expanded ? '∨' : '›'}</Text>
      </Pressable>
      {expanded && (
        <View style={styles.answerWrap}>
          <Text style={styles.answer}>{item.answer}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 13,
    overflow: 'hidden',
  },
  rowQuestion: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 13,
    gap: 12,
  },
  question: {
    flex: 1,
    color: colors.cream,
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
  },
  chevron: {
    color: colors.gold,
    fontSize: 16,
  },
  answerWrap: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 13,
  },
  answer: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 19,
  },
});
