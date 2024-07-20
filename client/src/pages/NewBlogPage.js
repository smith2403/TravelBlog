import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewBlogPage = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/blogs", { title, imageUrl, content });
    navigate("/");
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
  <div className="p-4 shadow" style={{ width: '100%', maxWidth: '600px' }}>
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
        <button type="button" className="btn btn-secondary me-2" onClick={() => navigate(-1)}>
          Back
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  </div>
</div>

  );
};

export default NewBlogPage;
