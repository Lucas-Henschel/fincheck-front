import { httpClient } from "../httpClient";

interface SignupṔarams {
  name: string;
  email: string;
  password: string;
}

interface SignupResponse {
  accessToken: string
}

export async function signup(params: SignupṔarams) {
  const { data } = await httpClient.post<SignupResponse>('/auth/signup', params);

  return data;
}
