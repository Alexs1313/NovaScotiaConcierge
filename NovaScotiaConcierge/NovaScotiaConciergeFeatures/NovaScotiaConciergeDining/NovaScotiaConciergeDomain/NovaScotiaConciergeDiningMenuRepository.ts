import type {DiningItem} from '../../../NovaScotiaConciergeData/NovaScotiaConciergeDining/NovaScotiaConciergeDiningMenu';

export interface NovaScotiaConciergeDiningMenuRepository {
  getMenu(): DiningItem[];
  getItemById(id: string): DiningItem | undefined;
}

export type {DiningItem};
