import type {NovaScotiaConciergeGuestPassRepository} from './NovaScotiaConciergeGuestPassRepository';

export class NovaScotiaConciergeGetGuestPassCode {
  constructor(
    private readonly repository: NovaScotiaConciergeGuestPassRepository,
  ) {}

  execute(): Promise<string> {
    return this.repository.getCode();
  }
}
