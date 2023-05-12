import { writable } from 'svelte/store';

interface Account {
  publicKey: string;
  secretKey: string;
}

export const account = writable<Account>({
  publicKey: '',
  secretKey: '',
});
