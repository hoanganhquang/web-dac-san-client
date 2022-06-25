import axios from "axios";
import { toast } from "react-toastify";

export const SignInService = async (url, data) => {
  const res = await axios.post(url, {
    email: data.userName,
    password: data.password,
  });
  localStorage.setItem("token", res.data.token);
  return res.data.token;
};

export const SignUpService = async (url, data) => {
  const res = await axios.post(url, {
    email: data.userName,
    password: data.password,
  });
  return res.data.token;
};

export const getUser = async (token) => {
  const res = await axios.get(`${process.env.REACT_APP_API}/user/curUser`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data.data;
};
