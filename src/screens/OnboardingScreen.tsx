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
import {OnboardingButtons} from '../components/OnboardingButtons';
import {OnboardingGuestPassCard} from '../components/OnboardingGuestPassCard';
import {ProgressDots} from '../components/ProgressDots';
import {colors} from '../theme/colors';

type Props = {onComplete: () => void};

const SERVICE_PREVIEW = [
  {icon: '🛏', title: 'Room Service Request', tag: 'Guest Service'},
  {icon: '🛎', title: 'Concierge Assistance', tag: 'Concierge'},
  {icon: '🍽', title: 'Restaurant Table Booking', tag: 'Dining'},
];

const WEEK_PREVIEW = [
  {day: 'Fri 5', active: true},
  {day: 'Sat 6', active: true},
  {day: 'Sun 7', active: false},
];

const DINING_PREVIEW = [
  {name: 'Classic Breakfast', price: '$18'},
  {name: 'Golden Pancakes', price: '$14'},
  {name: 'Fruit Bowl', price: '$11'},
];

const STEPS = [
  {
    bg: require('../assets/onboardbg1.png'),
    image: require('../assets/onboard1.png'),
    title: 'Your Resort Access',
    subtitle:
      'Keep your guest pass ready and open helpful resort tools from one elegant mobile guide.',
  },
  {
    bg: require('../assets/onboardbg2.png'),
    image: require('../assets/onboard2.png'),
    title: 'Concierge Services',
    subtitle:
      'Request resort services, plan your visit, and prepare your stay with simple booking forms.',
  },
  {
    bg: require('../assets/onboardbg3.png'),
    image: require('../assets/onboard3.png'),
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
    <ImageBackground source={current.bg} style={styles.root} resizeMode="cover">
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.layout}>
          {step < STEPS.length - 1 ? (
            <View style={[styles.topBar, {paddingTop: insets.top + 12}]}>
              <Pressable style={styles.topSkip} onPress={onComplete}>
                <Text style={styles.topSkipText}>Skip</Text>
              </Pressable>
            </View>
          ) : (
            <View style={{height: insets.top}} />
          )}
          <Image
            source={current.image}
            style={{alignSelf: 'center', marginBottom: 'auto', marginTop: 180}}
          />
          <View style={[styles.bottom, {paddingBottom: insets.bottom + 20}]}>
            <ProgressDots total={STEPS.length} active={step} />
            <Text style={styles.title}>{current.title}</Text>
            <Text style={styles.subtitle}>{current.subtitle}</Text>
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
  root: {
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
  topSkip: {
    padding: 4,
  },
  topSkipText: {
    color: colors.textMuted,
    fontSize: 13,
  },
  hero: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingVertical: 16,
  },
  serviceList: {
    gap: 9,
  },
  serviceRow: {
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
  serviceIcon: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: colors.cardInner,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceIconText: {
    fontSize: 16,
  },
  serviceInfo: {
    flex: 1,
    gap: 1,
  },
  serviceTitle: {
    color: colors.cream,
    fontSize: 13,
    fontWeight: '600',
  },
  serviceTag: {
    color: colors.gold,
    fontSize: 10,
  },
  serviceChevron: {
    color: colors.gold,
    fontSize: 16,
  },
  previewRow: {
    flexDirection: 'row',
    gap: 10,
    alignSelf: 'center',
    width: '100%',
    minHeight: 164,
  },
  previewCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 15,
    gap: 10,
  },
  previewHeader: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  previewLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 2,
  },
  weekDayText: {
    color: colors.textMuted,
    fontSize: 12,
  },
  eventDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  eventDotActive: {
    backgroundColor: colors.gold,
  },
  eventDotMuted: {
    backgroundColor: colors.border,
  },
  diningLine: {
    gap: 1,
    paddingTop: 2,
  },
  diningName: {
    color: colors.cream,
    fontSize: 11,
  },
  diningPrice: {
    color: colors.gold,
    fontSize: 10,
  },
  bottom: {
    paddingHorizontal: 28,
    gap: 9,
  },
  title: {
    color: colors.cream,
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Georgia',
    lineHeight: 31,
    paddingTop: 7,
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 22,
    paddingBottom: 9,
  },
});
