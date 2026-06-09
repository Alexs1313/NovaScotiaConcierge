import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../../NovaScotiaConciergeTheme/NovaScotiaConciergeColors/NovaScotiaConciergeColors';

type Props = {
  title: string;
  onBack?: () => void;
};

export function ScreenHeader({title, onBack}: Props) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.novaScotiaConciergeHeader, {paddingTop: insets.top + 8}]}>
      {onBack ? (
        <Pressable style={styles.novaScotiaConciergeBackButton} onPress={onBack} hitSlop={8}>
          <Text style={styles.novaScotiaConciergeBackIcon}>‹</Text>
        </Pressable>
      ) : (
        <View style={styles.novaScotiaConciergeBackPlaceholder} />
      )}
      <Text style={styles.novaScotiaConciergeTitle}>{title}</Text>
      <View style={styles.novaScotiaConciergeBackPlaceholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundDark,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 13,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  novaScotiaConciergeBackButton: {
    width: 30,
    paddingRight: 8,
  },
  novaScotiaConciergeBackIcon: {
    color: colors.gold,
    fontSize: 22,
    lineHeight: 22,
  },
  novaScotiaConciergeBackPlaceholder: {
    width: 30,
  },
  novaScotiaConciergeTitle: {
    flex: 1,
    color: colors.cream,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Georgia',
    textAlign: 'center',
  },
});
