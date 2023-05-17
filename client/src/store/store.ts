import { writable } from 'svelte/store';
import type { IAccount } from '../utils/IAccount';

export const account = writable<IAccount>({
  publicKey: '',
  secretKey: '',
});
