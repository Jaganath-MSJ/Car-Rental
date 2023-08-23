import axios from "axios";
import { loginRoute, refreshTokenRoute, registerRoute } from "./APIRoutes";

export async function registerApi({ name, email, phone, city, password }) {
  const res = await axios.post(registerRoute, {
    name,
    email,
    phone,
    city,
    password,
  });
  return res.data;
}

export async function loginApi({ email, password }) {
  const res = await (
    await fetch(loginRoute, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
  ).json();
  return res;
}

export async function refreshTokenApi() {
  const res = await (
    await fetch(refreshTokenRoute, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();
  return res;
}
