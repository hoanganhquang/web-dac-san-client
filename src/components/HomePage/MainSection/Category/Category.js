import Subscribe from "../Subscribe/Subscribe";
import "./Category.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";

function Category(props) {
  const [regions, setRegions] = useState([]);

  useEffect(async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/regions`);

      setRegions(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="category" data-aos="fade-right">
      <div className="category-box">
        <div className="category-header">
          <p className="title">Địa phương</p>
        </div>
        <div className="category-body">
          <div className="category-list">
            {regions.map((region) => {
              return (
                <div
                  className="category-item"
                  key={region._id}
                  onClick={(e) => {
                    e.currentTarget.classList.toggle("active");
                  }}
                >
                  <div className="text-box">
                    {region.name}
                    <FontAwesomeIcon icon={faCaretRight} />
                  </div>
                  <ul className="province-list">
                    {region.provinces.map((province) => {
                      return (
                        <li
                          key={province._id}
                          onClick={() => {
                            props.onSetProducts(
                              province._id,
                              province.name,
                              region.name
                            );
                          }}
                        >
                          <a>{province.name}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Subscribe />
    </div>
  );
}

export default Category;
