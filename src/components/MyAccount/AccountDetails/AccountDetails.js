import { useSelector } from "react-redux";
import "../AccountDetails/AccountDetails.scss";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AccountDetails = () => {
  const { user, token } = useSelector((state) => state.auth);
  const [info, setInfo] = useState({});
  const [infoPassword, setInfoPassword] = useState({
    curPass: "",
    newPass: "",
    confPass: "",
  });

  const handleChangeInfo = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API}/user`, info, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Cập nhật thành công");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangePassword = async () => {
    if (infoPassword.newPass != infoPassword.confPass)
      return toast.error("Mật khẩu xác nhận không chính xác");

    try {
      await axios.patch(`${process.env.REACT_APP_API}/user`, infoPassword, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Thay đổi thành công");
      setInfoPassword({
        curPass: "",
        newPass: "",
        confPass: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Thay đổi thất bại");
    }
  };

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
                <input
                  type="text"
                  className="input"
                  defaultValue={user.name}
                  onChange={(e) =>
                    setInfo((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
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
                  onChange={(e) =>
                    setInfo((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>
            </div>
            <div className="info-items">
              <div className="info-title">
                <p>Số điện thoại</p>
              </div>
              <div className="info-content">
                <input
                  type="text"
                  className="input"
                  defaultValue={user.phone}
                  onChange={(e) =>
                    setInfo((prev) => ({ ...prev, phone: e.target.value }))
                  }
                />
              </div>
            </div>
            <div className="info-items">
              <div className="info-title">
                <p>Địa chỉ</p>
              </div>
              <div className="info-content">
                <input
                  type="text"
                  className="input"
                  defaultValue={user.address}
                  onChange={(e) =>
                    setInfo((prev) => ({ ...prev, address: e.target.value }))
                  }
                />
              </div>
            </div>
          </div>
          <div className="account-details-button">
            <button
              className="btn-account-details button primaryBtn"
              onClick={handleChangeInfo}
            >
              Lưu
            </button>
            {/* <button className="btn-account-details button secondaryBtn">
              Xóa
            </button> */}
          </div>
          <div className="change-password">
            <div className="change-password-title">
              <p>Đổi mật khẩu</p>
            </div>
            <div className="change-password-form">
              <div>
                <div className="change-password-input">
                  <p className="info-title">Mật khẩu hiện tại</p>
                  <input
                    type="text"
                    className="input"
                    value={infoPassword.curPass}
                    onChange={(e) => {
                      setInfoPassword((prev) => ({
                        ...prev,
                        curPass: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="change-password-input">
                  <p className="info-title">Mật khẩu mới</p>
                  <input
                    type="text"
                    className="input"
                    value={infoPassword.newPass}
                    onChange={(e) => {
                      setInfoPassword((prev) => ({
                        ...prev,
                        newPass: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="change-password-input">
                  <p className="info-title">Xác nhận mật khẩu</p>
                  <input
                    type="text"
                    className="input"
                    value={infoPassword.confPass}
                    onChange={(e) => {
                      setInfoPassword((prev) => ({
                        ...prev,
                        confPass: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="change-password-button">
                  <button
                    className="btn-change-pass button primaryBtn"
                    onClick={handleChangePassword}
                  >
                    Lưu
                  </button>
                  {/* <button className="btn-change-pass button secondaryBtn">
                    Xóa
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
