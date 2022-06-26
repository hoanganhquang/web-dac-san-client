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
import { RouterConfig, routes } from "./routes/routerConfig";

function App() {
  // const { isLoggedin, token } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();

  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  // // useEffect(() => {
  // //   dispatch(getCurrentUser(token));
  // // }, [isLoggedin]);

  // useEffect(() => {
  //   if (isLoggedin) {
  //     toast.success("Đã đăng nhập");
  //   }
  // }, [isLoggedin]);

  return (
    <div className="App" id="App" style={{ overflow: "hidden" }}>
      <div className="wrapper">
        <Header />
        <Routes>
          {routes.map((route, index) => {
            let Element = <route.component />;

            if (route.isLoggedin === false) {
              Element = <AuthPage />;
            }

            if (route.restricted === false) {
              Element = <Navigate replace to="/" />;
            }

            if (route.admin === false) {
              Element = <ErrorPage />;
            }

            return <Route key={index} path={route.path} element={Element} />;
          })}
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
