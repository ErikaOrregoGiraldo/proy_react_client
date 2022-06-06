import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants";
import jwtDecode from "jwt-decode";

export function getAccessToken() {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  if (!accessToken || accessToken === "null") return null;
  console.log(accessToken);

  return expireToken(accessToken) ? null : accessToken;
}

export function getRefreshToken() {
  const refreshToken = localStorage.getItem(REFRESH_TOKEN);
  if (!refreshToken || refreshToken === "null") return null;

  return expireToken(refreshToken) ? null : refreshToken;
}

export function LogOut() {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
}

const expireToken = (token) => {
  const seconds = 60;
  const metaToken = jwtDecode(token);
  const { exp } = metaToken;
  const now = (Date.now() + seconds) / 1000;
  return now > exp;
};
