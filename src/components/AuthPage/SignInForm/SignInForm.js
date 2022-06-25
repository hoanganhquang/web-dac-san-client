import { useEffect, useState } from "react";
import "./SignInForm.scss";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignInForm(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { token, isLogin } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLogin) {
      toast.success("Đăng nhập thành công");
      navigate("/");
    }
  }, [isLogin]);
  const handleLogin = () => {
    if (userName && password) {
      dispatch(signIn({ userName, password }));
    } else {
      toast.warning("Vui lòng không để trống thông tin");
      return;
    }
  };
  return (
    <div className="signInForm form" data-aos="fade-right">
      <h1>Đăng nhập</h1>

      <div className="form-control">
        <p className="input-title">Tài khoản</p>
        <input
          type="text"
          name=""
          className="input"
          placeholder="example@email.com"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className="form-control">
        <p className="input-title">Mật khẩu</p>
        <input
          type="password"
          name=""
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="form-footer">
        <button className="primaryBtn" onClick={handleLogin}>
          Đăng nhập
        </button>

        <div className="remember">
          <input id="check" type="checkbox" />
          <label htmlFor="check">Nhớ tài khoản</label>
        </div>
      </div>

      <p className="form-link" onClick={props.onForgotTab}>
        Quên mật khẩu?
      </p>
    </div>
  );
}

export default SignInForm;
