import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DetailsModal from "./DetailsModal";
import "./Order.scss";

export default function Order() {
  const { token } = useSelector((state) => state.auth);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [dataOrder, setDataOrder] = useState([]);
  const [dataOrderDetail, setDataOrderDetail] = useState([]);

  const handleShowDetailsModal = () => {
    setShowDetailsModal(!showDetailsModal);
  };

  useEffect(async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/orders`, {
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
    <div className="order">
      <DetailsModal
        showDetailsModal={showDetailsModal}
        handleShowDetailsModal={handleShowDetailsModal}
        dataOrderDetail={dataOrderDetail}
      />

      <h1 className="title">Đơn hàng</h1>

      <table>
        <thead>
          <tr>
            <th>Ngày đặt</th>
            <th>Tổng tiền</th>
            <th>Người dùng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dataOrder.length > 0 &&
            dataOrder.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{new Date(item.orderDate).toLocaleDateString("vi")}</td>
                  <td>{item.total}</td>
                  <td>{item.userDetails[0].name}</td>
                  <td>
                    <button
                      className="secondaryBtn"
                      onClick={() => {
                        setDataOrderDetail(item.details);
                        handleShowDetailsModal();
                      }}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
