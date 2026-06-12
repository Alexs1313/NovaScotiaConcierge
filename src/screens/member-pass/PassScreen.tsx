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
import {GuestPassCard} from '../../components/member-pass/GuestPassCard';
import {useGuestPassCode} from '../../hooks/useGuestPassCode';
import {useAdaptive} from '../../hooks/useAdaptive';
import {FullPassScreen} from './FullPassScreen';
import {colors} from '../../constants/theme';
import {Background} from '../../components/shared/Background';

const NOTE_LINES = [
  'Keep the screen brightness high.',
  'Use this pass only for resort guest access.',
  'Ask staff if your code cannot be verified.',
  'Do not share your pass code with other guests.',
];

export function PassScreen() {
  const insets = useSafeAreaInsets();
  const adaptive = useAdaptive();
  const {code} = useGuestPassCode();
  const [expandedView, setExpandedView] = useState(false);

  return (
    <View style={styles.passRoot}>
      <Background scrollable={false}>
        <ScrollView
          contentContainerStyle={[
            styles.passScrollContent,
            {paddingBottom: insets.bottom + 16},
          ]}
          showsVerticalScrollIndicator={false}>
          <View
            style={[
              styles.passHeader,
              {paddingTop: insets.top + 16},
              {paddingHorizontal: adaptive.horizontalPadding + 4},
            ]}>
            <Text
              style={[
                styles.passTitle,
                adaptive.isNarrow && styles.passTitleCompact,
                adaptive.isSmallHeight && styles.passTitleTight,
              ]}>
              Guest Pass
            </Text>
            <Text
              style={[
                styles.passSubtitle,
                adaptive.isSmallHeight && styles.passSubtitleTight,
              ]}>
              Your digital resort access pass for guest services and concierge
              assistance.
            </Text>
          </View>
          <View
            style={[
              styles.passBody,
              {paddingHorizontal: adaptive.horizontalPadding + 4},
            ]}>
            <GuestPassCard code={code} onExpand={() => setExpandedView(true)} />
            <Pressable
              style={styles.passExpandButton}
              onPress={() => setExpandedView(true)}>
              <Text style={styles.passExpandButtonText}>
                Show Full Screen Pass
              </Text>
            </Pressable>
            <View style={styles.passNotesCard}>
              <Text style={styles.passNotesTitle}>Pass Notes</Text>
              {NOTE_LINES.map(note => (
                <View key={note} style={styles.passNoteRow}>
                  <View style={styles.passBullet} />
                  <Text style={styles.passNoteText}>{note}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </Background>
      <Modal visible={expandedView} animationType="slide">
        <FullPassScreen code={code} onClose={() => setExpandedView(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  passRoot: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  passScrollContent: {
    flexGrow: 1,
  },
  passHeader: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 15,
    gap: 5,
  },
  passTitle: {
    color: colors.cream,
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Georgia',
    letterSpacing: -0.3,
    lineHeight: 29,
  },
  passTitleCompact: {
    fontSize: 24,
    lineHeight: 27,
  },
  passTitleTight: {
    fontSize: 22,
    lineHeight: 25,
  },
  passSubtitle: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
  },
  passSubtitleTight: {
    fontSize: 12,
    lineHeight: 17,
  },
  passBody: {
    paddingTop: 18,
    gap: 14,
  },
  passExpandButton: {
    backgroundColor: colors.gold,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  passExpandButtonText: {
    color: colors.actionText,
    fontSize: 15,
    fontWeight: '700',
  },
  passNotesCard: {
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    paddingHorizontal: 19,
    paddingTop: 17,
    paddingBottom: 27,
    gap: 10,
  },
  passNotesTitle: {
    color: colors.cream,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  passNoteRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
    paddingTop: 4,
  },
  passBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.gold,
    marginTop: 6,
  },
  passNoteText: {
    flex: 1,
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 20,
  },
});
