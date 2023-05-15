import StellarSdk from 'stellar-sdk';

export const createAccount = async (): Promise<{ publicKey: string; secretKey: string }> => {
  try {
    const pair = StellarSdk.Keypair.random();
    const publicKey = pair.publicKey();
    const secretKey = pair.secret();

    return { publicKey, secretKey };
  } catch (error) {
    throw new Error('Failed to create Stellar account');
  }
};
