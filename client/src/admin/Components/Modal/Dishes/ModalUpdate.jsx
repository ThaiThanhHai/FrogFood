import Axios from "axios";
import { useState, useEffect } from "react";
import { storage } from "../../../Helper/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./modalDish.css";
import LoaderModal from "../../Loader/LoaderModal";

const ModalUpdate = ({ Dishes, idUpdate, setIsShow }) => {
  toast.configure();
  let Dish = Dishes.filter((item) => item._id === idUpdate);

  const [isUpdateComplete, setIsUpdateComplete] = useState(false);
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState(Dish[0].category);
  const [newName, setNewName] = useState(Dish[0].name);
  const [newPrice, setNewPrice] = useState(Dish[0].price);

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

  const handleUpdateDish = async (url, data, type) => {
    try {
      await Axios.put(url, data, type);
      setIsUpdateComplete(false);
      setIsShow(false);
      toast.success("Cập nhật thành công");
    } catch (err) {
      console.log(err);
      toast.error("Có lỗi xảy ray, vui lòng thử lại!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUpdateComplete(true);
    const url = "/api/dishes/update";
    const type = {
      headers: { "Content-Type": "application/json" },
    };

    const img = e.target[4]?.files[0];

    if (!img) {
      let data = JSON.stringify({
        _id: idUpdate,
        category: newCategory,
        name: newName,
        price: newPrice,
        image: Dish[0].image,
      });

      //Call API
      handleUpdateDish(url, data, type);
    } else {
      const storageRef = ref(storage, `/categories/${img.name}`);
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            let data = JSON.stringify({
              _id: idUpdate,
              category: newCategory,
              name: newName,
              price: newPrice,
              image: downloadURL,
            });
            //Call API
            handleUpdateDish(url, data, type);
          });
        }
      );
    }
  };

  return isUpdateComplete ? (
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
            <span>Cập nhật món ăn</span>
            <select
              name="category"
              className="classic"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
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
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            required
          />

          <label htmlFor="price">Giá</label>
          <input
            type="number"
            name="price"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            required
          />

          <label htmlFor="image">Hình ảnh</label>
          <input
            style={{ border: "none" }}
            type="file"
            name="image"
            id="image"
          />

          <button type="submit">Cập nhật</button>
        </form>
      </div>
    </div>
  );
};

export default ModalUpdate;
