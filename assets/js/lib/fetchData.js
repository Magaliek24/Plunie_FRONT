export const API_BASE = window.API_BASE || "http://localhost:8090";

export function api_url(path) {
  if (!path.startsWith("/")) path = "/" + path;
  return API_BASE.replace(/\/+$/, "") + path;
}

export async function get_json(path, { headers = {}, credentials } = {}) {
  const res = await fetch(api_url(path), {
    headers: { Accept: "application/json", ...headers },
    ...(credentials ? { credentials } : {}),
  });
  if (!res.ok) throw new Error((await res.text()) || res.statusText);
  return res.json();
}

export async function post_json(
  path,
  data,
  { headers = {}, credentials } = {}
) {
  const res = await fetch(api_url(path), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
    ...(credentials ? { credentials } : {}),
  });
  if (!res.ok) throw new Error((await res.text()) || res.statusText);
  return res.json();
}
