import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import clsx from "clsx";
import { toast } from "react-toastify";

export default function AdditionModal(props) {
  const handleAddProduct = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    form.append("province", props.provinceId);
    try {
      await axios.post(`${process.env.REACT_APP_API}/products`, form, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${props.token}`,
        },
      });
      toast.success("Thêm thành công");
      props.setRefresh(true);
      props.handleShowAddModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={clsx("modal", "product-modal", { show: props.showAddModal })}
    >
      <div className="modal-box">
        <div className="modal-header">
          <h1 className="modal-title">Thêm sản phẩm</h1>
          <FontAwesomeIcon icon={faClose} onClick={props.handleShowAddModal} />
        </div>

        <div className="modal-body">
          <form
            id="addForm"
            encType="multipart/form-data"
            onSubmit={handleAddProduct}
          >
            <div className="form-control">
              <label htmlFor="">Tên sản phẩm</label> <br />
              <input type="text" className="input" name="name" />
            </div>
            <div className="form-control">
              <label htmlFor="">Mô tả</label> <br />
              <input type="text" className="input" name="description" />
            </div>
            <div className="form-control">
              <label htmlFor="">Giá tiền</label> <br />
              <input type="number" className="input" name="price" />
            </div>
            <div className="form-control">
              <label htmlFor="">Hàng trong kho</label> <br />
              <input type="text" className="input" name="quantityInStock" />
            </div>
            <div className="form-control">
              <label htmlFor="">Hình ảnh</label> <br />
              <input type="file" name="image" />
            </div>
            <button className="primaryBtn" type="submit">
              Thêm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
