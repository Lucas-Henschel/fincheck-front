import { httpClient } from "../httpClient";

export interface UpdateBankAccountṔarams {
  id: string;
  name: string;
  initialBalance: number;
  color: string;
  type: "CHECKING" | "INVESTMENT" | "CASH";
}

export async function update({ id, ...params }: UpdateBankAccountṔarams) {
  const { data } = await httpClient.put(`/bank-accounts/${id}`, params);

  return data;
}
