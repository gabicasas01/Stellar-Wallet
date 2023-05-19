import type { IOperations } from '../utils/IOperations'
import type { IPayment } from 'src/utils/IPayment';
import type { ICreateAccount } from 'src/utils/ICreateAccount';
import type { IRecord } from 'src/utils/IRecord';

export const sortRecords = (operations: IOperations): (IPayment | ICreateAccount | IRecord)[] => {
  const sortedRecords = operations.records.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateB.getTime() - dateA.getTime();
  });

  return sortedRecords;
};
