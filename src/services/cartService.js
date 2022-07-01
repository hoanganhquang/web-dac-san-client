import axios from "axios";

export const cartService = async (token) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API}/carts/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data.data.products.length;
  } catch (error) {
    console.log(error);
  }
};
