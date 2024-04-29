import React from "react";
import Card from "./Card";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="tab-center">Our Service</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-4 col-10 mx-auto">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
