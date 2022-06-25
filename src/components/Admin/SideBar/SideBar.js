import { NavLink } from "react-router-dom";

import "./SideBar.scss";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBar-header">
        <h1>Danh mục</h1>
      </div>

      <ul className="sideBar-menu">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/admin/statistics"
          >
            Thống kê
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/admin/categories"
          >
            Loại sản phẩm
          </NavLink>
        </li> */}
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/admin/products"
          >
            Sản phẩm
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/admin/orders"
          >
            Đơn hàng
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
