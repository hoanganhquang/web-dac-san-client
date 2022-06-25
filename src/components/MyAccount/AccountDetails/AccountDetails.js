import { useSelector } from "react-redux";
import "./AccountDetails.scss";

const AccountDetails = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="container">
      <div className="account-details">
        <div className="account-details-title">
          <div className="title">
            <p>Thông tin tài khoản</p>
          </div>
        </div>
        <div className="account-details-content">
          <div className="account-details-info">
            <div className="info-items">
              <div className="info-title">
                <p>Tên</p>
              </div>
              <div className="info-content">
                <input type="text" className="input" />
              </div>
            </div>
            <div className="info-items">
              <div className="info-title">
                <p>Email</p>
              </div>
              <div className="info-content">
                <input
                  type="text"
                  className="input"
                  defaultValue={user.email}
                />
              </div>
            </div>
            <div className="info-items">
              <div className="info-title">
                <p>Số điện thoại</p>
              </div>
              <div className="info-content">
                <input type="text" className="input" />
              </div>
            </div>
            <div className="info-items">
              <div className="info-title">
                <p>Địa chỉ</p>
              </div>
              <div className="info-content">
                <input type="text" className="input" />
              </div>
            </div>
          </div>
          <div className="account-details-button">
            <button className="btn-account-details button primaryBtn">
              Lưu
            </button>
            <button className="btn-account-details button secondaryBtn">
              Xóa
            </button>
          </div>
          <div className="change-password">
            <div className="change-password-title">
              <p>Đổi mật khẩu</p>
            </div>
            <div className="change-password-form">
              <form>
                <div className="change-password-input">
                  <p className="info-title">Mật khẩu hiện tại</p>
                  <input type="text" className="input" />
                </div>
                <div className="change-password-input">
                  <p className="info-title">Mật khẩu mới</p>
                  <input type="text" className="input" />
                </div>
                <div className="change-password-input">
                  <p className="info-title">Xác nhận mật khẩu</p>
                  <input type="text" className="input" />
                </div>
                <div className="change-password-button">
                  <button className="btn-change-pass button primaryBtn">
                    Lưu
                  </button>
                  <button className="btn-change-pass button secondaryBtn">
                    Xóa
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
