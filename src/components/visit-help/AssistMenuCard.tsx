import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants/theme';

type Props = {
  icon: string;
  title: string;
  description: string;
  onPress: () => void;
};

export function AssistMenuCard({icon, title, description, onPress}: Props) {
  return (
    <Pressable style={styles.assistMenuCard} onPress={onPress}>
      <View style={styles.assistMenuIconBox}>
        <Text style={styles.assistMenuIcon}>{icon}</Text>
      </View>
      <View style={styles.assistMenuScrollContent}>
        <Text style={styles.assistMenuTitle}>{title}</Text>
        <Text style={styles.assistMenuDescription}>{description}</Text>
      </View>
      <Text style={styles.assistMenuChevron}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  assistMenuCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  assistMenuIconBox: {
    width: 46,
    height: 46,
    borderRadius: 13,
    backgroundColor: colors.panelInner,
    borderWidth: 1,
    borderColor: colors.selectedItemEdge,
    alignItems: 'center',
    justifyContent: 'center',
  },
  assistMenuIcon: {
    fontSize: 21,
  },
  assistMenuScrollContent: {
    flex: 1,
    gap: 2,
  },
  assistMenuTitle: {
    color: colors.cream,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  assistMenuDescription: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 17,
  },
  assistMenuChevron: {
    color: colors.textDim,
    fontSize: 20,
    fontWeight: '300',
  },
});
