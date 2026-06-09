import AsyncStorage from '@react-native-async-storage/async-storage';
import {PASS_CODE_KEY} from '../constants/storage';

const DEFAULT_CODE = 'NSC-2048';

export async function ensureGuestPassCode(): Promise<string> {
  const existing = await AsyncStorage.getItem(PASS_CODE_KEY);
  if (existing) {
    return existing;
  }
  await AsyncStorage.setItem(PASS_CODE_KEY, DEFAULT_CODE);
  return DEFAULT_CODE;
}

export async function getGuestPassCode(): Promise<string> {
  const code = await AsyncStorage.getItem(PASS_CODE_KEY);
  return code ?? DEFAULT_CODE;
}
