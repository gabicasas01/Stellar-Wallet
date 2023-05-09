import { Request, Response } from "express";
import { Keypair } from "stellar-sdk";

const createStellarAccount = (_req: Request, res: Response) => {
  try {
    const pair = Keypair.random();

    const publicKey = pair.publicKey();
    const secretKey = pair.secret();

    return res.status(200).json({
      publicKey,
      secretKey,
    });
  } catch (error) {
    console.error("Error creating Stellar account:", error);
    return res.status(500).json({ error: "Error creating Stellar account:" });
  }
};

export default createStellarAccount;
