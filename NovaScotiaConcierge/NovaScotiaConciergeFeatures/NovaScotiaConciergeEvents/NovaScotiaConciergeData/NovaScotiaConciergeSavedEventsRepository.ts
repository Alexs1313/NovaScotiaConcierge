import AsyncStorage from '@react-native-async-storage/async-storage';
import {SAVED_EVENTS_KEY} from '../../../NovaScotiaConciergeCore/NovaScotiaConciergeConstants/NovaScotiaConciergeKeys';

export class NovaScotiaConciergeSavedEventsRepository {
  async listIds(): Promise<string[]> {
    const raw = await AsyncStorage.getItem(SAVED_EVENTS_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  }

  async isSaved(eventId: string): Promise<boolean> {
    const ids = await this.listIds();
    return ids.includes(eventId);
  }

  async add(eventId: string): Promise<void> {
    const ids = await this.listIds();
    if (!ids.includes(eventId)) {
      await AsyncStorage.setItem(
        SAVED_EVENTS_KEY,
        JSON.stringify([...ids, eventId]),
      );
    }
  }

  async remove(eventId: string): Promise<void> {
    const ids = await this.listIds();
    await AsyncStorage.setItem(
      SAVED_EVENTS_KEY,
      JSON.stringify(ids.filter(id => id !== eventId)),
    );
  }

  async toggle(eventId: string): Promise<boolean> {
    const saved = await this.isSaved(eventId);
    if (saved) {
      await this.remove(eventId);
      return false;
    }
    await this.add(eventId);
    return true;
  }
}
