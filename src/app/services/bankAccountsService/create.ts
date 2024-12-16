import { httpClient } from "../httpClient";

export interface CreateBankAccountṔarams {
  name: string;
  initialBalance: number;
  color: string;
  type: "CHECKING" | "INVESTMENT" | "CASH";
}

export async function create(params: CreateBankAccountṔarams) {
  const { data } = await httpClient.post('/bank-accounts', params);

  return data;
}
