import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import clsx from "clsx";
import { toast } from "react-toastify";

export default function DeletionModal(props) {
  const handleDeleteProduct = async () => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API}/products/${props.idProductDelete}`,
        {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        }
      );
      props.handleShowDelModal();
      props.setRefresh(true);
      toast.success("Xoá thành công!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={clsx("modal", "delModal", { show: props.showDelModal })}>
      <div className="modal-box">
        <div className="modal-header">
          <h1 className="modal-title">Bạn chắc chắn muốn xoá?</h1>
          <FontAwesomeIcon icon={faClose} onClick={props.handleShowDelModal} />
        </div>

        <div className="modal-body">
          <button className="primaryBtn" onClick={handleDeleteProduct}>
            Xoá
          </button>
          <button className="secondaryBtn" onClick={props.handleShowDelModal}>
            Huỷ
          </button>
        </div>
      </div>
    </div>
  );
}
