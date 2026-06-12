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
import {OnboardingButtons} from '../../components/shared/OnboardingButtons';
import {ProgressDots} from '../../components/shared/ProgressDots';
import {colors} from '../../constants/theme';
import {images} from '../../content/assets';
import {useAdaptive} from '../../hooks/useAdaptive';

type Props = {onComplete: () => void};

const WELCOME_STEPS = [
  {
    backdrop: images.welcomeBackdrop1,
    illustration: images.welcomeIllustration1,
    title: 'Your Resort Access',
    subtitle:
      'Keep your guest pass ready and open helpful resort tools in one place.',
  },
  {
    backdrop: images.welcomeBackdrop2,
    illustration: images.welcomeIllustration2,
    title: 'Concierge Services',
    subtitle:
      'Request resort services, plan your visit, and prepare your stay with simple booking forms.',
  },
  {
    backdrop: images.welcomeBackdrop3,
    illustration: images.welcomeIllustration3,
    title: 'Events & Dining',
    subtitle:
      'Explore resort events, save your plans, and prepare dining orders before your day begins.',
  },
];

export function OnboardingScreen({onComplete}: Props) {
  const insets = useSafeAreaInsets();
  const adaptive = useAdaptive();
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const illustrationTop = adaptive.isTinyHeight
    ? 120
    : adaptive.isSmallHeight
    ? 150
    : 180;
  const activeStep = WELCOME_STEPS[activeStepIndex];

  const handleNextStep = () => {
    if (activeStepIndex >= WELCOME_STEPS.length - 1) {
      onComplete();
      return;
    }
    setActiveStepIndex(previousStep => previousStep + 1);
  };

  return (
    <ImageBackground
      source={activeStep.backdrop}
      style={styles.onboardingRoot}
      resizeMode="cover">
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.onboardingLayout}>
          {activeStepIndex < WELCOME_STEPS.length - 1 ? (
            <View
              style={[styles.onboardingSkipBar, {paddingTop: insets.top + 12}]}>
              <Pressable style={styles.onboardingSkipButton} onPress={onComplete}>
                <Text style={styles.onboardingSkipText}>Skip</Text>
              </Pressable>
            </View>
          ) : (
            <View style={{height: insets.top}} />
          )}
          <Image
            source={activeStep.illustration}
            style={{
              alignSelf: 'center',
              marginBottom: 'auto',
              marginTop: illustrationTop,
            }}
          />
          <View
            style={[styles.onboardingFooter, {paddingBottom: insets.bottom + 20}]}>
            <ProgressDots total={WELCOME_STEPS.length} active={activeStepIndex} />
            <Text style={styles.onboardingTitle}>{activeStep.title}</Text>
            <Text style={styles.onboardingSubtitle}>{activeStep.subtitle}</Text>
            <OnboardingButtons
              onNext={handleNextStep}
              onSkip={onComplete}
              nextLabel={
                activeStepIndex === WELCOME_STEPS.length - 1 ? 'Get Started' : 'Next'
              }
              showSkip={activeStepIndex < WELCOME_STEPS.length - 1}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  onboardingRoot: {
    flex: 1,
  },
  onboardingLayout: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  onboardingSkipBar: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    paddingHorizontal: 28,
    alignItems: 'flex-end',
    zIndex: 1,
  },
  onboardingSkipButton: {
    padding: 4,
  },
  onboardingSkipText: {
    color: colors.textMuted,
    fontSize: 13,
  },
  onboardingFooter: {
    paddingHorizontal: 28,
    gap: 9,
  },
  onboardingTitle: {
    color: colors.cream,
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Georgia',
    lineHeight: 31,
    paddingTop: 7,
  },
  onboardingSubtitle: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 22,
    paddingBottom: 9,
  },
});
