import React, {useState} from 'react';
import {
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {GuestPassCard} from '../NovaScotiaConciergeComponents/NovaScotiaConciergeGuestPassCard';
import {useGuestPassCode} from '../NovaScotiaConciergeUseGuestPassCode';
import {FullScreenPassScreen} from './NovaScotiaConciergeFullScreenPassScreen';
import {colors} from '../../../../NovaScotiaConciergeCore/NovaScotiaConciergeTheme/NovaScotiaConciergeColors';
import {Background} from '../../../../NovaScotiaConciergeCore/NovaScotiaConciergeUi/NovaScotiaConciergeBackground';

const PASS_NOTES = [
  'Keep the screen brightness high.',
  'Use this pass only for resort guest access.',
  'Ask staff if your code cannot be verified.',
  'Do not share your pass code with other guests.',
];

export function GuestPassScreen() {
  const insets = useSafeAreaInsets();
  const {code} = useGuestPassCode();
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <View style={styles.novaScotiaConciergeRoot}>
      <Background
        source={require('../../../../NovaScotiaConciergeAssets/NovaScotiaConciergeSceneBackdrop.png')}
        scrollable={false}>
        <ScrollView
          contentContainerStyle={[
            styles.novaScotiaConciergeScroll,
            {paddingBottom: insets.bottom + 16},
          ]}
          showsVerticalScrollIndicator={false}>
          <View style={[styles.novaScotiaConciergeHeader, {paddingTop: insets.top + 16}]}>
            <Text style={styles.novaScotiaConciergeTitle}>Guest Pass</Text>
            <Text style={styles.novaScotiaConciergeSubtitle}>
              Your digital resort access pass for guest services and concierge
              assistance.
            </Text>
          </View>
          <View style={styles.novaScotiaConciergeBody}>
            <GuestPassCard code={code} onExpand={() => setFullscreen(true)} />
            <Pressable
              style={styles.novaScotiaConciergeShowButton}
              onPress={() => setFullscreen(true)}>
              <Text style={styles.novaScotiaConciergeShowButtonText}>Show Full Screen Pass</Text>
            </Pressable>
            <View style={styles.novaScotiaConciergeNotesCard}>
              <Text style={styles.novaScotiaConciergeNotesTitle}>Pass Notes</Text>
              {PASS_NOTES.map(note => (
                <View key={note} style={styles.novaScotiaConciergeNoteRow}>
                  <View style={styles.novaScotiaConciergeBullet} />
                  <Text style={styles.novaScotiaConciergeNoteText}>{note}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </Background>
      <Modal visible={fullscreen} animationType="slide">
        <FullScreenPassScreen
          code={code}
          onClose={() => setFullscreen(false)}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeRoot: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  novaScotiaConciergeBackground: {
    flex: 1,
  },
  novaScotiaConciergeOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.headerOverlay,
  },
  novaScotiaConciergeScroll: {
    flexGrow: 1,
  },
  novaScotiaConciergeHeader: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingHorizontal: 20,
    paddingBottom: 15,
    gap: 5,
  },
  novaScotiaConciergeTitle: {
    color: colors.cream,
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Georgia',
    letterSpacing: -0.3,
    lineHeight: 29,
  },
  novaScotiaConciergeSubtitle: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
  },
  novaScotiaConciergeBody: {
    paddingHorizontal: 20,
    paddingTop: 18,
    gap: 14,
  },
  novaScotiaConciergeShowButton: {
    backgroundColor: colors.gold,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  novaScotiaConciergeShowButtonText: {
    color: colors.buttonText,
    fontSize: 15,
    fontWeight: '700',
  },
  novaScotiaConciergeNotesCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    paddingHorizontal: 19,
    paddingTop: 17,
    paddingBottom: 27,
    gap: 10,
  },
  novaScotiaConciergeNotesTitle: {
    color: colors.cream,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  novaScotiaConciergeNoteRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
    paddingTop: 4,
  },
  novaScotiaConciergeBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.gold,
    marginTop: 6,
  },
  novaScotiaConciergeNoteText: {
    flex: 1,
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 20,
  },
});
