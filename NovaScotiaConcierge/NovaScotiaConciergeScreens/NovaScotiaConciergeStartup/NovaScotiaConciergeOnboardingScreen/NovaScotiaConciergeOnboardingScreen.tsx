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
import LinearGradient from 'react-native-linear-gradient';
import {OnboardingButtons} from '../../../NovaScotiaConciergeComponents/NovaScotiaConciergeOnboarding/NovaScotiaConciergeOnboardingButtons/NovaScotiaConciergeOnboardingButtons';
import {OnboardingGuestPassCard} from '../../../NovaScotiaConciergeComponents/NovaScotiaConciergeOnboarding/NovaScotiaConciergeOnboardingGuestPassCard/NovaScotiaConciergeOnboardingGuestPassCard';
import {ProgressDots} from '../../../NovaScotiaConciergeComponents/NovaScotiaConciergeOnboarding/NovaScotiaConciergeProgressDots/NovaScotiaConciergeProgressDots';
import {colors} from '../../../NovaScotiaConciergeTheme/NovaScotiaConciergeColors/NovaScotiaConciergeColors';

type Props = {onComplete: () => void};

const STEPS = [
  {
    bg: require('../../../NovaScotiaConciergeAssets/NovaScotiaConciergeOnboardbg1.png'),
    image: require('../../../NovaScotiaConciergeAssets/NovaScotiaConciergeOnboard1.png'),
    title: 'Your Resort Access',
    subtitle:
      'Keep your guest pass ready and open helpful resort tools from one elegant mobile guide.',
  },
  {
    bg: require('../../../NovaScotiaConciergeAssets/NovaScotiaConciergeOnboardbg2.png'),
    image: require('../../../NovaScotiaConciergeAssets/NovaScotiaConciergeOnboard2.png'),
    title: 'Concierge Services',
    subtitle:
      'Request resort services, plan your visit, and prepare your stay with simple booking forms.',
  },
  {
    bg: require('../../../NovaScotiaConciergeAssets/NovaScotiaConciergeOnboardbg3.png'),
    image: require('../../../NovaScotiaConciergeAssets/NovaScotiaConciergeOnboard3.png'),
    title: 'Events & Dining',
    subtitle:
      'Explore resort events, save your plans, and prepare dining orders before your day begins.',
  },
];

export function OnboardingScreen({onComplete}: Props) {
  const insets = useSafeAreaInsets();
  const [step, setStep] = useState(0);
  const current = STEPS[step];

  const handleNext = () => {
    if (step >= STEPS.length - 1) {
      onComplete();
      return;
    }
    setStep(s => s + 1);
  };

  return (
    <ImageBackground source={current.bg} style={styles.novaScotiaConciergeRoot} resizeMode="cover">
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.novaScotiaConciergeLayout}>
          {step < STEPS.length - 1 ? (
            <View style={[styles.novaScotiaConciergeTopBar, {paddingTop: insets.top + 12}]}>
              <Pressable style={styles.novaScotiaConciergeTopSkip} onPress={onComplete}>
                <Text style={styles.novaScotiaConciergeTopSkipText}>Skip</Text>
              </Pressable>
            </View>
          ) : (
            <View style={{height: insets.top}} />
          )}
          <Image
            source={current.image}
            style={{alignSelf: 'center', marginBottom: 'auto', marginTop: 180}}
          />
          <View style={[styles.novaScotiaConciergeBottom, {paddingBottom: insets.bottom + 20}]}>
            <ProgressDots total={STEPS.length} active={step} />
            <Text style={styles.novaScotiaConciergeTitle}>{current.title}</Text>
            <Text style={styles.novaScotiaConciergeSubtitle}>{current.subtitle}</Text>
            <OnboardingButtons
              onNext={handleNext}
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
  novaScotiaConciergeRoot: {
    flex: 1,
  },
  novaScotiaConciergeLayout: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  novaScotiaConciergeTopBar: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    paddingHorizontal: 28,
    alignItems: 'flex-end',
    zIndex: 1,
  },
  novaScotiaConciergeTopSkip: {
    padding: 4,
  },
  novaScotiaConciergeTopSkipText: {
    color: colors.textMuted,
    fontSize: 13,
  },
  novaScotiaConciergeHero: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingVertical: 16,
  },
  novaScotiaConciergeServiceList: {
    gap: 9,
  },
  novaScotiaConciergeServiceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 13,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 11,
  },
  novaScotiaConciergeServiceIcon: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: colors.cardInner,
    alignItems: 'center',
    justifyContent: 'center',
  },
  novaScotiaConciergeServiceIconText: {
    fontSize: 16,
  },
  novaScotiaConciergeServiceInfo: {
    flex: 1,
    gap: 1,
  },
  novaScotiaConciergeServiceTitle: {
    color: colors.cream,
    fontSize: 13,
    fontWeight: '600',
  },
  novaScotiaConciergeServiceTag: {
    color: colors.gold,
    fontSize: 10,
  },
  novaScotiaConciergeServiceChevron: {
    color: colors.gold,
    fontSize: 16,
  },
  novaScotiaConciergePreviewRow: {
    flexDirection: 'row',
    gap: 10,
    alignSelf: 'center',
    width: '100%',
    minHeight: 164,
  },
  novaScotiaConciergePreviewCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 15,
    gap: 10,
  },
  novaScotiaConciergePreviewHeader: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  novaScotiaConciergePreviewLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 2,
  },
  novaScotiaConciergeWeekDayText: {
    color: colors.textMuted,
    fontSize: 12,
  },
  novaScotiaConciergeEventDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  novaScotiaConciergeEventDotActive: {
    backgroundColor: colors.gold,
  },
  novaScotiaConciergeEventDotMuted: {
    backgroundColor: colors.border,
  },
  novaScotiaConciergeDiningLine: {
    gap: 1,
    paddingTop: 2,
  },
  novaScotiaConciergeDiningName: {
    color: colors.cream,
    fontSize: 11,
  },
  novaScotiaConciergeDiningPrice: {
    color: colors.gold,
    fontSize: 10,
  },
  novaScotiaConciergeBottom: {
    paddingHorizontal: 28,
    gap: 9,
  },
  novaScotiaConciergeTitle: {
    color: colors.cream,
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Georgia',
    lineHeight: 31,
    paddingTop: 7,
  },
  novaScotiaConciergeSubtitle: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 22,
    paddingBottom: 9,
  },
});
