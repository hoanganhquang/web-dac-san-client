import "./Subscribe.scss";

function Subscribe() {
  return (
    <div className="subscribe">
      <div className="subscribe-header">
        <h5 className="title">Theo dõi bản tin</h5>
        <p className="desc">Nhận những thông tin mới nhất về cửa hàng</p>
      </div>

      <div className="subscribe-body">
        <input type="text" className="input" placeholder="Email của bạn" />
        <button className="secondaryStrokeBtn">ĐĂNG KÝ</button>
      </div>
    </div>
  );
}

export default Subscribe;
