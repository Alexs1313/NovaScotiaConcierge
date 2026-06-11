import AsyncStorage from '@react-native-async-storage/async-storage';
import {PASS_CODE_KEY} from '../../../NovaScotiaConciergeCore/NovaScotiaConciergeConstants/NovaScotiaConciergeKeys';

const DEFAULT_CODE = 'NSC-2048';

export const NovaScotiaConciergeGuestPassLocalSource = {
  async readCode(): Promise<string | null> {
    return AsyncStorage.getItem(PASS_CODE_KEY);
  },

  async writeCode(code: string): Promise<void> {
    await AsyncStorage.setItem(PASS_CODE_KEY, code);
  },

  defaultCode(): string {
    return DEFAULT_CODE;
  },
};
