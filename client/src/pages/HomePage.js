import React from "react";
import { useNavigate } from "react-router-dom";
import blog1 from "./images/blog1.png";
import blog2 from "./images/blog2.jpeg";
import blog3 from "./images/blog3.jpg";
import blog4 from "./images/blog4.jpg";
import blog5 from "./images/blog5.jpg";
import blog6 from "./images/blog6.jpg";
import blog7 from "./images/blog7.jpg";
import blog8 from "./images/blog8.jpg";
import blog9 from "./images/blog9.jpg";
import serviceImg1 from "./images/service1.webp";
import serviceImg2 from "./images/service2.webp";
import serviceImg3 from "./images/service3.jpg";
import "./css/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Welcome to Traveller's Hub</h1>
      </div>

      {/* Static Blogs */}
      <div className="container my-4">
        <h2 className="text-center mb-4">Recent Travel Posts</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card shadow-sm h-100" style={{ cursor: "pointer" }}>
              <img
                src={blog1}
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                alt="Beautiful beach"
              />
              <div className="card-body">
                <h5 className="card-title">Exploring the Beaches of Bali</h5>
                <p className="card-text">
                  Discover the most beautiful and serene beaches in Bali for a
                  perfect getaway.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm h-100" style={{ cursor: "pointer" }}>
              <img
                src={blog2}
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                alt="Mountain view"
              />
              <div className="card-body">
                <h5 className="card-title">A Journey Through the Swiss Alps</h5>
                <p className="card-text">
                  Experience the breathtaking views and adventures in the heart
                  of the Swiss Alps.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm h-100" style={{ cursor: "pointer" }}>
              <img
                src={blog3}
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                alt="City skyline"
              />
              <div className="card-body">
                <h5 className="card-title">Discovering the Charm of Paris</h5>
                <p className="card-text">
                  Explore the iconic landmarks and hidden gems of the romantic
                  city of Paris.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm h-100" style={{ cursor: "pointer" }}>
              <img
                src={blog4}
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                alt="Desert landscape"
              />
              <div className="card-body">
                <h5 className="card-title">Adventures in the Sahara Desert</h5>
                <p className="card-text">
                  Join a thrilling adventure through the vast and mystical
                  Sahara Desert.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm h-100" style={{ cursor: "pointer" }}>
              <img
                src={blog5}
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                alt="Ancient ruins"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Exploring the Ruins of Machu Picchu
                </h5>
                <p className="card-text">
                  Uncover the secrets of the ancient Incan city of Machu Picchu
                  in Peru.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm h-100" style={{ cursor: "pointer" }}>
              <img
                src={blog6}
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                alt="Rainforest"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Journey Through the Amazon Rainforest
                </h5>
                <p className="card-text">
                  Experience the lush biodiversity and adventure in the Amazon
                  Rainforest.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm h-100" style={{ cursor: "pointer" }}>
              <img
                src={blog7}
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                alt="City nightlife"
              />
              <div className="card-body">
                <h5 className="card-title">The Nightlife of Tokyo</h5>
                <p className="card-text">
                  Dive into the vibrant and dynamic nightlife of Tokyo, Japan.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm h-100" style={{ cursor: "pointer" }}>
              <img
                src={blog8}
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                alt="Safari"
              />
              <div className="card-body">
                <h5 className="card-title">Safari Adventures in Kenya</h5>
                <p className="card-text">
                  Get close to wildlife and enjoy an unforgettable safari in
                  Kenya.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm h-100" style={{ cursor: "pointer" }}>
              <img
                src={blog9}
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                alt="Island view"
              />
              <div className="card-body">
                <h5 className="card-title">The Beauty of Santorini</h5>
                <p className="card-text">
                  Relax and enjoy the stunning views and architecture of
                  Santorini, Greece.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mt-4">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => navigate("/new")}
              style={{ backgroundColor: "green", border: "none" }}
            >
              Add Blog
            </button>
          </div>
        </div>
      </div>

      {/* Services section */}
      <div className="container my-4">
        <h2 className="text-center mb-4">Services We Provide</h2>
        <div className="row">
          <div className="col-md-4 mb-4 d-flex flex-column align-items-center">
            <div className="card border-0 text-center">
              <img
                src={serviceImg1}
                className="card-img-top rounded-circle"
                alt="Personalized Travel Planning"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  margin: "0 auto",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">Personalized Travel Planning</h5>
                <p className="card-text">
                  Tailored travel plans to meet your unique preferences and
                  budget.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 d-flex flex-column align-items-center">
            <div className="card border-0 text-center">
              <img
                src={serviceImg2}
                className="card-img-top rounded-circle"
                alt="Exclusive Travel Packages"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  margin: "0 auto",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">Exclusive Travel Packages</h5>
                <p className="card-text">
                  Unique travel packages designed for an unforgettable
                  experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 d-flex flex-column align-items-center">
            <div className="card border-0 text-center">
              <img
                src={serviceImg3}
                className="card-img-top rounded-circle"
                alt="24/7 Customer Support"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  margin: "0 auto",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">24/7 Customer Support</h5>
                <p className="card-text">
                  Round-the-clock support to assist you with your travel needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
