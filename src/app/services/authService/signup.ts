import { sleep } from "../../utils/sleep";
import { httpClient } from "../httpClient";

export interface SignupṔarams {
  name: string;
  email: string;
  password: string;
}

interface SignupResponse {
  accessToken: string
}

export async function signup(params: SignupṔarams) {
  await sleep();

  const { data } = await httpClient.post<SignupResponse>('/auth/signup', params);

  return data;
}
