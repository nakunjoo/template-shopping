import { api } from "../utils/axios";

export const getMe = async () => {
  const { data } = await api.get("/user/me");
  return data.data;
};
