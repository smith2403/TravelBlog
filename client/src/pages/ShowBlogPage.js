import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ShowBlogPage = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`/api/blogs/${id}`);
        setBlog(res.data);
      } catch (error) {
        toast.error("Failed to fetch blog details");
      }
    };
    fetchBlog();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/blogs/${id}`);
      toast.success("Blog deleted successfully!");
      navigate("/blogs"); // Navigate back to the blogs list
    } catch (error) {
      toast.error("Failed to delete blog");
    }
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
        <Link
          to={`/blogs/edit/${id}`}
          className="btn m-2"
          style={{ backgroundColor: "#007bff", border: "none", color: "white" }}
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="btn m-2"
          style={{ backgroundColor: "red", border: "none", color: "white" }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ShowBlogPage;
