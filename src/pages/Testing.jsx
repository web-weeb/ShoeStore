import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Images/Vector.png";

const Testing = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    title: "",
    category: "",
    price: "",
    colors: [],
    description: "",
    featured: false,
    shipping: "",
    stock: "",
    reviews: "",
    stars: "",
    imageFiles: [],
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    // Special handling for the 'colors' and 'imageFiles' fields
    if (name === "colors") {
      value = value
        .replace(/[\[\]"]/g, "")
        .split(",")
        .map((color) => color.trim());
    } else if (name === "imageFiles") {
      // Handle local file uploads
      const files = e.target.files;
      const fileArray = Array.from(files);
      const fileUrls = fileArray.map((file) => URL.createObjectURL(file));
      value = fileArray;
    }

    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", product.name);
      formData.append("title", product.title);
      formData.append("category", product.category);
      formData.append("price", product.price);
      formData.append("colors", JSON.stringify(product.colors));
      formData.append("description", product.description);
      formData.append("featured", product.featured);
      formData.append("shipping", product.shipping);
      formData.append("stock", product.stock);
      formData.append("reviews", product.reviews);
      formData.append("stars", product.stars);
      product.imageFiles.forEach((file) => {
        formData.append("imageFiles", file);
      });

      const response = await fetch(
        "http://localhost:4000/api/data/addProduct",
        {
          method: "POST",
          body: formData,
        }
      );

      const res_data = await response.json();
      console.log(res_data);

      if (response.ok) {
        alert("Product added successfully");
        setProduct({
          name: "",
          title: "",
          category: "",
          price: "",
          colors: [],
          description: "",
          featured: false,
          shipping: "",
          stock: "",
          reviews: "",
          stars: "",
          imageFiles: [],
        });
      } else {
        console.log("Error:", res_data.extraDetails);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-secondary p-8 rounded shadow-md w-96">
          <div className="mb-6">
            <img
              src={logo}
              alt="Login Logo"
              className="w-16 h-16 object-contain mb-2"
            />
            <h1 className="text-2xl font-semibold text-gray-800">
              Add Product
            </h1>
          </div>
          <div className="bg-white p-8 rounded shadow-2xl ">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={product.name}
                  onChange={handleInput}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={product.title}
                  onChange={handleInput}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  // required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={product.category}
                  onChange={handleInput}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={product.price}
                  onChange={handleInput}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              {/* ... */}
              <div className="mb-4">
                <label
                  htmlFor="colors"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  Colors (comma-separated)
                </label>
                <input
                  type="text"
                  id="colors"
                  name="colors"
                  value={product.colors.join(", ")}
                  onChange={handleInput}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  description
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={product.description}
                  onChange={handleInput}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="featured"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  featured
                </label>
                <input
                  type="text"
                  id="featured"
                  name="featured"
                  value={product.featured}
                  onChange={handleInput}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="shipping"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  shipping
                </label>
                <input
                  type="text"
                  id="shipping"
                  name="shipping"
                  value={product.shipping}
                  onChange={handleInput}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="stock"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  stock
                </label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  value={product.stock}
                  onChange={handleInput}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="reviews"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  reviews
                </label>
                <input
                  type="text"
                  id="reviews"
                  name="reviews"
                  value={product.reviews}
                  onChange={handleInput}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="stars"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  stars
                </label>
                <input
                  type="number"
                  id="stars"
                  name="stars"
                  value={product.stars}
                  onChange={handleInput}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              {/* ... */}
              <div className="mb-4">
                <label
                  htmlFor="imageFiles"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  Upload Images
                </label>
                <input
                  type="file"
                  id="imageFiles"
                  name="imageFiles"
                  onChange={handleInput}
                  multiple
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  accept="image/*"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none"
              >
                ADD
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testing;
