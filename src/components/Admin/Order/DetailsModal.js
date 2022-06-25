import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

export default function DetailsModal(props) {
  return (
    <div
      className={clsx("modal", "order-modal", { show: props.showDetailsModal })}
    >
      <div className="modal-box">
        <div className="modal-header">
          <h1 className="modal-title">Chi tiết đơn hàng</h1>
          <FontAwesomeIcon
            icon={faClose}
            onClick={props.handleShowDetailsModal}
          />
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
            {props.dataOrderDetail.length > 0 &&
              props.dataOrderDetail.map((item) => {
                return (
                  <tr>
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
  );
}
