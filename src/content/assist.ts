import type {FaqItem, ResortInfoSection} from '../types';

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'guest-pass',
    question: 'How do I use the guest pass?',
    answer:
      'Open the Guest Pass screen, increase your brightness, and present the code when guest access is requested.',
  },
  {
    id: 'book-services',
    question: 'Can I book resort services inside the app?',
    answer:
      'Yes. Open Book Services, choose a service, select date and time, and send your booking request.',
  },
  {
    id: 'dining-order',
    question: 'Can I prepare a dining order from the menu?',
    answer:
      'Yes. Open Dining Menu, choose your items, review your order, and send the dining request.',
  },
  {
    id: 'save-event',
    question: 'How do I save an event?',
    answer:
      'Open Resort Events, choose an event, and tap Save Event on the detail screen.',
  },
  {
    id: 'booking-requests',
    question: 'Where can I see my booking requests?',
    answer:
      'Open Assist and choose My Bookings to view your prepared service requests.',
  },
];

export const GUEST_TIPS: string[] = [
  'Keep your guest pass ready.',
  'Check event times before arrival.',
  'Book resort services in advance.',
  'Review the dining menu before placing an order.',
  'Add notes for special requests.',
  'Ask staff for resort-specific assistance.',
  'Keep your phone charged during your visit.',
  'Save events you want to attend.',
  'Use the Assist tab to review your requests.',
];

export const RESORT_INFO_INTRO =
  'Nova Scotia Concierge Casino helps guests organize access, services, events, dining requests, and useful resort information during their visit.';

export const RESORT_INFO_SECTIONS: ResortInfoSection[] = [
  {
    id: 'guest-access',
    icon: '🪪',
    title: 'Guest Access',
    description: 'Use your pass code when access or verification is requested.',
  },
  {
    id: 'services',
    icon: '🛎',
    title: 'Services',
    description: 'Prepare service requests before or during your stay.',
  },
  {
    id: 'events',
    icon: '📅',
    title: 'Events',
    description:
      'Browse upcoming resort events and save the ones you want to visit.',
  },
  {
    id: 'dining',
    icon: '🍽',
    title: 'Dining',
    description: 'Choose dining items and prepare your resort order.',
  },
];

export const APP_ABOUT_TEXT =
  'Nova Scotia Concierge Casino supports pass access, service booking, resort events, dining menu orders, guest tips, and visit organization for Casino Nova Scotia guests.';
