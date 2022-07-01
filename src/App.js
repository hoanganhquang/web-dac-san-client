import "./styles/index.scss";

import aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AuthPage, ErrorPage, Footer, Header } from "./components";
import { useDispatch, useSelector } from "react-redux";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { routes } from "./routes/routerConfig";
import { getInfo } from "./redux/authSlice";

function App() {
  const { isLoggedin, token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    aos.init({ duration: 1000 });
    dispatch(getInfo(token));
  }, []);

  useEffect(() => {
    if (isLoggedin) {
      dispatch(getInfo(token));
      toast.success("Đã đăng nhập");
    }
  }, [isLoggedin]);

  return (
    <div className="App" id="App" style={{ overflow: "hidden" }}>
      <div className="wrapper">
        <Header />
        <Routes>
          {routes.map((route, index) => {
            let Element = <route.component />;

            if (route.isLoggedin === isLoggedin) {
              Element = <AuthPage />;
            }

            if (route.restricted === isLoggedin) {
              Element = <Navigate replace to="/" />;
            }

            if (route?.admin == false) {
              if (user?.role?.toLowerCase() !== "admin") {
                Element = <ErrorPage />;
              }
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
