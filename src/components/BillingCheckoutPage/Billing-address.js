function BillingAddress() {
  return (
    <div className="billing-address">
      <div className="title">Địa chỉ đặt hàng</div>
      <p className="edit-btn">Chỉnh sửa</p>
      <div className="address box-list">
        <div className="item">
          <p className="item-title">Tên</p>
          <p className="item-info">Sabri</p>
        </div>
        <div className="item">
          <p className="item-title">Số điện thoại</p>
          <p className="item-info">Sabri</p>
        </div>
        <div className="item">
          <p className="item-title">Địa chỉ</p>
          <p className="item-info">Sabri</p>
        </div>
      </div>
    </div>
  );
}

export default BillingAddress;
