import close from "../../assets/icons/close.svg";

function Order() {
  return (
    <div className="order">
      <p className="title">Đơn hàng</p>

      <div className="order-list box-list">
        <div className="order-item item">
          <div className="item-name-box">
            <div className="img-box">
              <img src={require("../../assets/images/LogoItem.png")} alt="" />
            </div>
            <p className="item-name">Dâu tây</p>
          </div>

          <img src={close} alt="" className="closeBtn" />
        </div>
        <div className="order-item item">
          <div className="item-name-box">
            <div className="img-box">
              <img src={require("../../assets/images/LogoItem.png")} alt="" />
            </div>
            <p className="item-name">Dâu tây</p>
          </div>

          <img src={close} alt="" className="closeBtn" />
        </div>
        <div className="order-item item">
          <div className="item-name-box">
            <div className="img-box">
              <img src={require("../../assets/images/LogoItem.png")} alt="" />
            </div>
            <p className="item-name">Dâu tây</p>
          </div>

          <img src={close} alt="" className="closeBtn" />
        </div>
        <div className="order-item item">
          <div className="item-name-box">
            <div className="img-box">
              <img src={require("../../assets/images/LogoItem.png")} alt="" />
            </div>
            <p className="item-name">Dâu tây</p>
          </div>

          <img src={close} alt="" className="closeBtn" />
        </div>
      </div>

      <div className="price-total">
        <div className="detail ">
          <p className="detail-title">Tổng giá</p>

          <p className="detail-price">100000</p>
        </div>
        <div className="detail">
          <p className="detail-title">Phí vận chuyển</p>

          <p className="detail-price">20000</p>
        </div>
        <div className="detail detail-total">
          <p className="detail-title">Tổng đơn hàng </p>

          <p className="detail-price">20000</p>
        </div>

        <div className="features">
          <div className="check-terms">
            <input type="checkbox" name="" id="" />
            <p>Đã đọc và đồng ý với điều khoản và điều kiện mua hàng</p>
          </div>

          <button className="primaryBtn">Đặt hàng</button>
        </div>
      </div>
    </div>
  );
}

export default Order;
