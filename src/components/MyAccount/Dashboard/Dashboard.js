import "./Dashboard.scss";
import orders from "../../../assets/icons/shopping-bag.svg";
import accountDetails from "../../../assets/icons/user.svg";
import address from "../../../assets/icons/map-pin.svg";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="dashboard">
        <div className="dashboard-title">
          <p className="title">Bảng điều khiển</p>
          <p className="description">
            Tại đây bạn có thể xem các đơn hàng hiện tại, quản lý địa chỉ giao
            nhận hàng, chỉnh sửa mật khẩu và thông tin cá nhân
          </p>
        </div>
        <div className="dashboard-content">
          <div className="dashboard-box">
            <img src={orders} alt="" className="dashboard-icon"></img>
            <p className="item-title">Đơn hàng</p>
          </div>
          <div className="dashboard-box">
            <img src={address} alt="" className="dashboard-icon"></img>
            <p className="item-title">Địa chỉ</p>
          </div>
          <div className="dashboard-box">
            <img src={accountDetails} alt="" className="dashboard-icon"></img>
            <p className="item-title">Thông tin cá nhân</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
