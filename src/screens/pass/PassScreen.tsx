import React, {useState} from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {GuestPassCard} from '../../components/GuestPassCard';
import {useGuestPassCode} from '../../hooks/useGuestPassCode';
import {useResponsive} from '../../hooks/useResponsive';
import {FullPassScreen} from './FullPassScreen';
import {colors} from '../../constants/theme';
import {Background} from '../../components/Background';

const NOTE_LINES = [
  'Keep the screen brightness high.',
  'Use this pass only for resort guest access.',
  'Ask staff if your code cannot be verified.',
  'Do not share your pass code with other guests.',
];

export function PassScreen() {
  const insets = useSafeAreaInsets();
  const responsive = useResponsive();
  const {code} = useGuestPassCode();
  const [expandedView, setExpandedView] = useState(false);

  return (
    <View style={styles.shell}>
      <Background scrollable={false}>
        <ScrollView
          contentContainerStyle={[
            styles.scrollWrap,
            {paddingBottom: insets.bottom + 16},
          ]}
          showsVerticalScrollIndicator={false}>
          <View
            style={[
              styles.topBlock,
              {paddingTop: insets.top + 16},
              {paddingHorizontal: responsive.horizontalPadding + 4},
            ]}>
            <Text
              style={[
                styles.heading,
                responsive.isNarrow && styles.headingCompact,
                responsive.isSmallHeight && styles.headingTight,
              ]}>
              Guest Pass
            </Text>
            <Text
              style={[
                styles.subheading,
                responsive.isSmallHeight && styles.subheadingTight,
              ]}>
              Your digital resort access pass for guest services and concierge
              assistance.
            </Text>
          </View>
          <View
            style={[
              styles.main,
              {paddingHorizontal: responsive.horizontalPadding + 4},
            ]}>
            <GuestPassCard code={code} onExpand={() => setExpandedView(true)} />
            <Pressable
              style={styles.actionPrimary}
              onPress={() => setExpandedView(true)}>
              <Text style={styles.actionPrimaryLabel}>Show Full Screen Pass</Text>
            </Pressable>
            <View style={styles.panelNotes}>
              <Text style={styles.panelNotesHeading}>Pass Notes</Text>
              {NOTE_LINES.map(note => (
                <View key={note} style={styles.rowNote}>
                  <View style={styles.dot} />
                  <Text style={styles.noteCopy}>{note}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </Background>
      <Modal visible={expandedView} animationType="slide">
        <FullPassScreen
          code={code}
          onClose={() => setExpandedView(false)}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  Background: {
    flex: 1,
  },
  Overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.topOverlay,
  },
  scrollWrap: {
    flexGrow: 1,
  },
  topBlock: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 15,
    gap: 5,
  },
  heading: {
    color: colors.cream,
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Georgia',
    letterSpacing: -0.3,
    lineHeight: 29,
  },
  headingCompact: {
    fontSize: 24,
    lineHeight: 27,
  },
  headingTight: {
    fontSize: 22,
    lineHeight: 25,
  },
  subheading: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
  },
  subheadingTight: {
    fontSize: 12,
    lineHeight: 17,
  },
  main: {
    paddingTop: 18,
    gap: 14,
  },
  actionPrimary: {
    backgroundColor: colors.gold,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  actionPrimaryLabel: {
    color: colors.actionText,
    fontSize: 15,
    fontWeight: '700',
  },
  panelNotes: {
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    paddingHorizontal: 19,
    paddingTop: 17,
    paddingBottom: 27,
    gap: 10,
  },
  panelNotesHeading: {
    color: colors.cream,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  rowNote: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
    paddingTop: 4,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.gold,
    marginTop: 6,
  },
  noteCopy: {
    flex: 1,
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 20,
  },
});
