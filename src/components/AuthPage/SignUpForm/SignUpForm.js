import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../../redux/authSlice";
import "./SignUpForm.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
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
      toast.error("Thông tin đăng ký không hợp lệ");
    } else {
      dispatch(signUp({ email, password }));
    }
  };

  return (
    <div className="SignUpForm form" data-aos="fade-left">
      <h1>Đăng ký</h1>

      <div className="form-control">
        <p className="input-title">Tài khoản đăng ký</p>
        <input
          type="text"
          name=""
          className="input"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => handleEmailInput(e)}
        />
      </div>

      <div className="form-control">
        <p className="input-title">Mật khẩu</p>
        <input
          type="password"
          name=""
          className="input"
          value={password}
          onChange={(e) => handlePasswordInput(e)}
        />
      </div>

      <div className="form-footer">
        <button className="primaryBtn" onClick={handleSubmitForm}>
          Đăng ký
        </button>
      </div>
    </div>
  );
}

export default SignUpForm;
