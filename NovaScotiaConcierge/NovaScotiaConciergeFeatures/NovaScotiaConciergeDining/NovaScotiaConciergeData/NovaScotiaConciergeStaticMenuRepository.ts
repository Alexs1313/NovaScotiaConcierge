import {
  DINING_MENU,
  getDiningItemById,
} from '../../../NovaScotiaConciergeData/NovaScotiaConciergeDining/NovaScotiaConciergeDiningMenu';
import type {NovaScotiaConciergeDiningMenuRepository} from '../NovaScotiaConciergeDomain/NovaScotiaConciergeDiningMenuRepository';

export class NovaScotiaConciergeStaticMenuRepository
  implements NovaScotiaConciergeDiningMenuRepository
{
  getMenu() {
    return DINING_MENU;
  }

  getItemById(id: string) {
    return getDiningItemById(id);
  }
}
