export type ServicesStackParamList = {
  ServicesList: undefined;
  BookingForm: {serviceId: string};
  BookingConfirmation: {serviceTitle: string};
};

export type EventsStackParamList = {
  EventsList: undefined;
  EventDetails: {eventId: string};
};

export type DiningStackParamList = {
  DiningMenu: undefined;
  OrderReview: undefined;
  DiningOrderConfirmation: undefined;
};

export type AssistStackParamList = {
  AssistList: undefined;
  QAHelp: undefined;
  SavedEvents: undefined;
  MyBookings: undefined;
  DiningOrders: undefined;
  GuestTips: undefined;
  ResortInfo: undefined;
  AppInfo: undefined;
};
