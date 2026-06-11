import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import type {FaqItem} from '../../NovaScotiaConciergeTypes/NovaScotiaConciergeAssist';
import {colors} from '../../NovaScotiaConciergeCore/NovaScotiaConciergeTheme/NovaScotiaConciergeColors';

type Props = {item: FaqItem};

export function FaqAccordion({item}: Props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <View style={styles.novaScotiaConciergeCard}>
      <Pressable
        style={styles.novaScotiaConciergeQuestionRow}
        onPress={() => setExpanded(v => !v)}>
        <Text style={styles.novaScotiaConciergeQuestion}>{item.question}</Text>
        <Text style={styles.novaScotiaConciergeChevron}>{expanded ? '∨' : '›'}</Text>
      </Pressable>
      {expanded && (
        <View style={styles.novaScotiaConciergeAnswerSection}>
          <Text style={styles.novaScotiaConciergeAnswer}>{item.answer}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 13,
    overflow: 'hidden',
  },
  novaScotiaConciergeQuestionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 13,
    gap: 12,
  },
  novaScotiaConciergeQuestion: {
    flex: 1,
    color: colors.cream,
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
  },
  novaScotiaConciergeChevron: {
    color: colors.gold,
    fontSize: 16,
  },
  novaScotiaConciergeAnswerSection: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 13,
  },
  novaScotiaConciergeAnswer: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 19,
  },
});
