import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample"
            />
          </div>
          <div className="card shadow rounded-lg col-lg  col-xl-4 offset-xl-1">
            <form className="mt-4 mr-2 ml-2">
              <p className="text-center h1 fw-bold mb-4 mx-1 mx-md-4 ">
                Sign up
              </p>

              <div className="d-flex flex-row align-items-center mb-3">
                <FontAwesomeIcon icon="user" className="fa-x" />
                <div className="form-outline flex-fill mb-0">
                  <input type="text" id="form3Example1c" className="form-control" />
                  <label className="form-label" htmlFor="form3Example1c">
                    Name
                  </label>
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-3">
                <FontAwesomeIcon icon="envelope" className="fa-x" />
                <div className="form-outline flex-fill mb-0">
                  <input type="email" id="form3Example3c" className="form-control" />
                  <label className="form-label" htmlFor="form3Example3c">
                    Email
                  </label>
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-3">
              <FontAwesomeIcon icon="fa-solid fa-lock" />
                <div className="form-outline flex-fill mb-0">
                  <input type="password" id="form3Example4c" className="form-control" />
                  <label className="form-label" htmlFor="form3Example4c">
                    Password
                  </label>
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-3">
              <FontAwesomeIcon icon="fa-solid fa-lock" />
                <div className="form-outline flex-fill mb-0">
                  <input type="password" id="form3Example4cd" className="form-control" />
                  <label className="form-label" htmlFor="form3Example4cd">
                    Confirm Password
                  </label>
                </div>
              </div>

              <div className="form-check  justify-content-center mb-4">
              <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3c"
                />
                <label className="form-check-label" htmlFor="form2Example3">
                  I agree all statements in <Link to="#!">Terms of service</Link>
                </label>
              </div>

              <div className="d-flex   mb-3 mb-lg-4">
                <button type="button" className="btn btn-primary btn-lg">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
