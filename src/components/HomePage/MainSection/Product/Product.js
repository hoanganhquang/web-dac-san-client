import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

function Product(props) {
  const navigate = useNavigate();

  const handleNavigateToDetails = (id) => {
    navigate(`/products/${id}`, { replace: false });
  };

  return (
    <div className="products" data-aos="zoom-in">
      <div className="products-header">
        <h1 className="title">
          Sản phẩm{" "}
          {props.region.regionName && (
            <>
              <span>
                <FontAwesomeIcon icon={faAnglesRight} />
              </span>
              <span className="text">{props.region.regionName}</span>
              <span>
                <FontAwesomeIcon icon={faAnglesRight} />
              </span>
              <span className="text">{props.region.provinceName}</span>
            </>
          )}
        </h1>
      </div>
      <div className="product-list">
        {props.products.map((product) => {
          return (
            <div
              className="product-item"
              onClick={() => {
                handleNavigateToDetails(product._id);
              }}
              key={product._id}
            >
              <div className="img-box">
                <img src={`http://localhost:3000/${product.image}`} alt="" />
              </div>

              <div className="product-desc">
                <h5 className="title">{product.name}</h5>
                <p className="desc">{product.description}</p>
                <p className="price">{product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
