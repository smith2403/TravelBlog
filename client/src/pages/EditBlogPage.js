import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditBlogPage = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await axios.get(`/api/blogs/${id}`);
      setTitle(res.data.title);
      setImageUrl(res.data.imageUrl);
      setContent(res.data.content);
    };
    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/api/blogs/${id}`, { title, imageUrl, content });
    navigate(`/blogs/${id}`);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Edit Blog</h1>
      <div className="d-flex justify-content-center">
        <form
          onSubmit={handleSubmit}
          className="border p-4 rounded shadow-sm"
          style={{ width: "50%", minWidth: "300px" }}
        >
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image URL</label>
            <input
              type="text"
              className="form-control"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
             {imageUrl && <img src={imageUrl} alt="Preview" className="img-fluid mt-2" />}
          </div>
          <div className="mb-3">
            <label className="form-label">Content</label>
            <textarea
              className="form-control"
              rows="5"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>
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

export default EditBlogPage;
