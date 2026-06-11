import AsyncStorage from '@react-native-async-storage/async-storage';
import {BOOKINGS_KEY} from '../../../NovaScotiaConciergeCore/NovaScotiaConciergeConstants/NovaScotiaConciergeKeys';
import type {BookingRequest} from '../../../NovaScotiaConciergeTypes/NovaScotiaConciergeAssist';

export class NovaScotiaConciergeBookingsRepository {
  async list(): Promise<BookingRequest[]> {
    const raw = await AsyncStorage.getItem(BOOKINGS_KEY);
    return raw ? (JSON.parse(raw) as BookingRequest[]) : [];
  }

  async save(booking: BookingRequest): Promise<void> {
    const existing = await this.list();
    await AsyncStorage.setItem(
      BOOKINGS_KEY,
      JSON.stringify([booking, ...existing]),
    );
  }
}
