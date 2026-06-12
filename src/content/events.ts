export type ResortEvent = {
  id: string;
  title: string;
  tag: string;
  time: string;
  date: string;
  dayOfWeek: string;
  dayNumber: number;
  location: string;
  type: string;
  guestInfo: string;
  dressMood: string;
  about: string;
  usefulNote: string;
};

export const WEEK_DAYS = [
  {label: 'Mon', dayNumber: 1},
  {label: 'Tue', dayNumber: 2},
  {label: 'Wed', dayNumber: 3},
  {label: 'Thu', dayNumber: 4},
  {label: 'Fri', dayNumber: 5},
  {label: 'Sat', dayNumber: 6},
  {label: 'Sun', dayNumber: 7},
] as const;

export const EVENTS: ResortEvent[] = [
  {
    id: 'bruce-guthro-live-night',
    title: 'The Bruce Guthro Theatre Live Night',
    tag: 'Music Evening',
    time: '8:00 PM',
    date: 'Friday, June 5',
    dayOfWeek: 'Friday',
    dayNumber: 5,
    location: 'The Bruce Guthro Theatre, Halifax',
    type: 'Live Entertainment',
    guestInfo: 'Ticketed seating',
    dressMood: 'Smart casual',
    about:
      'An evening of live stage performance inside one of Casino Nova Scotia Halifax’s main entertainment spaces. The atmosphere is built for guests who enjoy music, theatre-style seating, warm lighting, and a polished night out.',
    usefulNote:
      'Arrive early to find your seat and enjoy the venue atmosphere before the show begins.',
  },
  {
    id: 'compass-room-harbour-social',
    title: 'Compass Room Harbour Social',
    tag: 'Social Evening',
    time: '7:00 PM',
    date: 'Saturday, June 6',
    dayOfWeek: 'Saturday',
    dayNumber: 6,
    location: 'The Compass Room, Halifax',
    type: 'Guest Social',
    guestInfo: 'Open seating',
    dressMood: 'Smart casual',
    about:
      'A relaxed evening gathering inspired by the panoramic Halifax harbour setting of The Compass Room. Guests can enjoy conversation, soft music, coastal views, and a calm resort-style atmosphere.',
    usefulNote:
      'Best suited for guests who want a quieter and more scenic evening plan.',
  },
  {
    id: '3sixty-lounge-music',
    title: '3Sixty Lounge Music Session',
    tag: 'Lounge Music',
    time: '7:30 PM',
    date: 'Friday, June 5',
    dayOfWeek: 'Friday',
    dayNumber: 5,
    location: '3Sixty Restaurant & Lounge, Halifax',
    type: 'Music Evening',
    guestInfo: 'Lounge seating',
    dressMood: 'Casual elegant',
    about:
      'A warm lounge-style music session with drinks, dining atmosphere, and comfortable seating. This event is ideal for guests who want a simple evening plan without a formal theatre schedule.',
    usefulNote:
      'Check dining availability before arrival if you want to combine the event with a meal.',
  },
  {
    id: '3sixty-buffet-weekend',
    title: '3Sixty Buffet Weekend Preview',
    tag: 'Dining Event',
    time: '6:00 PM',
    date: 'Saturday, June 6',
    dayOfWeek: 'Saturday',
    dayNumber: 6,
    location: '3Sixty Buffet, Halifax',
    type: 'Dining Experience',
    guestInfo: 'Buffet access',
    dressMood: 'Casual',
    about:
      'A weekend dining experience focused on buffet specials, relaxed seating, and a lively resort dining mood. Guests can explore a variety of flavours before continuing their evening plans.',
    usefulNote:
      'Weekend buffet times may be popular, so arrive with extra time.',
  },
  {
    id: 'celtic-junction-live',
    title: 'Celtic Junction Live Music Evening',
    tag: 'Live Music',
    time: '8:15 PM',
    date: 'Saturday, June 6',
    dayOfWeek: 'Saturday',
    dayNumber: 6,
    location: 'Celtic Junction, Sydney',
    type: 'Music Evening',
    guestInfo: 'Open seating',
    dressMood: 'Casual',
    about:
      'A Sydney-location evening with inviting restaurant ambience, live music energy, and a comfortable social setting. It is a good option for guests looking for music, food, and relaxed conversation.',
    usefulNote: 'Good for small groups who want a casual evening plan.',
  },
  {
    id: 'may-garden-dining',
    title: 'May Garden Dining Night',
    tag: 'Dining',
    time: '6:30 PM',
    date: 'Thursday, June 4',
    dayOfWeek: 'Thursday',
    dayNumber: 4,
    location: 'May Garden Restaurant, Halifax',
    type: 'Restaurant Evening',
    guestInfo: 'Table seating',
    dressMood: 'Casual elegant',
    about:
      'A restaurant-focused evening built around flavour, service, and a calm dining atmosphere. Guests can enjoy a comfortable meal before exploring other resort areas or attending an event.',
    usefulNote:
      'Reserve a table in advance if you plan to dine during peak evening hours.',
  },
  {
    id: 'sydney-golf-simulator',
    title: 'Sydney Golf Simulator Hour',
    tag: 'Activity',
    time: '4:00 PM',
    date: 'Sunday, June 7',
    dayOfWeek: 'Sunday',
    dayNumber: 7,
    location: 'Casino Nova Scotia Sydney',
    type: 'Golf Experience',
    guestInfo: 'Time slot required',
    dressMood: 'Comfortable casual',
    about:
      'A relaxed golf simulator session for guests who want to try a skill-based indoor activity. Suitable for beginners and experienced guests, this event brings a light sport element into the resort visit.',
    usefulNote:
      'Choose comfortable clothing and arrive a few minutes before your selected time slot.',
  },
  {
    id: 'private-event-showcase',
    title: 'Private Event Showcase',
    tag: 'Venue Preview',
    time: '5:30 PM',
    date: 'Sunday, June 7',
    dayOfWeek: 'Sunday',
    dayNumber: 7,
    location: 'The Bruce Guthro Theatre, Halifax',
    type: 'Venue Rental Preview',
    guestInfo: 'Guided preview',
    dressMood: 'Smart casual',
    about:
      'A showcase of how Casino Nova Scotia Halifax can support larger private gatherings, including gala-style layouts, stage setups, lighting, sound, catering, and elegant event arrangements.',
    usefulNote:
      'Useful for guests interested in future celebrations, corporate events, or private venue planning.',
  },
  {
    id: 'compass-celebration-setup',
    title: 'Compass Room Celebration Setup',
    tag: 'Decoration Preview',
    time: '3:00 PM',
    date: 'Saturday, June 6',
    dayOfWeek: 'Saturday',
    dayNumber: 6,
    location: 'The Compass Room, Halifax',
    type: 'Private Event Inspiration',
    guestInfo: 'Guided viewing',
    dressMood: 'Smart casual',
    about:
      'A visual preview of table arrangements, lighting ideas, harbour-view event layouts, and celebration details inside The Compass Room. The event is designed for guests exploring private party or reception ideas.',
    usefulNote:
      'Bring questions if you are planning a private event or group celebration.',
  },
  {
    id: 'halifax-welcome-walk',
    title: 'Halifax Welcome Walk',
    tag: 'Guided Experience',
    time: '2:30 PM',
    date: 'Friday, June 5',
    dayOfWeek: 'Friday',
    dayNumber: 5,
    location: 'Casino Nova Scotia Halifax',
    type: 'Guest Orientation',
    guestInfo: 'Open group',
    dressMood: 'Casual',
    about:
      'A short orientation-style walk through key guest areas at the Halifax location. Guests can become familiar with dining spaces, entertainment areas, service points, and useful visit information.',
    usefulNote: 'Recommended for first-time visitors.',
  },
  {
    id: 'sydney-welcome-session',
    title: 'Sydney Guest Welcome Session',
    tag: 'Guest Info',
    time: '3:15 PM',
    date: 'Saturday, June 6',
    dayOfWeek: 'Saturday',
    dayNumber: 6,
    location: 'Casino Nova Scotia Sydney',
    type: 'Guest Orientation',
    guestInfo: 'Open group',
    dressMood: 'Casual',
    about:
      'A simple guest welcome session for the Sydney location, focused on helpful information, dining options, activity details, and visit support. It helps guests plan their time more comfortably.',
    usefulNote:
      'Good for guests who want a quick overview before starting their visit.',
  },
  {
    id: 'loyalty-club-info',
    title: 'Guest Loyalty Club Info Moment',
    tag: 'Guest Info',
    time: '5:00 PM',
    date: 'Friday, June 5',
    dayOfWeek: 'Friday',
    dayNumber: 5,
    location: 'Guest Services Counter',
    type: 'Information Session',
    guestInfo: 'Walk-up friendly',
    dressMood: 'Casual',
    about:
      'A short information moment where guests can learn about the Guest Loyalty Club, available benefits, special offers, and how guest loyalty features work across the Nova Scotia destinations.',
    usefulNote: 'Bring a valid ID if you plan to ask about membership details.',
  },
  {
    id: 'coastal-dinner-drinks',
    title: 'Coastal Dinner & Drinks Evening',
    tag: 'Dining Evening',
    time: '7:45 PM',
    date: 'Saturday, June 6',
    dayOfWeek: 'Saturday',
    dayNumber: 6,
    location: '3Sixty Restaurant & Lounge, Halifax',
    type: 'Dining Social',
    guestInfo: 'Table seating',
    dressMood: 'Casual elegant',
    about:
      'A relaxed evening built around appetizers, entrées, desserts, drinks, and lounge atmosphere. Guests can enjoy a comfortable dinner plan before moving to live entertainment or a saved event.',
    usefulNote:
      'A good choice for guests planning dinner before a theatre show.',
  },
  {
    id: 'theatre-preshow-gathering',
    title: 'Theatre Pre-Show Gathering',
    tag: 'Pre-Show',
    time: '6:30 PM',
    date: 'Friday, June 5',
    dayOfWeek: 'Friday',
    dayNumber: 5,
    location: 'The Bruce Guthro Theatre Lobby, Halifax',
    type: 'Guest Gathering',
    guestInfo: 'Ticket holders',
    dressMood: 'Smart casual',
    about:
      'A short pre-show gathering for guests attending an evening performance. The setting gives visitors time to meet, check seating details, enjoy the theatre mood, and settle in before the main show.',
    usefulNote:
      'Arrive early if you want a calmer entry before the performance begins.',
  },
  {
    id: 'harbour-view-party-preview',
    title: 'Harbour View Private Party Preview',
    tag: 'Private Event',
    time: '4:30 PM',
    date: 'Sunday, June 7',
    dayOfWeek: 'Sunday',
    dayNumber: 7,
    location: 'The Compass Room, Halifax',
    type: 'Venue Preview',
    guestInfo: 'Guided preview',
    dressMood: 'Smart casual',
    about:
      'A private event inspiration session inside a harbour-view venue space. Guests can explore how the room may work for receptions, corporate gatherings, celebrations, photo shoots, or elegant social events.',
    usefulNote:
      'Best for guests interested in group bookings or future event planning.',
  },
];

export function getDaysWithEvents() {
  return WEEK_DAYS.filter(day =>
    EVENTS.some(event => event.dayNumber === day.dayNumber),
  );
}

export function getEventsForDay(dayNumber: number) {
  return EVENTS.filter(event => event.dayNumber === dayNumber).sort((a, b) =>
    a.time.localeCompare(b.time),
  );
}

export function getEventById(id: string) {
  return EVENTS.find(event => event.id === id);
}
