import axios from "axios";

const url = process.env.REACT_APP_API;

export const signInService = async (data) => {
  const res = await axios.post(`${url}/auth/signin`, data);

  if (res?.data?.access_token) {
    localStorage.setItem("token", JSON.stringify(res?.data?.access_token));
  }

  return res.data.access_token;
};

export const signUpService = async (data) => {
  const res = await axios.post(`${url}/auth/signup`, data);

  if (res?.data?.access_token) {
    localStorage.setItem("token", JSON.stringify(res?.data?.access_token));
  }

  return res.data.access_token;
};

export const signOutService = () => {
  localStorage.removeItem("token");
};

export const getInfoService = async (token) => {
  const res = await axios.get(`${url}/users/info`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data.data;
};
