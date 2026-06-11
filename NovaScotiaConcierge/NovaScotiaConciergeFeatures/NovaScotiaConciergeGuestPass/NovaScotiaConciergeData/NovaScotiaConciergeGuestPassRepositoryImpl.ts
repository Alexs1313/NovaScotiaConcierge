import type {NovaScotiaConciergeGuestPassRepository} from '../NovaScotiaConciergeDomain/NovaScotiaConciergeGuestPassRepository';
import {NovaScotiaConciergeGuestPassLocalSource} from './NovaScotiaConciergeGuestPassLocalSource';

export class NovaScotiaConciergeGuestPassRepositoryImpl
  implements NovaScotiaConciergeGuestPassRepository
{
  async getCode(): Promise<string> {
    const code = await NovaScotiaConciergeGuestPassLocalSource.readCode();
    return code ?? NovaScotiaConciergeGuestPassLocalSource.defaultCode();
  }

  async ensureDefaultCode(): Promise<string> {
    const existing = await NovaScotiaConciergeGuestPassLocalSource.readCode();
    if (existing) {
      return existing;
    }
    const code = NovaScotiaConciergeGuestPassLocalSource.defaultCode();
    await NovaScotiaConciergeGuestPassLocalSource.writeCode(code);
    return code;
  }
}
