import { Networks, Keypair, TransactionBuilder, Operation, Asset, Memo, NotFoundError, BASE_FEE } from "stellar-sdk";
import server from './server';

export const sendNewTransaction = async (secretKey: string, destinationId: string, amount: string): Promise<any> => {
  const sourceKeys = Keypair.fromSecret(secretKey);

  try {
    await server.loadAccount(destinationId);
  } catch (error) {
    if (error instanceof NotFoundError) {
      throw new Error("The destination account does not exist!");
    } else {
      throw error;
    }
  }

  let sourceAccount;
  try {
    sourceAccount = await server.loadAccount(sourceKeys.publicKey());
  } catch (error) {
    throw new Error("Error loading source account: " + error);
  }

  const transaction = new TransactionBuilder(sourceAccount, {
    fee: BASE_FEE,
    networkPassphrase: Networks.TESTNET,
  })
    .addOperation(
      Operation.payment({
        destination: destinationId,
        asset: Asset.native(),
        amount: amount,
      })
    )
    .addMemo(Memo.text("Test Transaction"))
    .setTimeout(180)
    .build();

  transaction.sign(sourceKeys);

  try {
    return await server.submitTransaction(transaction);
  } catch (error) {
    throw new Error("Something went wrong!" + error);
  }
}
