import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/BlogListPage.css";

const BlogListPage = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get("/api/blogs");
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Blogs</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {blogs.map((blog) => (
          <div className="col" key={blog._id}>
            <div className="card shadow-sm">
              <img src={blog.imageUrl} className="card-img-top" alt={blog.title} />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.content.substring(0, 100)}...</p>
                <Link to={`/blogs/${blog._id}`} className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
          <div className="col-12 text-center mt-4">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => navigate("/new")}
            >
              Create New Blog
            </button>
          </div>
        </div>
    </div>
    
  );
};

export default BlogListPage;
