export const tokenStorage = {
  getAccessToken: () => localStorage.getItem("accessToken"),
  getRefreshToken: () => localStorage.getItem("refreshToken"),
  setAccessToken: (token: string) => localStorage.setItem("accessToken", token),
  setRefreshToken: (token: string) =>
    localStorage.setItem("refreshToken", token),
  removeToken: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  },
};
