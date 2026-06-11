import {NovaScotiaConciergeGuestPassRepositoryImpl} from '../NovaScotiaConciergeFeatures/NovaScotiaConciergeGuestPass/NovaScotiaConciergeData/NovaScotiaConciergeGuestPassRepositoryImpl';
import {NovaScotiaConciergeEnsureGuestPassCode} from '../NovaScotiaConciergeFeatures/NovaScotiaConciergeGuestPass/NovaScotiaConciergeDomain/NovaScotiaConciergeEnsureGuestPassCode';
import {NovaScotiaConciergeGetGuestPassCode} from '../NovaScotiaConciergeFeatures/NovaScotiaConciergeGuestPass/NovaScotiaConciergeDomain/NovaScotiaConciergeGetGuestPassCode';
import {NovaScotiaConciergeDiningOrdersRepositoryImpl} from '../NovaScotiaConciergeFeatures/NovaScotiaConciergeDining/NovaScotiaConciergeData/NovaScotiaConciergeDiningOrdersRepositoryImpl';
import {NovaScotiaConciergeStaticMenuRepository} from '../NovaScotiaConciergeFeatures/NovaScotiaConciergeDining/NovaScotiaConciergeData/NovaScotiaConciergeStaticMenuRepository';
import {NovaScotiaConciergePlaceDiningOrder} from '../NovaScotiaConciergeFeatures/NovaScotiaConciergeDining/NovaScotiaConciergeDomain/NovaScotiaConciergePlaceDiningOrder';
import {NovaScotiaConciergeBookingsRepository} from '../NovaScotiaConciergeFeatures/NovaScotiaConciergeServices/NovaScotiaConciergeData/NovaScotiaConciergeBookingsRepository';
import {NovaScotiaConciergeSavedEventsRepository} from '../NovaScotiaConciergeFeatures/NovaScotiaConciergeEvents/NovaScotiaConciergeData/NovaScotiaConciergeSavedEventsRepository';

const guestPassRepository = new NovaScotiaConciergeGuestPassRepositoryImpl();
const diningMenuRepository = new NovaScotiaConciergeStaticMenuRepository();
const diningOrdersRepository = new NovaScotiaConciergeDiningOrdersRepositoryImpl();

export const novaScotiaConciergeDi = {
  guestPassRepository,
  getGuestPassCode: new NovaScotiaConciergeGetGuestPassCode(guestPassRepository),
  ensureGuestPassCode: new NovaScotiaConciergeEnsureGuestPassCode(
    guestPassRepository,
  ),
  diningMenuRepository,
  diningOrdersRepository,
  placeDiningOrder: new NovaScotiaConciergePlaceDiningOrder(
    diningOrdersRepository,
  ),
  bookingsRepository: new NovaScotiaConciergeBookingsRepository(),
  savedEventsRepository: new NovaScotiaConciergeSavedEventsRepository(),
};
