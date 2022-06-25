import "./ForgotPassForm.scss";

function ForgotPassForm(props) {
  return (
    <div className="forgotPassForm form">
      <h1 className="forgot-title">Quên mật khẩu</h1>

      <p className="desc">
        Quên mật khẩu? Nhập email của bạn và kiểm tra đường link trong email
      </p>

      <div className="form-control">
        <p className="input-title">Email</p>
        <input
          type="text"
          name=""
          className="input"
          placeholder="example@email.com"
        />
      </div>

      <div className="form-footer">
        <button className="primaryBtn">Gửi</button>
      </div>

      <p className="form-link" onClick={props.onForgotTab}>
        Đăng nhập/Đăng ký
      </p>
    </div>
  );
}

export default ForgotPassForm;
