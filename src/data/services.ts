export type Service = {
  id: string;
  icon: string;
  title: string;
  tag: string;
  time: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    id: 'room-service',
    icon: '🛏',
    title: 'Room Service Request',
    tag: 'Guest Service',
    time: '7:00 AM – 11:00 PM',
    description:
      'Request in-room assistance, extra amenities, fresh towels, or comfort items during your stay.',
  },
  {
    id: 'restaurant-booking',
    icon: '🍽',
    title: 'Restaurant Table Booking',
    tag: 'Dining',
    time: '6:00 PM – 11:30 PM',
    description:
      'Reserve a table for dinner, drinks, or a relaxed evening meal inside the resort.',
  },
  {
    id: 'concierge',
    icon: '🛎',
    title: 'Concierge Assistance',
    tag: 'Concierge',
    time: '8:00 AM – 12:00 AM',
    description:
      'Request help with directions, local recommendations, transportation, or general guest support.',
  },
  {
    id: 'lounge-seat',
    icon: '🛋',
    title: 'Private Lounge Seat',
    tag: 'Lounge',
    time: '5:00 PM – 1:00 AM',
    description:
      'Book a quieter lounge spot for a calm and premium guest experience.',
  },
  {
    id: 'event-room',
    icon: '🎪',
    title: 'Event Room Request',
    tag: 'Events',
    time: 'By request',
    description:
      'Send a request for a private event, celebration, or small group gathering.',
  },
  {
    id: 'celebration-setup',
    icon: '🎊',
    title: 'Celebration Setup',
    tag: 'Decoration',
    time: 'By request',
    description:
      'Request table decor, flowers, lights, or themed details for a birthday, anniversary, or special occasion.',
  },
  {
    id: 'transport',
    icon: '🚕',
    title: 'Private Transport Request',
    tag: 'Transport',
    time: '6:00 AM – 12:00 AM',
    description:
      'Arrange pickup, drop-off, local transfer, or private ride assistance for your visit.',
  },
  {
    id: 'luggage',
    icon: '🧳',
    title: 'Luggage Assistance',
    tag: 'Guest Support',
    time: '7:00 AM – 11:00 PM',
    description:
      'Request help with luggage pickup, temporary storage, delivery to your room, or checkout handling.',
  },
  {
    id: 'room-care',
    icon: '🧼',
    title: 'Extra Room Care',
    tag: 'Housekeeping',
    time: '8:00 AM – 10:00 PM',
    description:
      'Ask for fresh towels, additional amenities, room refresh, bedding change, or light housekeeping support.',
  },
  {
    id: 'breakfast',
    icon: '☕',
    title: 'Breakfast Service Booking',
    tag: 'Dining',
    time: '6:30 AM – 11:00 AM',
    description:
      'Reserve a morning breakfast slot or prepare a simple breakfast request before your day begins.',
  },
  {
    id: 'wellness',
    icon: '🌿',
    title: 'Wellness & Relaxation Slot',
    tag: 'Wellness',
    time: '10:00 AM – 8:00 PM',
    description:
      'Request a calm wellness moment, relaxation room access, or a personal reset time during your stay.',
  },
  {
    id: 'event-assistance',
    icon: '🎟',
    title: 'Event Assistance Request',
    tag: 'Events',
    time: '10:00 AM – 10:00 PM',
    description:
      'Ask for help with event details, seating information, saved events, arrival time, or guest entry instructions.',
  },
  {
    id: 'photo-spot',
    icon: '📸',
    title: 'Photo Spot Guidance',
    tag: 'Resort Guide',
    time: '9:00 AM – 9:00 PM',
    description:
      'Get suggestions for scenic resort corners, lounge areas, or elegant places for memorable guest photos.',
  },
  {
    id: 'gift-amenity',
    icon: '🛍',
    title: 'Gift & Amenity Request',
    tag: 'Amenities',
    time: '9:00 AM – 9:00 PM',
    description:
      'Request small guest amenities, welcome items, gift details, or special add-ons for a visit or celebration.',
  },
  {
    id: 'support-callback',
    icon: '💬',
    title: 'Guest Support Callback',
    tag: 'Support',
    time: '8:00 AM – 11:00 PM',
    description:
      'Send a request for a resort assistant to contact you about questions, visit details, or service support.',
  },
];

export function getServiceById(id: string): Service | undefined {
  return SERVICES.find(service => service.id === id);
}
