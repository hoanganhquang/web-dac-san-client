import "./AccountMenu.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const AccountMenu = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="container">
      <div className="menu-header">
        <h3>Trang cá nhân</h3>
      </div>
      <div className="menu-items">
        <NavLink to="/profile-page/dashboard" className="items">
          Bảng điều khiển
        </NavLink>
        {user?.role?.toLowerCase() !== "admin" && (
          <NavLink className="items" to="/profile-page/orders">
            Đơn hàng
          </NavLink>
        )}

        <NavLink className="items" to="/profile-page/account-details">
          Thông tin tài khoản
        </NavLink>
      </div>
    </div>
  );
};

export default AccountMenu;
