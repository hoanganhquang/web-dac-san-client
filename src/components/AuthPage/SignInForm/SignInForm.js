import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../../redux/authSlice";
import "./SignInForm.scss";
import { toast } from "react-toastify";
import { useState } from "react";

function SignInForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitForm = () => {
    if (email.trim() === "" || password.trim() === "") {
      toast.error("Thông tin đăng nhập không hợp lệ");
    } else {
      dispatch(signIn({ email, password }));
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
          onChange={(e) => handleEmailInput(e)}
        />
      </div>

      <div className="form-control">
        <p className="input-title">Mật khẩu</p>
        <input
          type="password"
          name=""
          className="input"
          onChange={(e) => handlePasswordInput(e)}
        />
      </div>

      <div className="form-footer">
        <button className="primaryBtn" onClick={handleSubmitForm}>
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
