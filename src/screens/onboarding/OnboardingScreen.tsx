import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {OnboardingButtons} from '../../components/OnboardingButtons';
import {ProgressDots} from '../../components/ProgressDots';
import {colors} from '../../constants/theme';
import {images} from '../../data/assets';
import {useResponsive} from '../../hooks/useResponsive';

type Props = {onComplete: () => void};

const STEPS = [
  {
    bg: images.welcomeBackdrop1,
    image: images.welcomeIllustration1,
    title: 'Your Resort Access',
    subtitle:
      'Keep your guest pass ready and open helpful resort tools from one elegant mobile guide.',
  },
  {
    bg: images.welcomeBackdrop2,
    image: images.welcomeIllustration2,
    title: 'Concierge Services',
    subtitle:
      'Request resort services, plan your visit, and prepare your stay with simple booking forms.',
  },
  {
    bg: images.welcomeBackdrop3,
    image: images.welcomeIllustration3,
    title: 'Events & Dining',
    subtitle:
      'Explore resort events, save your plans, and prepare dining orders before your day begins.',
  },
];

export function OnboardingScreen({onComplete}: Props) {
  const insets = useSafeAreaInsets();
  const responsive = useResponsive();
  const [step, setStep] = useState(0);
  const illustrationTop = responsive.isTinyHeight ? 120 : responsive.isSmallHeight ? 150 : 180;
  const current = STEPS[step];

  const handleNextStep = () => {
    if (step >= STEPS.length - 1) {
      onComplete();
      return;
    }
    setStep(prevStep => prevStep + 1);
  };

  return (
    <ImageBackground
      source={current.bg}
      style={styles.shell}
      resizeMode="cover">
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.layout}>
          {step < STEPS.length - 1 ? (
            <View
              style={[
                styles.topBar,
                {paddingTop: insets.top + 12},
              ]}>
              <Pressable
                style={styles.skipAction}
                onPress={onComplete}>
                <Text style={styles.skipLabel}>Skip</Text>
              </Pressable>
            </View>
          ) : (
            <View style={{height: insets.top}} />
          )}
          <Image
            source={current.image}
            style={{
              alignSelf: 'center',
              marginBottom: 'auto',
              marginTop: illustrationTop,
            }}
          />
          <View
            style={[
              styles.bottom,
              {paddingBottom: insets.bottom + 20},
            ]}>
            <ProgressDots total={STEPS.length} active={step} />
            <Text style={styles.heading}>{current.title}</Text>
            <Text style={styles.subheading}>
              {current.subtitle}
            </Text>
            <OnboardingButtons
              onNext={handleNextStep}
              onSkip={onComplete}
              nextLabel={step === STEPS.length - 1 ? 'Get Started' : 'Next'}
              showSkip={step < STEPS.length - 1}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
  },
  layout: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  topBar: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    paddingHorizontal: 28,
    alignItems: 'flex-end',
    zIndex: 1,
  },
  skipAction: {
    padding: 4,
  },
  skipLabel: {
    color: colors.textMuted,
    fontSize: 13,
  },
  hero: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingVertical: 16,
  },
  ServiceList: {
    gap: 9,
  },
  ServiceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 13,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 11,
  },
  infoGlyph: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: colors.panelInner,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ServiceIconText: {
    fontSize: 16,
  },
  infoBlock: {
    flex: 1,
    gap: 1,
  },
  infoHeading: {
    color: colors.cream,
    fontSize: 13,
    fontWeight: '600',
  },
  ServiceTag: {
    color: colors.gold,
    fontSize: 10,
  },
  ServiceChevron: {
    color: colors.gold,
    fontSize: 16,
  },
  PreviewRow: {
    flexDirection: 'row',
    gap: 10,
    alignSelf: 'center',
    width: '100%',
    minHeight: 164,
  },
  PreviewCard: {
    flex: 1,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 15,
    gap: 10,
  },
  PreviewHeader: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  PreviewLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 2,
  },
  WeekDayText: {
    color: colors.textMuted,
    fontSize: 12,
  },
  EventDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  EventDotActive: {
    backgroundColor: colors.gold,
  },
  EventDotMuted: {
    backgroundColor: colors.border,
  },
  DiningLine: {
    gap: 1,
    paddingTop: 2,
  },
  DiningName: {
    color: colors.cream,
    fontSize: 11,
  },
  DiningPrice: {
    color: colors.gold,
    fontSize: 10,
  },
  bottom: {
    paddingHorizontal: 28,
    gap: 9,
  },
  heading: {
    color: colors.cream,
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Georgia',
    lineHeight: 31,
    paddingTop: 7,
  },
  subheading: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 22,
    paddingBottom: 9,
  },
});
