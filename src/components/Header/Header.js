import "./Header.scss";
import card from "../../assets/icons/Card.svg";
import logo from "../../assets/icons/Logo.svg";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { signOut } from "../../store/authSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function Header() {
  const [headerScrollStyle, setHeaderScrollStyle] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, isLogin, user } = useSelector((state) => state.auth);

  useEffect(() => {
    const scrollCheck = () => {
      setHeaderScrollStyle(window.scrollY > 150);
    };

    window.addEventListener("scroll", scrollCheck);

    return () => {
      window.removeEventListener("scroll", scrollCheck);
    };
  }, []);

  // useEffect(async () => {
  //   try {
  //     const res = await axios.get(`${process.env.REACT_APP_API}/cart/`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     if (res.data.data.products.length > 0) {
  //       setCartItemQuan(res.data.data.products.length);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [isLogin]);

  const handleNavigateCard = () => {
    navigate("/cart");
  };

  const handleNavigateAccount = () => {
    navigate("/profile-page/dashboard");
  };

  const handleNavigateDashboardAdmin = () => {
    navigate("/admin");
  };

  const handleNavigateProductSection = () => {
    navigate("/", { state: { scroll: true } });
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    dispatch(signOut());
    navigate("/auth");
  };
  console.log(user);
  return (
    <header className={clsx({ scrollShow: headerScrollStyle })}>
      <div className="container">
        <div className="header-main">
          <div className="nav">
            <div className="img-box logoBox">
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
              {isLogin && (
                <li className="item" onClick={handleLogOut}>
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
              {/* {isLoggedin && <div className="number">{cartItemQuan}</div>} */}
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
