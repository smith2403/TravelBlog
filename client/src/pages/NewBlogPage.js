import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const NewBlogPage = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const isValidImageUrl = async (url) => {
    try {
      const response = await fetch(url);
      return (
        response.ok && response.headers.get("content-type").startsWith("image")
      );
    } catch (error) {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (imageUrl && !(await isValidImageUrl(imageUrl))) {
      toast.error("Invalid image URL!");
      return;
    }

    try {
      await axios.post("/api/blogs", { title, imageUrl, content });
      toast.success("Blog added successfully!");
      navigate("/blogs");
    } catch (error) {
      toast.error("Failed to add blog!");
    }
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="p-4 shadow" style={{ width: "100%", maxWidth: "600px" }}>
        <h1 className="text-center mb-4">New Blog</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingTitle"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <label htmlFor="floatingTitle">Title</label>
          </div>
          <div className="mb-3 form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingImageUrl"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <label htmlFor="floatingImageUrl">Image URL</label>
          </div>
          <div className="mb-3 form-floating">
            <textarea
              className="form-control"
              id="floatingContent"
              placeholder="Content"
              rows="5"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
            <label htmlFor="floatingContent">Content</label>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn me-2"
              onClick={() => navigate(-1)}
              style={{
                backgroundColor: "lightgrey",
                border: "none",
                color: "black",
              }}
            >
              Back
            </button>
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: "orange",
                border: "none",
                color: "white",
              }}
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewBlogPage;
