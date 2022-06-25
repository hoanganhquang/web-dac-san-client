import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import AdditionModal from "./Modal/AdditionModal";
import DeletionModal from "./Modal/DeletionModal";
import EditionModal from "./Modal/EditionModal";

import "./Product.scss";

export default function Product() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDelModal, setshowDelModal] = useState(false);
  const [showEditModal, setshowEditModal] = useState(false);
  const [regions, setRegions] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [provinceId, setProvinceId] = useState();
  const [dataEditForm, setDataEditForm] = useState({});
  const [idProductDelete, setIdProductDelete] = useState();
  const { token } = useSelector((state) => state.auth);

  const handleShowAddModal = () => {
    setShowAddModal(!showAddModal);
  };

  const handleShowDelModal = () => {
    setshowDelModal(!showDelModal);
  };

  const handleShowEditModal = () => {
    setshowEditModal(!showEditModal);
  };

  const handleFetchProvinces = (e) => {
    if (e.target.value == "none") return toast.error("Chọn vùng miền");
    setLoading(true);
    const provincesArr = regions.find((item) => item._id == e.target.value);
    setProvinces(provincesArr.provinces);
    setLoading(false);
  };

  const handleFetchProducts = async (e) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/product/province/${e.target.value}`
      );
      setProvinceId(e.target.value);
      setProducts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/region`);

      setRegions(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(async () => {
    if (refresh) {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API}/product/province/${provinceId}`
        );
        setProducts(res.data.data);
        setRefresh(false);
      } catch (error) {
        console.log(error);
      }
    }
  }, [refresh]);

  return (
    <div className="product">
      <AdditionModal
        handleShowAddModal={handleShowAddModal}
        showAddModal={showAddModal}
        provinceId={provinceId}
        token={token}
        setRefresh={setRefresh}
      />

      <DeletionModal
        showDelModal={showDelModal}
        handleShowDelModal={handleShowDelModal}
        setRefresh={setRefresh}
        token={token}
        idProductDelete={idProductDelete}
      />

      <EditionModal
        handleShowEditModal={handleShowEditModal}
        showEditModal={showEditModal}
        setDataEditForm={setDataEditForm}
        dataEditForm={dataEditForm}
        token={token}
        setRefresh={setRefresh}
      />

      <h1 className="title">Sản phẩm</h1>

      <p className="addBtn" onClick={handleShowAddModal}>
        Thêm
      </p>

      <select className="input" onChange={handleFetchProvinces}>
        <option value="none">-- Chọn --</option>
        {regions.map((region) => {
          return (
            <option value={region._id} key={region._id}>
              {region.name}
            </option>
          );
        })}
      </select>

      <select
        className="input"
        disabled={loading}
        onChange={handleFetchProducts}
      >
        <option value="none">-- Chọn --</option>

        {provinces.map((provinces) => {
          return (
            <option value={provinces._id} key={provinces._id}>
              {provinces.name}
            </option>
          );
        })}
      </select>

      <table>
        <thead>
          <tr>
            <th className="name">Tên</th>
            <th>Mô tả</th>
            <th>Giá tiền</th>
            <th>Trong kho</th>
            <th>Hình ảnh</th>
            <th className="func"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product._id}>
                <td className="name">{product.name}</td>
                <td className="desc">
                  <span>{product.description}</span>
                </td>
                <td>{product.price}</td>
                <td>{product.quantityInStock}</td>
                <td className="img">
                  <img src={`http://localhost:3000/${product.image}`} alt="" />
                </td>
                <td className="table-func func">
                  <span>
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => {
                        setIdProductDelete(product._id);
                        handleShowDelModal();
                      }}
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={faEdit}
                      onClick={() => {
                        setDataEditForm({
                          _id: product._id,
                          name: product.name,
                          description: product.description,
                          price: product.price,
                          quantityInStock: product.quantityInStock,
                          image: product.image,
                        });
                        handleShowEditModal();
                      }}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
