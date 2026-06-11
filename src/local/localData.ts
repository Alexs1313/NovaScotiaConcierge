import AsyncStorage from '@react-native-async-storage/async-storage';
import {keys} from '../constants/keys';
import type {BookingRequest, DiningOrder} from '../types';

const DEFAULT_PASS_CODE = 'NSC-2048';

export const localData = {
  async getPassCode(): Promise<string> {
    const code = await AsyncStorage.getItem(keys.passCode);
    return code ?? DEFAULT_PASS_CODE;
  },

  async ensurePassCode(): Promise<string> {
    const existing = await AsyncStorage.getItem(keys.passCode);
    if (existing) {
      return existing;
    }
    await AsyncStorage.setItem(keys.passCode, DEFAULT_PASS_CODE);
    return DEFAULT_PASS_CODE;
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
