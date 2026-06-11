import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../../NovaScotiaConciergeCore/NovaScotiaConciergeTheme/NovaScotiaConciergeColors';

type Props = {
  code: string;
  onExpand?: () => void;
  compact?: boolean;
};

function formatCode(code: string): string {
  return code.replace('-', ' - ');
}

export function GuestPassCard({code, onExpand, compact}: Props) {
  const content = (
    <View style={[styles.novaScotiaConciergeCardWrap, compact && styles.novaScotiaConciergeCardCompact]}>
      <LinearGradient
        colors={['#0f1e42', '#0d1428', '#111e35']}
        locations={[0, 0.6, 1]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.novaScotiaConciergeCard}>
        <View style={{padding: 20, gap: 18}}>
          <View style={styles.novaScotiaConciergeHeaderRow}>
            <View style={styles.novaScotiaConciergeHeaderText}>
              <Text style={styles.novaScotiaConciergeAccessLabel}>Guest Access</Text>
              <Text style={styles.novaScotiaConciergeCasinoName}>Nova Scotia Casino</Text>
              <Text style={styles.novaScotiaConciergeConciergeLabel}>Concierge</Text>
            </View>
            <Image
              source={require('../../../../NovaScotiaConciergeAssets/NovaScotiaConciergeGuestMark.png')}
              style={styles.novaScotiaConciergeThumbnail}
              resizeMode="cover"
            />
          </View>
          <View style={styles.novaScotiaConciergeDivider} />
          <View style={styles.novaScotiaConciergeCodeSection}>
            <Text style={styles.novaScotiaConciergeCodeLabel}>Pass Code</Text>
            <Text style={styles.novaScotiaConciergeCode}>{formatCode(code)}</Text>
          </View>
          <View style={styles.novaScotiaConciergeFooterRow}>
            <View style={styles.novaScotiaConciergeValidBadge}>
              <Text style={styles.novaScotiaConciergeValidText}>Valid Today</Text>
            </View>
            {onExpand && <Text style={styles.novaScotiaConciergeTapHint}>Tap to Brighten</Text>}
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
  novaScotiaConciergeCardWrap: {
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.gold,
    overflow: 'hidden',
  },
  novaScotiaConciergeCardCompact: {
    alignSelf: 'center',
    width: 244,
  },
  novaScotiaConciergeCard: {
    overflow: 'hidden',
  },
  novaScotiaConciergeGlow: {
    position: 'absolute',
    top: -40,
    right: -40,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'rgba(201, 164, 48, 0.07)',
  },
  novaScotiaConciergeHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  novaScotiaConciergeHeaderText: {
    flex: 1,
    gap: 2,
    paddingRight: 12,
  },
  novaScotiaConciergeAccessLabel: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  novaScotiaConciergeCasinoName: {
    color: colors.cream,
    fontSize: 17,
    fontWeight: '700',
    fontFamily: 'Georgia',
    marginTop: 2,
  },
  novaScotiaConciergeConciergeLabel: {
    color: colors.textMuted,
    fontSize: 11,
  },
  novaScotiaConciergeThumbnail: {
    width: 50,
    height: 50,
    borderRadius: 12,
    opacity: 0.92,
  },
  novaScotiaConciergeDivider: {
    height: 1,
    backgroundColor: colors.goldDivider,
  },
  novaScotiaConciergeCodeSection: {
    gap: 6,
  },
  novaScotiaConciergeCodeLabel: {
    color: colors.textMuted,
    fontSize: 9,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  novaScotiaConciergeCode: {
    color: colors.gold,
    fontSize: 32,
    fontWeight: '700',
    fontFamily: 'Courier',
    letterSpacing: 6,
  },
  novaScotiaConciergeFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  novaScotiaConciergeValidBadge: {
    backgroundColor: colors.cardInner,
    borderWidth: 1,
    borderColor: colors.goldBorder,
    borderRadius: 8,
    paddingHorizontal: 13,
    paddingVertical: 6,
  },
  novaScotiaConciergeValidText: {
    color: colors.gold,
    fontSize: 10,
    fontWeight: '600',
  },
  novaScotiaConciergeTapHint: {
    color: colors.textGoldMuted,
    fontSize: 11,
  },
});
