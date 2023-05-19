export interface ICreateAccount {
    type: "create_account";
    account: string;
    created_at: string;
    id: string;
    starting_balance: string;
    transaction_successful: boolean;
  }