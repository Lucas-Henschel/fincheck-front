import { sleep } from "../../utils/sleep";
import { httpClient } from "../httpClient";

export interface SigninṔarams {
  email: string;
  password: string;
}

interface SigninResponse {
  accessToken: string
}

export async function signin(params: SigninṔarams) {
  await sleep();

  const { data } = await httpClient.post<SigninResponse>('/auth/signin', params);

  return data;
}
