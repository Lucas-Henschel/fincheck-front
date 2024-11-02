import { httpClient } from "../httpClient";

export interface SigninṔarams {
  email: string;
  password: string;
}

interface SigninResponse {
  accessToken: string
}

export async function signin(params: SigninṔarams) {
  const { data } = await httpClient.post<SigninResponse>('/auth/signin', params);

  return data;
}
