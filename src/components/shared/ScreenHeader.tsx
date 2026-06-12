import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../constants/theme';
import {useAdaptive} from '../../hooks/useAdaptive';

type Props = {
  title: string;
  onBack?: () => void;
};

export function ScreenHeader({title, onBack}: Props) {
  const insets = useSafeAreaInsets();
  const adaptive = useAdaptive();

  return (
    <View
      style={[
        styles.navHeaderHeader,
        {paddingTop: insets.top + 8},
        {paddingHorizontal: adaptive.horizontalPadding + 4},
        adaptive.isSmallHeight && styles.NavCorniceCompact,
      ]}>
      {onBack ? (
        <Pressable style={styles.navHeaderBackButton} onPress={onBack} hitSlop={8}>
          <Text
            style={[
              styles.navHeaderBackIcon,
              adaptive.isSmallHeight && styles.NavBackGlyphTight,
            ]}>
            ‹
          </Text>
        </Pressable>
      ) : (
        <View style={styles.navHeaderBackSpacer} />
      )}
      <Text
        style={[
          styles.navHeaderTitle,
          adaptive.isNarrow && styles.NavCorniceFiligreeNarrow,
          adaptive.isSmallHeight && styles.NavCorniceFiligreeTight,
        ]}
        numberOfLines={2}
        adjustsFontSizeToFit>
        {title}
      </Text>
      <View style={styles.navHeaderBackSpacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  navHeaderHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundDark,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 13,
    marginBottom: 20,
  },
  NavCorniceCompact: {
    paddingBottom: 10,
    marginBottom: 14,
  },
  navHeaderBackButton: {
    width: 30,
    paddingRight: 8,
  },
  navHeaderBackIcon: {
    color: colors.gold,
    fontSize: 22,
    lineHeight: 22,
  },
  NavBackGlyphTight: {
    fontSize: 20,
    lineHeight: 20,
  },
  navHeaderBackSpacer: {
    width: 30,
  },
  navHeaderTitle: {
    flex: 1,
    color: colors.cream,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Georgia',
    textAlign: 'center',
  },
  NavCorniceFiligreeNarrow: {
    fontSize: 15,
  },
  NavCorniceFiligreeTight: {
    fontSize: 14,
  },
});
