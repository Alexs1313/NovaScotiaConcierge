import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants/theme';

type Props = {
  icon: string;
  title: string;
  description: string;
  onPress: () => void;
};

export function AssistMenuCard({icon, title, description, onPress}: Props) {
  return (
    <Pressable style={styles.panel} onPress={onPress}>
      <View style={styles.glyphBox}>
        <Text style={styles.glyph}>{icon}</Text>
      </View>
      <View style={styles.inner}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.copy}>{description}</Text>
      </View>
      <Text style={styles.chevron}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  panel: {
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
  glyphBox: {
    width: 46,
    height: 46,
    borderRadius: 13,
    backgroundColor: colors.panelInner,
    borderWidth: 1,
    borderColor: colors.selectedItemEdge,
    alignItems: 'center',
    justifyContent: 'center',
  },
  glyph: {
    fontSize: 21,
  },
  inner: {
    flex: 1,
    gap: 2,
  },
  heading: {
    color: colors.cream,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  copy: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 17,
  },
  chevron: {
    color: colors.textDim,
    fontSize: 20,
    fontWeight: '300',
  },
});
