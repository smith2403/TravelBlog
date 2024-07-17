import React from "react";
import './pages/css/Styles.css';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import BlogListPage from "./pages/BlogListPage";
import NewBlogPage from "./pages/NewBlogPage";
import ShowBlogPage from "./pages/ShowBlogPage";
import EditBlogPage from "./pages/EditBlogPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="blogs" element={<BlogListPage />} />
          <Route path="new" element={<NewBlogPage />} />
          <Route path="blogs/:id" element={<ShowBlogPage />} />
          <Route path="blogs/edit/:id" element={<EditBlogPage />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<ContactUs/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
