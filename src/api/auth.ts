import { api } from "../utils/axios";

interface SignupData {
  name: string;
  email: string;
  password: string;
  phone: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const createUser = async (newUser: SignupData) => {
  const { data } = await api.post("/auth/signup", newUser);
  return data;
};

export const login = async (info: LoginData) => {
  const { data } = await api.post("/auth/login", info);
  return data;
};
