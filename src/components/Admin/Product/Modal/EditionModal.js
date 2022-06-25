import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import clsx from "clsx";
import { toast } from "react-toastify";

export default function EditionModal(props) {
  const handleUpdateProduct = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    form.append("_id", props.dataEditForm._id);

    try {
      await axios.patch(`${process.env.REACT_APP_API}/product`, form, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${props.token}`,
        },
      });
      toast.success("Cập nhật thành công");
      props.setRefresh(true);
      props.handleShowEditModal();
    } catch (error) {
      console.log(error);
      toast.error("Cập nhật thất bại");
    }
  };

  return (
    <div
      className={clsx("modal", "product-modal", "editModal", {
        show: props.showEditModal,
      })}
    >
      <div className="modal-box">
        <div className="modal-header">
          <h1 className="modal-title">Chỉnh sửa</h1>
          <FontAwesomeIcon icon={faClose} onClick={props.handleShowEditModal} />
        </div>

        <div className="modal-body">
          <form
            action=""
            encType="multipart/form-data"
            onSubmit={handleUpdateProduct}
          >
            <div className="form-control">
              <label htmlFor="">Tên sản phẩm</label> <br />
              <input
                type="text"
                className="input"
                name="name"
                defaultValue={props.dataEditForm.name}
                onChange={(e) => {
                  props.setDataEditForm((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="form-control">
              <label htmlFor="">Mô tả</label> <br />
              <input
                type="text"
                className="input"
                name="description"
                defaultValue={props.dataEditForm.description}
                onChange={(e) => {
                  props.setDataEditForm((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="form-control">
              <label htmlFor="">Giá tiền</label> <br />
              <input
                type="number"
                className="input"
                name="price"
                defaultValue={props.dataEditForm.price}
                onChange={(e) => {
                  props.setDataEditForm((prev) => ({
                    ...prev,
                    price: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="form-control">
              <label htmlFor="">Hàng trong kho</label> <br />
              <input
                type="text"
                className="input"
                name="quantityInStock"
                defaultValue={props.dataEditForm.quantityInStock}
                onChange={(e) => {
                  props.setDataEditForm((prev) => ({
                    ...prev,
                    quantityInStock: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="form-control">
              <label htmlFor="">Hình ảnh</label> <br />
              <input type="file" name="image" />
            </div>
            <button className="primaryBtn" type="submit">
              Cập nhật
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
