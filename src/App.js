import "./styles/index.scss";

import aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Admin, AuthPage, Footer, Header, HomePage } from "./components";
import ProfilePage from "./components/MyAccount/ProfilePage/ProfilePage";
import Cart from "./components/Cart/Cart";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "./store/authSlice";

function App() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  const checkAuthForRender = (component) => {
    if (token) {
      return component;
    } else {
      return <AuthPage />;
    }
  };

  useEffect(async () => {
    dispatch(getCurrentUser(token));
  }, [token]);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/cart" element={checkAuthForRender(<Cart />)} />
          <Route
            path="/profile-page/*"
            element={checkAuthForRender(<ProfilePage />)}
          />
          <Route path="/admin/*" element={checkAuthForRender(<Admin />)} />
        </Routes>
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
