import "./MainSection.scss";
import Category from "./Category/Category";
import Product from "./Product/Product";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import BestSeller from "./BestSeller/BestSeller";

function MainSection() {
  const [products, setProducts] = useState([]);
  const [region, setRegion] = useState({});
  const location = useLocation();

  const handleSetProvince = async (provinceId, provinceName, region) => {
    setRegion({ provinceId, provinceName, region });
  };

  useEffect(async () => {
    if (location.state) {
      window.scrollTo(0, 1770);
    }
  }, []);

  useEffect(async () => {
    if (region.provinceId) {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API}/product/province/${region.provinceId}`
        );

        setProducts(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [region.provinceId]);

  return (
    <>
      <BestSeller />
      <section className="main" id="products">
        <div className="container">
          <div className="main-main">
            <Category onSetProducts={handleSetProvince} />
            <Product
              products={products}
              region={{
                regionName: region.region,
                provinceName: region.provinceName,
              }}
            />
          </div>
        </div>
      </section>
      <section className="intro">
        <div className="container">
          <div className="intro-main">
            <div className="content" data-aos="fade-right">
              <h1 className="title">We build apps and websites</h1>
              <p className="desc">
                From multipurpose themes to niche templates, you’ll always find
                something that catches your eye.
              </p>
              <div className="button-box">
                <button className="primaryBtn">Liên hệ</button>
                <p>or see our portfolio</p>
              </div>
            </div>

            <div className="img-box" data-aos="fade-left">
              <img src={require("../../../assets/images/intro.jpg")} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainSection;
