import { ClassValue, clsx } from "clsx";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function handleOAuthRedirect() {
  const codeVerifier = generateCodeVerifier();
  localStorage.setItem("codeVerifier", codeVerifier);
  const codeChallenge = await generateCodeChallenge(codeVerifier);
  const url = (window as any).__RUNTIME_CONFIG__.REACT_APP_BASE_URL;
  const endpoint = (window as any).__RUNTIME_CONFIG__
    .REACT_APP_ENDPOINT_OAUTH;
  const clientId = (window as any).__RUNTIME_CONFIG__
    .REACT_APP_CLIENT_ID;
  const redirectUri = (window as any).__RUNTIME_CONFIG__
    .REACT_APP_REDIRECT_URI;
  const responseType = (window as any).__RUNTIME_CONFIG__
    .REACT_APP_RESPONSE_TYPE;
  const scope = (window as any).__RUNTIME_CONFIG__.REACT_APP_SCOPE;
  const codeChallengeMethod = (window as any).__RUNTIME_CONFIG__
    .REACT_APP_CODE_CHALLENGE_METHOD;
  const oauth2Url = `${url}${endpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&code_challenge_method=${codeChallengeMethod}&code_challenge=${codeChallenge}`;
  window.location.href = oauth2Url;
}

export function generateCodeVerifier() {
  const array = new Uint8Array(32);
  window.crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function generateCodeChallenge(codeVerifier: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const hash = await window.crypto.subtle.digest("SHA-256", data);
  return btoa(String.fromCharCode(...new Uint8Array(hash)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}
