import { Request, Response } from "express";
import StellarSdk from 'stellar-sdk';

const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

const getBalance = async (req: Request, res: Response) => {
    try {
      const publicKey = req.query.publicKey
      const account = await server.loadAccount(publicKey);

      const balance = account.balances.find((asset: any) => asset.asset_type === 'native').balance;
    
      res.json({ balance });
    } catch (error) {
      console.error('Error obtaining the account balance:', error);
      res.status(500).json({ error: 'Error obtaining the account balance:' });
    }
}

export default getBalance

