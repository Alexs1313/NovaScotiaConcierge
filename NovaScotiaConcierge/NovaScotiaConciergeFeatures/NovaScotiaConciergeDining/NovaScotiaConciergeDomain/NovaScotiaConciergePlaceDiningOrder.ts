import type {DiningOrder} from '../../../NovaScotiaConciergeTypes/NovaScotiaConciergeAssist';
import type {NovaScotiaConciergeDiningOrdersRepository} from './NovaScotiaConciergeDiningOrdersRepository';

export class NovaScotiaConciergePlaceDiningOrder {
  constructor(
    private readonly repository: NovaScotiaConciergeDiningOrdersRepository,
  ) {}

  execute(order: DiningOrder): Promise<void> {
    return this.repository.save(order);
  }
}
