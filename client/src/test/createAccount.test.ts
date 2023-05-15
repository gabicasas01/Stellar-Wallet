import { createAccount } from '../utils/createAccount';
import StellarSdk from 'stellar-sdk';


describe('createAccount', () => {
  it('should create a new Stellar account', async () => {
    const { publicKey, secretKey } = await createAccount();

    expect(publicKey).toBeDefined();
    expect(secretKey).toBeDefined();
  });

  it('should create a unique public and secret key pair', async () => {
    const { publicKey: publicKey1, secretKey: secretKey1 } = await createAccount();
    const { publicKey: publicKey2, secretKey: secretKey2 } = await createAccount();

    expect(publicKey1).not.toEqual(publicKey2);
    expect(secretKey1).not.toEqual(secretKey2);
  });

  it('should throw an error if account creation fails', async () => {
    jest.spyOn(StellarSdk.Keypair, 'random').mockImplementation(() => {
      throw new Error('Failed to create keypair');
    });

    await expect(createAccount()).rejects.toThrow('Failed to create Stellar account');
  });
});