import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminUpload.css";
//import { PiFunctionDuotone } from "react-icons/pi";

const API = "https://localhost:7082";

function AdminUpload() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("women");
  const [files, setFiles] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [filterCategory, setFilterCategory] = useState("all");
  const [subCategory, setSubCategory] = useState("");

  const [isNewArrival, setIsNewArrival] = useState(false);
  const [isFeatured, setIsFeatured] = useState(false);

  const fileInputRef = useRef();

  useEffect(() => {
    const admin = localStorage.getItem("admin");

    if (!admin) {
      navigate("/admin/login");
    }

    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get(`${API}/api/Products`).then((res) => setProducts(res.data));
  };

  const uploadImage = async () => {
    const uploaded = [];

    for (let file of files) {
      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post(`${API}/api/upload`, formData);

      uploaded.push(res.data);
    }
    setUploadedImages(uploaded);
  };

  const saveProduct = async () => {
    const newProduct = {
      Name: name,
      Price: price,
      Category: category,
      SubCategory: subCategory,
      Images: JSON.stringify(uploadedImages),
      IsNewArrival: isNewArrival,
      IsFeatured: isFeatured,
    };

    await axios.post(`${API}/api/Products`, newProduct);

    alert("Product Saved!");

    setName("");
    setPrice("");
    setCategory("women");
    setFiles([]);
    setUploadedImages([]);
    fileInputRef.current.value = "";

    fetchProducts();
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/api/Products/${id}`);
    fetchProducts();
  };

  const updateProduct = async () => {
    await axios.put(
      `https://localhost:7082/api/Products/${editingProduct.id}`,
      editingProduct,
    );

    setEditingProduct(null);
    fetchProducts();
  };

  const filteredProducts =
    filterCategory === "all"
      ? products
      : products.filter((p) => p.category === filterCategory);

  return (
    <div className="admin-container">

      {editingProduct && (
        <div className="edit-overlay">
          <div className="edit-popup">
            <h3>Edit Product</h3>
           
           <label className="edit-label">Product Name</label>
            <input
              value={editingProduct.name}
              onChange={(e) =>
                setEditingProduct({
                  ...editingProduct,
                  name: e.target.value,
                })
              }
              />
          
          <label className="edit-label">Price</label>
          <input
            value={editingProduct.price}
            onChange={(e) =>
              setEditingProduct({
                ...editingProduct,
                price: e.target.value,
              })
            }
          />

            <div className="edit-buttons">
              <button className="save-btn" onClick={updateProduct}>
                Update
              </button>

            <button
            className="delete-btn"
            onClick={() => setEditingProduct(null)}
            >
              Cancel
            </button>
            </div>
            </div>
           </div>
      )}

      <div className="admin-form">
        <h2>Add Product</h2>
        <input
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /> <br />
        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Section</option>
          <option value="women">Women</option>
          <option value="accessories">Accessories</option>
          <option value="kids">Kids</option>
        </select>
        <select
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="sarees">Sarees</option>
          <option value="anarkali">Anarkali</option>
          <option value="kurtis">Kurtis</option>
          <option value="salwar-suits">Salwar Suits</option>
          <option value="dupatta">Dupatta</option>
          <option value="lehengas">Lehengas</option>
          <option value="gowns">Gowns</option>
          <option value="ethnic-sets">Ethnic Sets</option>
        </select>
        <br />
        <br />
        <div className="checkbox-row">
          <div className="checkbox-group">
            <input
              type="checkbox"
              checked={isNewArrival}
              onChange={(e) => setIsNewArrival(e.target.checked)}
              />
            <label>New Arrival</label>
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              checked={isFeatured}
              onChange={(e) => setIsFeatured(e.target.checked)}
            />
            <label>Featured Product</label>
          </div>
        </div>
        <br /> <br />
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={(e) => setFiles(e.target.files)}
          />
        <br /> <br />
        <button className="upload-btn" onClick={uploadImage}>
          Upload Images
        </button>
        <br /> <br />
        <button className="save-btn" onClick={saveProduct}>
          Save Product
        </button>
        <br /> <br />
        <div className="preview-images">
          {uploadedImages.map((img, index) => (
            <img key={index} src={img} width="120" />
          ))}
        </div>
        <hr />
        <h2>Modify Products</h2>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="women">Women</option>
          <option value="accessories">Accessories</option>
          <option value="kids">Kids</option>
        </select>
        <br />
        <br />
        <div className="products-grid-admin">
          {filteredProducts.map((p) => {
            const imgs = JSON.parse(p.images);

            return (
              <div key={p.id} className="product-card-admin">
                <img src={imgs[0]} width="150" />
                <h4>{p.name}</h4>

                <div className="admin-card-buttons">
                  <button
                    className="edit-btn"
                    onClick={() => setEditingProduct(p)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteProduct(p.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AdminUpload;
