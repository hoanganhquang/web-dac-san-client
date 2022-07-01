import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./DetailPage.scss";

function DetailPage() {
  // const price1 = price.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const [product, setProduct] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const param = useParams();
  const { isLoggedin, token } = useSelector((state) => state.auth);

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
    setTotalPrice(product.price * e.target.value);
  };

  const handleAddToCart = async () => {
    if (!isLoggedin) {
      toast.error("Bạn cần đăng nhập");
    } else {
      try {
        if (quantity <= 0) return toast.error("Số lượng không phù hợp!");
        await axios.post(
          `${process.env.REACT_APP_API}/carts/`,
          {
            _id: product._id,
            name: product.name,
            price: product.price,
            quantity,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        toast.success("Đã thêm vào giỏ hàng");
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/products/${param.id}`
      );

      setProduct(res.data.data);
      setTotalPrice(res.data.data.price);
    } catch (error) {
      console.log(error);
    }
  }, [param.id]);

  return (
    <main>
      <section className="detail">
        <div className="container">
          {product && (
            <div className="detail-main">
              <div className="header">
                <div className="title-box">
                  <div className="img-box">
                    <img
                      src={require("../../assets/images/LogoItem.png")}
                      alt=""
                    />
                  </div>

                  <h1 className="title">{product.name}</h1>
                </div>
              </div>

              <div className="body">
                <div className="info-box">
                  <div className="img-box">
                    <img
                      src={`http://localhost:3000/${product.image}`}
                      alt=""
                    />
                  </div>

                  <p className="desc">{product.description}</p>
                </div>

                <div className="product-info-card">
                  <div className="card-header">
                    <p className="price-text">Giá sản phẩm</p>
                    <p className="price-number">
                      {product.price} <span className="vnd">VND</span>
                    </p>
                  </div>
                  <div className="card-body">
                    <div className="price-detail">
                      <p className="price-text">Số lượng</p>
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) => {
                          handleQuantity(e);
                        }}
                        min={1}
                      />
                    </div>
                    <div className="price-detail">
                      <p>Tổng tiền hàng</p>
                      <p>
                        {totalPrice} <span className="vnd">VND</span>
                      </p>
                    </div>
                    {/* <div className="price-detail">
                    <p>Phí vận chuyển</p>
                    <p>
                      20000 <span className="vnd">VND</span>
                    </p>
                  </div> */}
                  </div>
                  <div className="card-footer">
                    <button className="primaryBtn" onClick={handleAddToCart}>
                      ADD TO CARD
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default DetailPage;
