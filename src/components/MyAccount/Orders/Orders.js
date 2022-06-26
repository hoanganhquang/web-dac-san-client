import "../Orders/Orders.scss";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Orders = () => {
  const { token } = useSelector((state) => state.auth);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [dataOrder, setDataOrder] = useState([]);
  const [dataOrderDetail, setDataOrderDetail] = useState([]);

  const handleShowDetailsModal = () => {
    setShowDetailsModal(!showDetailsModal);
  };

  useEffect(async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/order/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setDataOrder(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="container">
      <div
        className={clsx("modal", "orders-modal", { show: showDetailsModal })}
      >
        <div className="modal-box">
          <div className="modal-header">
            <h1 className="modal-title">Chi tiết đơn hàng</h1>
            <FontAwesomeIcon icon={faClose} onClick={handleShowDetailsModal} />
          </div>

          <table>
            <thead>
              <tr>
                <th>Sản phẩm</th>
                <th>Giá bán</th>
                <th>Số lượng</th>
              </tr>
            </thead>
            <tbody>
              {dataOrderDetail.length > 0 &&
                dataOrderDetail.map((item) => {
                  return (
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="orders">
        <div className="orders-title">
          <p className="title">Đơn hàng</p>
        </div>
        <div className="orders-content">
          <table>
            <thead>
              <tr className="table-header">
                <th>Ngày đặt</th>
                <th>Tổng tiền</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {dataOrder.length > 0 &&
                dataOrder.map((item) => {
                  return (
                    <tr className="table-row" key={item._id}>
                      <td>
                        <p>
                          {new Date(item.orderDate).toLocaleDateString("vi")}
                        </p>
                      </td>
                      <td>{item.total}</td>

                      <td>
                        <button
                          className="button primaryBtn"
                          onClick={() => {
                            setDataOrderDetail(item.details);
                            handleShowDetailsModal();
                          }}
                        >
                          Chi tiết
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
