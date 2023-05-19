import type { IPayment } from "./IPayment";
import type { ICreateAccount } from "./ICreateAccount";
import type { IRecord } from "./IRecord";

export interface IOperations {
  records: ( IPayment | ICreateAccount | IRecord)[];
}






