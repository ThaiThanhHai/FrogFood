import Axios from "axios";
import { useState, useEffect } from "react";
import { storage } from "../../../Helper/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./modalDish.css";
import LoaderModal from "../../Loader/LoaderModal";

const ModalAdd = ({ setIsShow, setIsLoading, idDefault }) => {
  toast.configure();
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isAddComplete, setIsAddComplete] = useState(false);
  const [checkItemID, setcheckItemID] = useState(false);

  useEffect(() => {
    const handleGetCategory = async () => {
      try {
        const res = await Axios.get("/api/categories");
        setCategories(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    handleGetCategory();
  }, [categories]);

  const handleAddDish = async (url, data, type) => {
    try {
      await Axios.post(url, data, type);
      setIsAddComplete(false);
      setIsShow(false);
      toast.success("Thêm thành công");
    } catch (error) {
      setIsAddComplete(false);
      if (error.response.status === 409) {
        toast.error("Lỗi! Món ăn đã có trong CSDL");
      } else {
        toast.error("Có lỗi xảy ray, vui lòng thử lại!");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAddComplete(true);

    const img = e.target[4]?.files[0];
    if (!category) {
      toast.error("Lỗi! chưa chọn loại món");
      setIsAddComplete(false);
      return;
    }

    if (!img) {
      toast.error("Lỗi! chưa upload ảnh món ăn");
      setIsAddComplete(false);
      return;
    }
    const storageRef = ref(storage, `/dishes/${img.name}`);
    const uploadTask = uploadBytesResumable(storageRef, img);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          let url = "/api/dishes/create";
          let data = JSON.stringify({
            category: category,
            name: name,
            price: price,
            quantity: quantity,
            image: downloadURL,
          });
          let type = {
            headers: { "Content-Type": "application/json" },
          };
          // Axios
          handleAddDish(url, data, type);
          console.log(downloadURL);
        });
      }
    );
  };

  return isAddComplete ? (
    <LoaderModal />
  ) : (
    <div className="modal-add-dishes">
      <div className="modal-content-add-dishes">
        <div className="btn-exit" onClick={() => setIsShow(false)}>
          <span>X</span>
        </div>
        <h1 className="modal-title">Thêm loại món ắn</h1>

        <form method="post" onSubmit={(e) => handleSubmit(e)}>
          <div className="selectCategory">
            <span>Loại món ăn</span>
            <select
              name="category"
              className="classic"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" hidden>
                ---Chọn loại món---
              </option>
              {categories.map((item, index) => (
                <option value={item.id} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <label htmlFor="name">Tên món ăn</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="price">Giá</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <label htmlFor="quantity">Số lượng</label>
          <input
            type="number"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />

          <label htmlFor="image">Hình ảnh</label>
          <input
            style={{ border: "none" }}
            type="file"
            name="image"
            id="image"
          />

          <button type="submit">Thêm</button>
        </form>
      </div>
    </div>
  );
};

export default ModalAdd;
