import "./HeroSection.scss";
import shipping from "../../../assets/icons/shipping.svg";
import refund from "../../../assets/icons/refund.svg";
import support from "../../../assets/icons/support.svg";

function HeroSection() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-main">
            <div className="content" data-aos="fade-right">
              <h1 className="title">Đặc Sản TFoods</h1>

              {/* <div className="search-form">
              <input type="text" className="input" />
              <button className="primaryBtn">TÌM KIẾM</button>
            </div> */}

              <p className="desc">
                Đến với cửa hàng bạn có thể tìm kiếm, mua sắm các loại đặc sản ở
                các địa phương với các sản phẩm đa dạng phong phú
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="intros">
        <div className="container" data-aos="fade-right">
          <div className="intro-item">
            <div className="img-box">
              <img src={shipping} alt="" />
            </div>

            <div className="intro-content">
              <div className="title">GIAO HÀNG MIỄN PHÍ</div>
            </div>
          </div>
          <div className="intro-item">
            <div className="img-box">
              <img src={refund} alt="" />
            </div>

            <div className="intro-content">
              <div className="title">100% HOÀN TIỀN</div>
            </div>
          </div>
          <div className="intro-item">
            <div className="img-box">
              <img src={support} alt="" />
            </div>

            <div className="intro-content">
              <div className="title">HỖ TRỢ 24/7</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
