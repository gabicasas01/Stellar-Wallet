export interface IPayment {
    type: "payment";
    amount: string;
    assetType: string;
    created_at: string;
    id: string;
    source_account: string;
    to: string;
    transaction_successful: boolean;
  }