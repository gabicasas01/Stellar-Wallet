import server from './server';
import { sortRecords } from './sortRecords';
import type { IPayment } from 'src/utils/IPayment';
import type { ICreateAccount } from 'src/utils/ICreateAccount';
import type { IRecord } from 'src/utils/IRecord';

export const getOperations = async (publicKey: string): Promise<(IPayment | ICreateAccount | IRecord)[]> => {
  try {
    const account = await server.loadAccount(publicKey);
    const operations = await account.operations();
    return sortRecords(operations);
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};
