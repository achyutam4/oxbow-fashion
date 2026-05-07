import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminUpload.css";
//import { PiFunctionDuotone } from "react-icons/pi";

const API = "https://mybackendapi123-d4e2fzh5gpbqhwfd.centralindia-01.azurewebsites.net";

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
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [isNewArrival, setIsNewArrival] = useState(false);
  const [isFeatured, setIsFeatured] = useState(false);

  const fileInputRef = useRef();

  useEffect(() => {
    const admin = localStorage.getItem("admin");

    if (!admin) {
      navigate("/admin");
    }

    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get(`${API}/api/Products`)
    .then((res) => setProducts(res.data))
    .catch(err => console.error((err)));
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
    setIsNewArrival(false);
    setIsFeatured(false);
    fileInputRef.current.value = "";

    fetchProducts();
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/api/Products/${id}`);
    fetchProducts();
  };

  const askDelete = (id) => {
     console.log("DELETE CLICKED:", id);
    setDeleteId(id);
    setShowConfirm(true); 
  };

  const confirmDelete = async () => {

      try{
         console.log("DELETE ID:", deleteId);

        const res = await axios.delete(`${API}/api/Products/${deleteId}`);

        console.log("SUCCESS:", res);

        setShowConfirm(false);
        setDeleteId(null);
        fetchProducts();

      }catch (err) {
        console.error("DELETE ERROR:",err);
      }
    };

  const updateProduct = async () => {
    try{
     await axios.put(
      `${API}/api/Products/${editingProduct.id}`,
      editingProduct
    );

    setEditingProduct(null);
    fetchProducts();
  } catch(err) {
    console.error(err);
  }
};

  const filteredProducts = 
  filterCategory === "all"
  ? products
  : products.filter((p) => p.category === filterCategory);



  return (
    <div>
    {editingProduct && (
  <div className="edit-overlay">
    <div className="edit-modal">
      <h3>Edit Product</h3>
    
    <label className="edit-label">Product Name</label>
      <input
        value={editingProduct.name}
        onChange={(e) =>
          setEditingProduct({ ...editingProduct, name: e.target.value })
        }
      />

      <label className="edit-label">Price</label>
      <input
        value={editingProduct.price}
        onChange={(e) =>
          setEditingProduct({ ...editingProduct, price: e.target.value })
        }
      />
      
      <label className="edit-label">Section</label>
       <select
          value={editingProduct.category}
          onChange={(e) =>
          setEditingProduct({ ...editingProduct, category: e.target.value })
        }
      >


        <option value="women">Women</option>
        <option value="accessories">Accessories</option>
        <option value="kids">Kids</option>
      </select>

      {/* Sub Category */}
      <label className="edit-label">Category</label>
      <select
        value={editingProduct.subCategory || ""}
        onChange={(e) =>
          setEditingProduct({
            ...editingProduct,
            subCategory: e.target.value,
          })
        }
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

    <br /> <br />
      {/* New Arrival */}
      <label >
        <input
          type="checkbox"
          checked={editingProduct.isNewArrival}
          onChange={(e) =>
            setEditingProduct({
              ...editingProduct,
              isNewArrival: e.target.checked,
            })
          }
        />
        New Arrival
      </label>
          <br />
      {/* Featured */}
      <label >
        <input
          type="checkbox"
          checked={editingProduct.isFeatured}
          onChange={(e) =>
            setEditingProduct({
              ...editingProduct,
              isFeatured: e.target.checked,
            })
          }
        />
        Featured Product
      </label>
     
      <div className="edit-actions">
      <button onClick={updateProduct}>Update</button>    
      <button onClick={() => setEditingProduct(null)}>Cancel</button>
      </div>

    </div>
  </div>
)}


    <div className="admin-container">
      <div className="admin-form">
        <h2>Add Product</h2>

        <input
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

      {/* <br /> <br /> */}

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

      {/*  <br />
        <br /> */}

        <div className="checkbox-row">
        <label className="checkbox-group">

          <div>
            <input
              type="checkbox"
              checked={isNewArrival}
              onChange={(e) => setIsNewArrival(e.target.checked)}
              />
          </div>
              New Arrival
          </label>

            <label className="checkbox-group">
          <div >
            <input
              type="checkbox"
              checked={isFeatured}
              onChange={(e) => setIsFeatured(e.target.checked)}
            />
          </div>
           Featured Product
           </label>
        </div>
      {/*  <br /> <br /> */}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={(e) => setFiles(e.target.files)}
          />
       
        <button className="upload-btn" onClick={uploadImage}>
          Upload Images
        </button>
      
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
        
        <br /><br />

        <div className="products-grid-admin">
          {filteredProducts.map((p) => {
            const imgs = JSON.parse(p.images);

            return (
              <div key={p.id} className="product-card-admin">
                <img src={imgs[0]} width="150" />
                <h4>{p.name}</h4>
                <h6>{p.price}</h6>

                <div className="admin-card-buttons">
                  <button
                    className="edit-btn"
                    onClick={() => setEditingProduct(p)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => askDelete(p.id)} 
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        
         {showConfirm && (
        <div className="confirm-overlay">
          <div className="confirm-box">
            <p>Delete this product?</p>

            <button onClick={confirmDelete}>
              Yes Delete
            </button>

            <button onClick={() => setShowConfirm(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

        </div>
      </div>
    </div>
    </div>
  );
}

export default AdminUpload;
