import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../theme/colors';

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
    <View style={[styles.cardWrap, compact && styles.cardCompact]}>
      <LinearGradient
        colors={['#0f1e42', '#0d1428', '#111e35']}
        locations={[0, 0.6, 1]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.card}>
        <View style={{padding: 20, gap: 18}}>
          <View style={styles.headerRow}>
            <View style={styles.headerText}>
              <Text style={styles.accessLabel}>Guest Access</Text>
              <Text style={styles.casinoName}>Nova Scotia Casino</Text>
              <Text style={styles.conciergeLabel}>Concierge</Text>
            </View>
            <Image
              source={require('../assets/icon.png')}
              style={styles.thumbnail}
              resizeMode="cover"
            />
          </View>
          <View style={styles.divider} />
          <View style={styles.codeSection}>
            <Text style={styles.codeLabel}>Pass Code</Text>
            <Text style={styles.code}>{formatCode(code)}</Text>
          </View>
          <View style={styles.footerRow}>
            <View style={styles.validBadge}>
              <Text style={styles.validText}>Valid Today</Text>
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
  cardWrap: {
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.gold,
    overflow: 'hidden',
  },
  cardCompact: {
    alignSelf: 'center',
    width: 244,
  },
  card: {
    overflow: 'hidden',
  },
  glow: {
    position: 'absolute',
    top: -40,
    right: -40,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'rgba(201, 164, 48, 0.07)',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerText: {
    flex: 1,
    gap: 2,
    paddingRight: 12,
  },
  accessLabel: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  casinoName: {
    color: colors.cream,
    fontSize: 17,
    fontWeight: '700',
    fontFamily: 'Georgia',
    marginTop: 2,
  },
  conciergeLabel: {
    color: colors.textMuted,
    fontSize: 11,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 12,
    opacity: 0.92,
  },
  divider: {
    height: 1,
    backgroundColor: colors.goldDivider,
  },
  codeSection: {
    gap: 6,
  },
  codeLabel: {
    color: colors.textMuted,
    fontSize: 9,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  code: {
    color: colors.gold,
    fontSize: 32,
    fontWeight: '700',
    fontFamily: 'Courier',
    letterSpacing: 6,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  validBadge: {
    backgroundColor: colors.cardInner,
    borderWidth: 1,
    borderColor: colors.goldBorder,
    borderRadius: 8,
    paddingHorizontal: 13,
    paddingVertical: 6,
  },
  validText: {
    color: colors.gold,
    fontSize: 10,
    fontWeight: '600',
  },
  tapHint: {
    color: colors.textGoldMuted,
    fontSize: 11,
  },
});
