import { AppApi, createAppApi } from '../api/base/app';
import { LocalStorageKey } from '../browser/local-storage-key';
import {
  CookieWrapper,
  createCookieWrapper,
  createLocalStorageWrapper,
  createSessionStorageWrapper,
  StorageWrapper,
} from '@mrzli/gm-js-libraries-browser-utils';
import { CookieKey } from '../browser/cookie-key';
import { SessionStorageKey } from '../browser/session-storage-key';
import {
  createHistoryWrapper,
  createLocationWrapper,
  HistoryWrapper,
  LocationWrapper,
} from '@mrzli/gm-js-libraries-navigation-utils';

export interface AppDependencies {
  readonly api: AppApi;
  // readonly windowWrapper: WindowWrapper;
  readonly historyWrapper: HistoryWrapper;
  readonly locationWrapper: LocationWrapper;
  readonly sessionStorageWrapper: StorageWrapper<SessionStorageKey>;
  readonly localStorageWrapper: StorageWrapper<LocalStorageKey>;
  readonly cookieWrapper: CookieWrapper<CookieKey>;
}

export function createAppDependencies(): AppDependencies {
  return {
    api: createAppApi(),
    // windowWrapper: createWindowWrapper(),
    historyWrapper: createHistoryWrapper(),
    locationWrapper: createLocationWrapper(),
    sessionStorageWrapper: createSessionStorageWrapper<SessionStorageKey>(),
    localStorageWrapper: createLocalStorageWrapper<LocalStorageKey>(),
    cookieWrapper: createCookieWrapper<CookieKey>(),
  };
}
