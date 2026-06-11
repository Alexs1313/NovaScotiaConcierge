import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../constants/theme';
import {images} from '../data/assets';
import {useResponsive} from '../hooks/useResponsive';

type Props = {
  code: string;
  onExpand?: () => void;
  compact?: boolean;
};

function formatCode(code: string): string {
  return code.replace('-', ' - ');
}

export function GuestPassCard({code, onExpand, compact}: Props) {
  const responsive = useResponsive();
  const thumbnailSize = compact ? 42 : Math.max(44, responsive.qrSize * 0.28);
  const codeFontSize = compact ? 26 : responsive.isSmallHeight ? 28 : 32;

  const content = (
    <View style={[styles.panelOuter, compact && styles.panelTight]}>
      <LinearGradient
        colors={['#0f1e42', '#0d1428', '#111e35']}
        locations={[0, 0.6, 1]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.panel}>
        <View style={{padding: 20, gap: 18}}>
          <View style={styles.rowHead}>
            <View style={styles.headCopy}>
              <Text style={styles.markLabel}>Guest Access</Text>
              <Text style={styles.markHeading}>Nova Scotia Casino</Text>
              <Text style={styles.markSub}>Concierge</Text>
            </View>
            <Image
              source={images.guestMark}
              style={[
                styles.thumb,
                {width: thumbnailSize, height: thumbnailSize},
              ]}
              resizeMode="cover"
            />
          </View>
          <View style={styles.line} />
          <View style={styles.codeBlock}>
            <Text style={styles.codeLabel}>Pass Code</Text>
            <Text style={[styles.codeValue, {fontSize: codeFontSize}]}>
              {formatCode(code)}
            </Text>
          </View>
          <View style={styles.rowFoot}>
            <View style={styles.chipValid}>
              <Text style={styles.chipValidLabel}>Valid Today</Text>
            </View>
            {onExpand && <Text style={styles.tapHint}>Tap to Brighten</Text>}
          </View>
        </View>
      </LinearGradient>
    </View>
  );

  if (onExpand) {
    return <Pressable onPress={onExpand}>{content}</Pressable>;
  }

  return content;
}

const styles = StyleSheet.create({
  panelOuter: {
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.gold,
    overflow: 'hidden',
  },
  panelTight: {
    alignSelf: 'center',
    width: 244,
  },
  panel: {
    overflow: 'hidden',
  },
  Glow: {
    position: 'absolute',
    top: -40,
    right: -40,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'rgba(201, 164, 48, 0.07)',
  },
  rowHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headCopy: {
    flex: 1,
    gap: 2,
    paddingRight: 12,
  },
  markLabel: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  markHeading: {
    color: colors.cream,
    fontSize: 17,
    fontWeight: '700',
    fontFamily: 'Georgia',
    marginTop: 2,
  },
  markSub: {
    color: colors.textMuted,
    fontSize: 11,
  },
  thumb: {
    width: 50,
    height: 50,
    borderRadius: 12,
    opacity: 0.92,
  },
  line: {
    height: 1,
    backgroundColor: colors.goldDivider,
  },
  codeBlock: {
    gap: 6,
  },
  codeLabel: {
    color: colors.textMuted,
    fontSize: 9,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  codeValue: {
    color: colors.gold,
    fontSize: 32,
    fontWeight: '700',
    fontFamily: 'Courier',
    letterSpacing: 6,
  },
  rowFoot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chipValid: {
    backgroundColor: colors.panelInner,
    borderWidth: 1,
    borderColor: colors.goldBorder,
    borderRadius: 8,
    paddingHorizontal: 13,
    paddingVertical: 6,
  },
  chipValidLabel: {
    color: colors.gold,
    fontSize: 10,
    fontWeight: '600',
  },
  tapHint: {
    color: colors.textGoldMuted,
    fontSize: 11,
  },
});
