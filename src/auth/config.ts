import { AppInfo } from 'supertokens-node/lib/build/types';

export const ConfigInjectionToken = 'ConfigInjectionToken';
export const ConfigProviderToken = 'ConfigProviderToken';

export type AuthModuleConfig = {
  appInfo: AppInfo;
  connectionURI: string;
  apiKey?: string;
};
