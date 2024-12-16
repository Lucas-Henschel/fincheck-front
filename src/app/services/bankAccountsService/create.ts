import { httpClient } from "../httpClient";

export interface BankAccountṔarams {
  name: string;
  initialBalance: number;
  color: string;
  type: "CHECKING" | "INVESTMENT" | "CASH";
}

export async function create(params: BankAccountṔarams) {
  const { data } = await httpClient.post('/bank-accounts', params);

  return data;
}
