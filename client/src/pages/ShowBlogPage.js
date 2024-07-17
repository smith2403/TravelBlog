import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const ShowBlogPage = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await axios.get(`/api/blogs/${id}`);
      setBlog(res.data);
    };
    fetchBlog();
  }, [id]);

  const handleDelete = async () => {
    await axios.delete(`/api/blogs/${id}`);
    navigate("/");
  };

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1 className="text-center my-4">{blog.title}</h1>
      {blog.imageUrl && (
        <div className="d-flex justify-content-center mb-4">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      )}
      <p className="text-center">{blog.content}</p>
      <div className="text-center">
        <Link to={`/blogs/edit/${id}`} className="btn btn-primary m-2">
          Edit
        </Link>
        <button onClick={handleDelete} className="btn btn-danger m-2">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ShowBlogPage;
