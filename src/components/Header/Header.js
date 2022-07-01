import "./Header.scss";
import card from "../../assets/icons/Card.svg";
import logo from "../../assets/icons/Logo.svg";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/authSlice";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { getQuantity } from "../../redux/cartSlice";

function Header() {
  const [headerScrollStyle, setHeaderScrollStyle] = useState(false);
  const navigate = useNavigate();
  const { isLoggedin, user, token } = useSelector((state) => state.auth);
  const { quantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const scrollCheck = () => {
      setHeaderScrollStyle(window.scrollY > 150);
    };

    window.addEventListener("scroll", scrollCheck);

    return () => {
      window.removeEventListener("scroll", scrollCheck);
    };
  }, []);

  useEffect(() => {
    if (isLoggedin) {
      dispatch(getQuantity(token));
    }
  }, [isLoggedin]);

  const handleNavigateCard = () => {
    navigate("/cart");
  };

  const handleNavigateAccount = () => {
    navigate("/profile-page/dashboard");
  };

  const handleNavigateDashboardAdmin = () => {
    navigate("/admin");
  };

  const handleSignOutBtn = () => {
    dispatch(signOut());
    localStorage.removeItem("token");
  };

  const handleNavigateProductSection = () => {
    navigate("/", { state: { scroll: true } });
  };

  return (
    <header className={clsx({ scrollShow: headerScrollStyle })}>
      <div className="container">
        <div className="header-main">
          <div className="nav">
            <div
              className="img-box logoBox"
              onClick={() => {
                window.location.assign("/");
              }}
            >
              <img src={logo} alt="" />
              <div className="title">TFoods</div>
            </div>
            <ul className="menu">
              <li className="item item--active">
                <NavLink to="/">Trang chủ</NavLink>
              </li>
              <li className="item" onClick={handleNavigateProductSection}>
                <a>Sản phẩm</a>
              </li>
              {user.role == "Admin" && (
                <li className="item" onClick={handleNavigateDashboardAdmin}>
                  <a>Quản lý</a>
                </li>
              )}
              {isLoggedin && (
                <li className="item" onClick={handleSignOutBtn}>
                  <a href="" style={{ color: "red" }}>
                    Đăng xuất
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div className="features">
            {/* <p>
              <FontAwesomeIcon icon={faUser} />
            </p> */}
            <div className="img-box" onClick={handleNavigateCard}>
              <img src={card} alt="" />
              {isLoggedin && <div className="number">{quantity}</div>}
            </div>
            <button className="primaryBtn" onClick={handleNavigateAccount}>
              Tài khoản
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
