import "./AccountMenu.scss";
import { NavLink } from "react-router-dom";

const AccountMenu = () => {
  return (
    <div className="container">
      <div className="menu-header">
        <h3>Trang cá nhân</h3>
      </div>
      <div className="menu-items">
        <NavLink to="/profile-page/dashboard" className="items">
          Bảng điều khiển
        </NavLink>
        <NavLink className="items" to="/profile-page/orders">
          Đơn hàng
        </NavLink>
        <NavLink className="items" to="/profile-page/account-details">
          Thông tin tài khoản
        </NavLink>
        <NavLink className="items log-out" to="/profile-page/log-out">
          Đăng xuất
        </NavLink>
      </div>
    </div>
  );
};

export default AccountMenu;
