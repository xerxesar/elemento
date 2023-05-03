import Cookies from "js-cookie";

const TokenKey = "auth";

export function getTokens() {
  const tokensStr = Cookies.get(TokenKey);
  console.log(TokenKey + Cookies.get(TokenKey));
  if (tokensStr) {
    try {
      return JSON.parse(tokensStr);
    } catch (e) {
      return null;
    }
  }
  return null;
}

export function setTokens(tokens) {
  return Cookies.set(TokenKey, JSON.stringify(tokens), { expires: 30 });
}

export function removeTokens() {
  return Cookies.remove(TokenKey);
}
