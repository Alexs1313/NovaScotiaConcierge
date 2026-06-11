import type {NovaScotiaConciergeGuestPassRepository} from './NovaScotiaConciergeGuestPassRepository';

export class NovaScotiaConciergeEnsureGuestPassCode {
  constructor(
    private readonly repository: NovaScotiaConciergeGuestPassRepository,
  ) {}

  execute(): Promise<string> {
    return this.repository.ensureDefaultCode();
  }
}
