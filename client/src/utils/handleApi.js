import axios from "axios";
import { loginRoute, registerRoute } from "./APIRoutes";

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
  const res = await axios.post(loginRoute, {
    email,
    password,
  });
  return res.data;
}
