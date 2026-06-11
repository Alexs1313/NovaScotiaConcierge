import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../NovaScotiaConciergeCore/NovaScotiaConciergeTheme/NovaScotiaConciergeColors';

type Props = {
  icon: string;
  title: string;
  description: string;
  onPress: () => void;
};

export function AssistMenuCard({icon, title, description, onPress}: Props) {
  return (
    <Pressable style={styles.novaScotiaConciergeCard} onPress={onPress}>
      <View style={styles.novaScotiaConciergeIconBox}>
        <Text style={styles.novaScotiaConciergeIcon}>{icon}</Text>
      </View>
      <View style={styles.novaScotiaConciergeContent}>
        <Text style={styles.novaScotiaConciergeTitle}>{title}</Text>
        <Text style={styles.novaScotiaConciergeDescription}>{description}</Text>
      </View>
      <Text style={styles.novaScotiaConciergeChevron}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  novaScotiaConciergeIconBox: {
    width: 46,
    height: 46,
    borderRadius: 13,
    backgroundColor: colors.cardInner,
    borderWidth: 1,
    borderColor: colors.selectedServiceBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  novaScotiaConciergeIcon: {
    fontSize: 21,
  },
  novaScotiaConciergeContent: {
    flex: 1,
    gap: 2,
  },
  novaScotiaConciergeTitle: {
    color: colors.cream,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  novaScotiaConciergeDescription: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 17,
  },
  novaScotiaConciergeChevron: {
    color: colors.textDim,
    fontSize: 20,
    fontWeight: '300',
  },
});
