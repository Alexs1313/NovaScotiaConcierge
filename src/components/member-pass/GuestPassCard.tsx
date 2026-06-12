import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../constants/theme';
import {images} from '../../content/assets';
import {useAdaptive} from '../../hooks/useAdaptive';

type Props = {
  code: string;
  onExpand?: () => void;
  compact?: boolean;
};

function formatCode(code: string): string {
  return code.replace('-', ' - ');
}

export function GuestPassCard({code, onExpand, compact}: Props) {
  const adaptive = useAdaptive();
  const thumbnailSize = compact ? 42 : Math.max(44, adaptive.qrSize * 0.28);
  const codeFontSize = compact ? 26 : adaptive.isSmallHeight ? 28 : 32;

  const content = (
    <View style={[styles.guestPassCardOuter, compact && styles.guestPassCardCompact]}>
      <LinearGradient
        colors={['#0f1e42', '#0d1428', '#111e35']}
        locations={[0, 0.6, 1]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.guestPassCard}>
        <View style={{padding: 20, gap: 18}}>
          <View style={styles.guestPassHeaderRow}>
            <View style={styles.guestPassHeaderCopy}>
              <Text style={styles.guestPassAccessLabel}>Guest Access</Text>
              <Text style={styles.guestPassBrandTitle}>
                Nova Scotia Concierge Casino:
              </Text>
            </View>
            <Image
              source={images.guestMark}
              style={[
                styles.guestPassAvatar,
                {width: thumbnailSize, height: thumbnailSize},
              ]}
              resizeMode="cover"
            />
          </View>
          <View style={styles.guestPassDivider} />
          <View style={styles.guestPassCodeBlock}>
            <Text style={styles.guestPassCodeLabel}>Pass Code</Text>
            <Text style={[styles.guestPassCodeValue, {fontSize: codeFontSize}]}>
              {formatCode(code)}
            </Text>
          </View>
          <View style={styles.guestPassBottomRow}>
            <View style={styles.guestPassValidChip}>
              <Text style={styles.guestPassValidChipText}>Valid Today</Text>
            </View>
            {onExpand && <Text style={styles.guestPassTapHint}>Tap to Brighten</Text>}
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
  guestPassCardOuter: {
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.gold,
    overflow: 'hidden',
  },
  guestPassCardCompact: {
    alignSelf: 'center',
    width: 244,
  },
  guestPassCard: {
    overflow: 'hidden',
  },
  guestPassHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  guestPassHeaderCopy: {
    flex: 1,
    gap: 2,
    paddingRight: 12,
  },
  guestPassAccessLabel: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  guestPassBrandTitle: {
    color: colors.cream,
    fontSize: 17,
    fontWeight: '700',
    fontFamily: 'Georgia',
    marginTop: 2,
  },
  guestPassAvatar: {
    width: 50,
    height: 50,
    borderRadius: 12,
    opacity: 0.92,
  },
  guestPassDivider: {
    height: 1,
    backgroundColor: colors.goldDivider,
  },
  guestPassCodeBlock: {
    gap: 6,
  },
  guestPassCodeLabel: {
    color: colors.textMuted,
    fontSize: 9,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  guestPassCodeValue: {
    color: colors.gold,
    fontSize: 32,
    fontWeight: '700',
    fontFamily: 'Courier',
    letterSpacing: 6,
  },
  guestPassBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  guestPassValidChip: {
    backgroundColor: colors.panelInner,
    borderWidth: 1,
    borderColor: colors.goldBorder,
    borderRadius: 8,
    paddingHorizontal: 13,
    paddingVertical: 6,
  },
  guestPassValidChipText: {
    color: colors.gold,
    fontSize: 10,
    fontWeight: '600',
  },
  guestPassTapHint: {
    color: colors.textGoldMuted,
    fontSize: 11,
  },
});
