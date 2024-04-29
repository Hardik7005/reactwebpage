import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My Name is ${data.fullname}`);
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Welcome Contact page</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="form-group mb-3">
                <label for="formGroupExampleInput">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter Name"
                />
              </div>
              <div class="form-group mb-3">
                <label for="formGroupExampleInput2">Phone</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter Mobile Number"
                />
              </div>
              <div class="form-group mb-3">
                <label for="formGroupExampleInput2">Email Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter Email"
                />
              </div>
              <div class="form-group mb-3">
                <label for="formGroupExampleInput2">Message</label>
                <textarea
                  class="form-control"
                  id="formGroupExampleInput2"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                />
              </div>
              <div className="col-12 mb-3">
                <button className="btn btn-outline-primary">Submit </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
