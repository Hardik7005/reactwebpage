import React from "react";
import web from "../src/img/img_1.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section id="heared" className="">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1>Welcome Home page</h1>
                  <h2 className="my-3">
                    we are the team of
                    <strong className="brand-name"> Websmith Solution</strong>
                  </h2>

                  <div className="mt-3">
                    <NavLink to="/service" className="btn btn-outline-primary">
                      Get Start
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={web}
                    className="img-fluid animated"
                    alt="Image"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
