import StellarSdk, { Horizon } from 'stellar-sdk';

const VITE_HORIZON_URL = import.meta.env['VITE_HORIZON_URL'];

type BalanceLine = Horizon.BalanceLine;

const server = new StellarSdk.Server(VITE_HORIZON_URL);

export const fetchBalance = async (publicKey: string): Promise<string> => {
  try {
    const account = await server.loadAccount(publicKey);
    const balanceLine = account.balances.find((asset: BalanceLine) => asset.asset_type === 'native');
    if (balanceLine) {
      const balance = balanceLine.balance;
      return balance;
    } else {
      throw new Error('Native balance not found.');
    }
  } catch (error) {
    throw error;
  }
};
