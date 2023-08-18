// AdminAddProduct.js

import React, { useState } from "react";
import "./AdminAddProduct.css";

export const AdminAddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState(null);

  const handleAddProduct = () => {
    // Here you can implement the logic to add the product
    // to your backend or state management system
    const newProduct = {
      name: productName,
      price: productPrice,
      description: productDescription,
      image: productImage, // Store the image URL or file
    };
    console.log("New Product:", newProduct);
    // Clear form fields after adding the product
    setProductName("");
    setProductPrice("");
    setProductDescription("");
    setProductImage(null);
  };

  return (
    <div className="admin-add-product">
      <h2>Add Product</h2>
      <form>
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Product Price</label>
          <input
            type="number"
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productDescription">Product Description</label>
          <textarea
            id="productDescription"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productImage">Product Image</label>
          <input
            type="file"
            id="productImage"
            accept="image/*"
            onChange={(e) =>
              setProductImage(URL.createObjectURL(e.target.files[0]))
            }
          />
          {productImage && (
            <img src={productImage} alt="Product" className="preview-image" />
          )}
        </div>
        <button type="button" onClick={handleAddProduct}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AdminAddProduct;
