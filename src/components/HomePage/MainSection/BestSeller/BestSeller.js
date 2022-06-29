import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BestSeller() {
  const [allProd, setAllProd] = useState([]);
  const navigate = useNavigate();
  const handleNavigateToDetails = (id) => {
    navigate(`/products/${id}`, { replace: false });
  };

  useEffect(async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/products/`);
      let data = res.data.data.sort(() => 0.5 - Math.random());
      data = data.slice(0, 8);
      setAllProd(data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <section className="bestSeller" data-aos="fade-right">
      <div className="container">
        <div className="text-box">
          <h1 className="title">NỔI BẬT</h1>
          <p className="desc">Một số sản phẩm nổi bật</p>
        </div>

        <div className="prod-list">
          {allProd.length > 0 &&
            allProd.map((item) => {
              return (
                <div
                  className="prod-item"
                  key={item._id}
                  onClick={() => {
                    handleNavigateToDetails(item._id);
                  }}
                >
                  <div className="product-item">
                    <div className="img-box">
                      <img src={`http://localhost:3000/${item.image}`} alt="" />
                    </div>

                    <div className="product-desc">
                      <h5 className="title">{item.name}</h5>
                      <p className="desc">{item.description}</p>
                      <p className="price">{item.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
