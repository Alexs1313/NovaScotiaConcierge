import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../constants/theme';
import {useResponsive} from '../hooks/useResponsive';

type Props = {
  title: string;
  onBack?: () => void;
};

export function ScreenHeader({title, onBack}: Props) {
  const insets = useSafeAreaInsets();
  const responsive = useResponsive();

  return (
    <View
      style={[
        styles.topBlock,
        {paddingTop: insets.top + 8},
        {paddingHorizontal: responsive.horizontalPadding + 4},
        responsive.isSmallHeight && styles.topBlockCompact,
      ]}>
      {onBack ? (
        <Pressable style={styles.actionBack} onPress={onBack} hitSlop={8}>
          <Text
            style={[
              styles.actionBackGlyph,
              responsive.isSmallHeight && styles.actionBackGlyphTight,
            ]}>
            ‹
          </Text>
        </Pressable>
      ) : (
        <View style={styles.actionBackSpacer} />
      )}
      <Text
        style={[
          styles.heading,
          responsive.isNarrow && styles.headingCompact,
          responsive.isSmallHeight && styles.headingTight,
        ]}
        numberOfLines={2}
        adjustsFontSizeToFit>
        {title}
      </Text>
      <View style={styles.actionBackSpacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  topBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundDark,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 13,
    marginBottom: 20,
  },
  topBlockCompact: {
    paddingBottom: 10,
    marginBottom: 14,
  },
  actionBack: {
    width: 30,
    paddingRight: 8,
  },
  actionBackGlyph: {
    color: colors.gold,
    fontSize: 22,
    lineHeight: 22,
  },
  actionBackGlyphTight: {
    fontSize: 20,
    lineHeight: 20,
  },
  actionBackSpacer: {
    width: 30,
  },
  heading: {
    flex: 1,
    color: colors.cream,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Georgia',
    textAlign: 'center',
  },
  headingCompact: {
    fontSize: 15,
  },
  headingTight: {
    fontSize: 14,
  },
});
