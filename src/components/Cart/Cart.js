import axios from "axios";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "./Cart.scss";

const Cart = () => {
  const [cartInfo, setCartInfo] = useState();
  const { token } = useSelector((state) => state.auth);
  const [totalPrice, setTotalPrice] = useState();
  const [change, setChange] = useState(false);

  const handleChangeQuantity = async (e, productId) => {
    setChange(true);
    try {
      await axios.patch(
        `${process.env.REACT_APP_API}/carts/`,
        {
          product: productId,
          newQuantity: parseInt(e.target.value),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }

    setChange(false);
  };

  const removeProduct = async (productId) => {
    setChange(true);
    try {
      await axios.delete(`${process.env.REACT_APP_API}/carts/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
    setChange(false);
  };

  const cartCheckout = async () => {
    const data = {
      total: totalPrice,
      details: cartInfo.products,
    };
    try {
      await axios.post(`${process.env.REACT_APP_API}/orders`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Thanh toán thành công!");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(async () => {
    if (!change) {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API}/carts/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCartInfo(res.data.data);
        if (res.data.data.products.length > 0) {
          setTotalPrice(() => {
            const total = res.data.data.products.reduce((count, value) => {
              return count + value.price * value.quantity;
            }, 0);

            return total;
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [change]);

  return (
    <div
      className={clsx("container", {
        disable: change,
      })}
    >
      <div className="card">
        <div className="card-content">
          <p className="card-title">Giỏ hàng</p>
          <div className="list-product">
            <table>
              <thead>
                <tr className="table-header">
                  <th>Sản phẩm</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {cartInfo &&
                  cartInfo.products.map((item) => {
                    return (
                      <tr className="table-row" key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                          <div className="quantity">
                            <input
                              type="number"
                              defaultValue={item.quantity}
                              onChange={(e) =>
                                handleChangeQuantity(e, item._id)
                              }
                              min={1}
                            />
                          </div>
                        </td>
                        <td>
                          <button
                            className="button btn-delete secondaryBtn"
                            onClick={() => removeProduct(item._id)}
                          >
                            x
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-totals">
          <div className="card-header">
            <h3>Tổng tiền trong giỏ hàng</h3>
          </div>
          <div className="card-items">
            <p>Tổng tiền</p>
            <p>
              {totalPrice} <span className="vnd">vnd</span>
            </p>
          </div>
          <button
            className="button primaryBtn btn-checkout"
            onClick={cartCheckout}
          >
            Thanh toán giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
