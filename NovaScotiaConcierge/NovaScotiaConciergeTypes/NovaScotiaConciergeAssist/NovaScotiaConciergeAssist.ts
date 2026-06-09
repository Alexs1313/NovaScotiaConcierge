export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type ResortInfoSection = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export type BookingRequest = {
  id: string;
  serviceId: string;
  serviceTitle: string;
  date: string;
  time: string;
  guests: string;
  guestName: string;
  room: string;
  notes: string;
  status: string;
  createdAt: string;
};

export type DiningOrder = {
  id: string;
  items: {itemId: string; quantity: number}[];
  total: number;
  pickupTime: string;
  room: string;
  notes: string;
  status: string;
  createdAt: string;
};
