import "./styles/index.scss";

import aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import {
  Admin,
  AuthPage,
  DetailPage,
  ErrorPage,
  Footer,
  Header,
  HomePage,
} from "./components";
import ProfilePage from "./components/MyAccount/ProfilePage/ProfilePage";
import Cart from "./components/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCurrentUser } from "./redux/authSlice";

function App() {
  const { isLoggedin, token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  // useEffect(() => {
  //   dispatch(getCurrentUser(token));
  // }, [isLoggedin]);

  useEffect(() => {
    if (isLoggedin) {
      toast.success("Đã đăng nhập");
    }
  }, [isLoggedin]);

  return (
    <div className="App" id="App" style={{ overflow: "hidden" }}>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<DetailPage />} />
          {isLoggedin ? (
            <>
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile-page/*" element={<ProfilePage />} />
              {user.role === "Admin" && (
                <Route path="/admin/*" element={<Admin />} />
              )}
              <Route path="/auth" element={<Navigate replace to="/" />} />
            </>
          ) : (
            <>
              <Route path="/cart" element={<Navigate replace to="/auth" />} />
              <Route
                path="/profile-page/*"
                element={<Navigate replace to="/auth" />}
              />
              <Route path="/auth" element={<AuthPage />} />
            </>
          )}
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
