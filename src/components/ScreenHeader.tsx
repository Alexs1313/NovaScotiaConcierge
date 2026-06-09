import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../theme/colors';

type Props = {
  title: string;
  onBack?: () => void;
};

export function ScreenHeader({title, onBack}: Props) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.header, {paddingTop: insets.top + 8}]}>
      {onBack ? (
        <Pressable style={styles.backButton} onPress={onBack} hitSlop={8}>
          <Text style={styles.backIcon}>‹</Text>
        </Pressable>
      ) : (
        <View style={styles.backPlaceholder} />
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.backPlaceholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundDark,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 13,
    paddingHorizontal: 20,
  },
  backButton: {
    width: 30,
    paddingRight: 8,
  },
  backIcon: {
    color: colors.gold,
    fontSize: 22,
    lineHeight: 22,
  },
  backPlaceholder: {
    width: 30,
  },
  title: {
    flex: 1,
    color: colors.cream,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Georgia',
    textAlign: 'center',
  },
});
