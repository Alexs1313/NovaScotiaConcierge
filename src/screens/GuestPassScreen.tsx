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
import {GuestPassCard} from '../components/GuestPassCard';
import {useGuestPassCode} from '../hooks/useGuestPassCode';
import {FullScreenPassScreen} from './FullScreenPassScreen';
import {colors} from '../theme/colors';
import {Background} from '../components/Background';

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
    <View style={styles.root}>
      <Background
        source={require('../assets/background.png')}
        scrollable={false}>
        <ScrollView
          contentContainerStyle={[
            styles.scroll,
            {paddingBottom: insets.bottom + 16},
          ]}
          showsVerticalScrollIndicator={false}>
          <View style={[styles.header, {paddingTop: insets.top + 16}]}>
            <Text style={styles.title}>Guest Pass</Text>
            <Text style={styles.subtitle}>
              Your digital resort access pass for guest services and concierge
              assistance.
            </Text>
          </View>
          <View style={styles.body}>
            <GuestPassCard code={code} onExpand={() => setFullscreen(true)} />
            <Pressable
              style={styles.showButton}
              onPress={() => setFullscreen(true)}>
              <Text style={styles.showButtonText}>Show Full Screen Pass</Text>
            </Pressable>
            <View style={styles.notesCard}>
              <Text style={styles.notesTitle}>Pass Notes</Text>
              {PASS_NOTES.map(note => (
                <View key={note} style={styles.noteRow}>
                  <View style={styles.bullet} />
                  <Text style={styles.noteText}>{note}</Text>
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
  root: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  background: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.headerOverlay,
  },
  scroll: {
    flexGrow: 1,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingHorizontal: 20,
    paddingBottom: 15,
    gap: 5,
  },
  title: {
    color: colors.cream,
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Georgia',
    letterSpacing: -0.3,
    lineHeight: 29,
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 18,
    gap: 14,
  },
  showButton: {
    backgroundColor: colors.gold,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  showButtonText: {
    color: colors.buttonText,
    fontSize: 15,
    fontWeight: '700',
  },
  notesCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    paddingHorizontal: 19,
    paddingTop: 17,
    paddingBottom: 27,
    gap: 10,
  },
  notesTitle: {
    color: colors.cream,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  noteRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
    paddingTop: 4,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.gold,
    marginTop: 6,
  },
  noteText: {
    flex: 1,
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 20,
  },
});
