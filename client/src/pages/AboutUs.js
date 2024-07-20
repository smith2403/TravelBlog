import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/AboutUs.css";
import img1 from "../pages/images/about1.jpg";
import img2 from "../pages/images/about2.jpg";
const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <section className="py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-8">
            <h3 className="fs-5 mb-2 text-secondary text-uppercase">About</h3>
            <h2 className="display-5 mb-4">
              Our journey began with a dream of redefining how the world
              experiences travel and adventure.
            </h2>
          </div>
        </div>
      </div>

      <div className="container overflow-hidden">
        <div className="row gy-4 gy-lg-0">
          <div className="col-12 col-lg-6">
            <article>
              <div className="card border-0">
                <img
                  className="card-img-top img-fluid m-0"
                  loading="lazy"
                  src={img1}
                  alt="Our Vision"
                />
                <div className="card-body border bg-white p-4">
                  <div className="entry-header mb-3">
                    <h2 className="card-title entry-title h4 mb-0">
                      <a className="link-dark text-decoration-none" href="#!">
                        Our Vision
                      </a>
                    </h2>
                  </div>
                  <p className="card-text entry-summary text-secondary mb-3">
                    Embark on a journey where every destination tells a story
                    and every adventure leaves a lasting memory. At our travel
                    agency, we believe that travel can transform perspectives,
                    inspire dreams, and create unforgettable experiences.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-12 col-lg-6">
            <article>
              <div className="card border-0">
                <img
                  className="card-img-top img-fluid m-0"
                  loading="lazy"
                  src={img2}
                  alt="Our Approach"
                />
                <div className="card-body border bg-white p-4">
                  <div className="entry-header mb-3">
                    <h2 className="card-title entry-title h4 mb-0">
                      <a className="link-dark text-decoration-none" href="#!">
                        Our Approach
                      </a>
                    </h2>
                  </div>
                  <p className="card-text entry-summary text-secondary mb-3">
                    Welcome to our travel agency, where the spirit of
                    exploration knows no bounds and adventure awaits at every
                    corner. We are a team of dedicated travel enthusiasts,
                    strategists, and visionaries passionate about curating
                    unique and captivating travel experiences for every
                    wanderer.
                  </p>
                </div>
              </div>
              <button
                style={{
                  backgroundColor: "lightgrey",
                  border: "none",
                  color: "black",
                }}
                type="button"
                className="btn btn-secondary me-2"
                onClick={() => navigate(-1)}
              >
                Back
              </button>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
