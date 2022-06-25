import "./SignUpForm.scss";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../../../store/authSlice";
import { toast } from "react-toastify";

function SignUpForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isSignUp } = useSelector((state) => state.auth);
  const handleSignUp = () => {
    if (userName && password) {
      dispatch(signUp({ userName, password }));
    } else {
      toast.warning("Vui lòng không để trống thông tin");
      return;
    }
  };
  useEffect(() => {
    if (isSignUp) {
      toast.success("Đăng ký thành công");
    }
  }, [isSignUp]);
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
        <button className="primaryBtn" onClick={handleSignUp}>
          Đăng ký
        </button>
      </div>
    </div>
  );
}

export default SignUpForm;
