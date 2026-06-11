import AsyncStorage from '@react-native-async-storage/async-storage';
import {DINING_ORDERS_KEY} from '../../../NovaScotiaConciergeCore/NovaScotiaConciergeConstants/NovaScotiaConciergeKeys';
import type {DiningOrder} from '../../../NovaScotiaConciergeTypes/NovaScotiaConciergeAssist';
import type {NovaScotiaConciergeDiningOrdersRepository} from '../NovaScotiaConciergeDomain/NovaScotiaConciergeDiningOrdersRepository';

export class NovaScotiaConciergeDiningOrdersRepositoryImpl
  implements NovaScotiaConciergeDiningOrdersRepository
{
  async list(): Promise<DiningOrder[]> {
    const raw = await AsyncStorage.getItem(DINING_ORDERS_KEY);
    return raw ? (JSON.parse(raw) as DiningOrder[]) : [];
  }

  async save(order: DiningOrder): Promise<void> {
    const existing = await this.list();
    await AsyncStorage.setItem(
      DINING_ORDERS_KEY,
      JSON.stringify([order, ...existing]),
    );
  }
}
