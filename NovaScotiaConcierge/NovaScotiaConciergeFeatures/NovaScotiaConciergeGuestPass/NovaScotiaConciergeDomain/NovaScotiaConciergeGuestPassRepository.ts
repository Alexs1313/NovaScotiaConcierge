export interface NovaScotiaConciergeGuestPassRepository {
  getCode(): Promise<string>;
  ensureDefaultCode(): Promise<string>;
}
