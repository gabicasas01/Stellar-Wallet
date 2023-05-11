import StellarSdk from 'stellar-sdk';

const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

export const fetchBalance = async (publicKey: string): Promise<string> => {
  try {
    const account = await server.loadAccount(publicKey);
    const balance = account.balances.find((asset: any) => asset.asset_type === 'native').balance;
    return balance;
  } catch (error) {
    console.error('Error fetching balance:', error);
    throw error;
  }
};
