import type {DiningOrder} from '../../../NovaScotiaConciergeTypes/NovaScotiaConciergeAssist';

export interface NovaScotiaConciergeDiningOrdersRepository {
  list(): Promise<DiningOrder[]>;
  save(order: DiningOrder): Promise<void>;
}

export type {DiningOrder};
