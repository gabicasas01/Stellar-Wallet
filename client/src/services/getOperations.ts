import server from './server';
import { sortRecords } from './sortRecords';
import type { IPayment } from 'src/utils/IPayment';
import type { ICreateAccount } from 'src/utils/ICreateAccount';
import type { IRecord } from 'src/utils/IRecord';

export const getOperations = async (publicKey: string): Promise<(IPayment | ICreateAccount | IRecord)[]> => {
  try {
    const account = await server.loadAccount(publicKey);
    const operations = await account.operations();
    const sortedRecords = sortRecords(operations);
    return sortedRecords;
  } catch (error) {
    return [];
  }
};