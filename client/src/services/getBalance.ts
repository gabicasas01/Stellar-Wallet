import type { Horizon } from 'stellar-sdk';
import server from './server';

type BalanceLine = Horizon.BalanceLine;

export const fetchBalance = async (publicKey: string): Promise<string> => {
  try {
    const account = await server.loadAccount(publicKey);
    const balanceLine = account.balances.find((asset: BalanceLine) => asset.asset_type === 'native');
    if (balanceLine) {
      return balanceLine.balance;
    } else {
      throw new Error('Native balance not found.');
    }
  } catch (error) {
    throw error;
  }
};
