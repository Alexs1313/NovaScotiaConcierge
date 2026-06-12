import AsyncStorage from '@react-native-async-storage/async-storage';
import {keys} from '../constants/keys';
import type {BookingRequest, DiningOrder} from '../types';

function generatePassCode(): string {
  const digits = Math.floor(1000 + Math.random() * 9000);
  return `NSC-${digits}`;
}

export const localData = {
  async getPassCode(): Promise<string> {
    const code = await AsyncStorage.getItem(keys.passCode);
    return code ?? generatePassCode();
  },

  async refreshPassCode(): Promise<string> {
    const code = generatePassCode();
    await AsyncStorage.setItem(keys.passCode, code);
    return code;
  },

  async ensurePassCode(): Promise<string> {
    return localData.refreshPassCode();
  },

  async getSavedEventIds(): Promise<string[]> {
    const raw = await AsyncStorage.getItem(keys.savedEvents);
    return raw ? (JSON.parse(raw) as string[]) : [];
  },

  async isEventSaved(eventId: string): Promise<boolean> {
    const ids = await localData.getSavedEventIds();
    return ids.includes(eventId);
  },

  async addSavedEvent(eventId: string): Promise<void> {
    const ids = await localData.getSavedEventIds();
    if (!ids.includes(eventId)) {
      await AsyncStorage.setItem(
        keys.savedEvents,
        JSON.stringify([...ids, eventId]),
      );
    }
  },

  async removeSavedEvent(eventId: string): Promise<void> {
    const ids = await localData.getSavedEventIds();
    await AsyncStorage.setItem(
      keys.savedEvents,
      JSON.stringify(ids.filter(id => id !== eventId)),
    );
  },

  async toggleSavedEvent(eventId: string): Promise<boolean> {
    const saved = await localData.isEventSaved(eventId);
    if (saved) {
      await localData.removeSavedEvent(eventId);
      return false;
    }
    await localData.addSavedEvent(eventId);
    return true;
  },

  async getBookings(): Promise<BookingRequest[]> {
    const raw = await AsyncStorage.getItem(keys.bookings);
    return raw ? (JSON.parse(raw) as BookingRequest[]) : [];
  },

  async addBooking(booking: BookingRequest): Promise<void> {
    const existing = await localData.getBookings();
    await AsyncStorage.setItem(
      keys.bookings,
      JSON.stringify([booking, ...existing]),
    );
  },

  async getDiningOrders(): Promise<DiningOrder[]> {
    const raw = await AsyncStorage.getItem(keys.diningOrders);
    return raw ? (JSON.parse(raw) as DiningOrder[]) : [];
  },

  async addDiningOrder(order: DiningOrder): Promise<void> {
    const existing = await localData.getDiningOrders();
    await AsyncStorage.setItem(
      keys.diningOrders,
      JSON.stringify([order, ...existing]),
    );
  },
};
