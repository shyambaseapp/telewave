import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Login = () => {
  const socialIcons = [
    {
      icon: faGoogle,
      to: "https://www.account.google.com/",
      className: "fa-x",
    },
    {
      icon: faFacebookF,
      to: "https://www.facebook.com",
      className: "fa-x",
    },
    {
      icon: faGithub,
      to: "https://www.github.com",
      className: " fa-x",
    },
    {
      icon: faLinkedinIn,
      to: "https://in.linkedin.com/",
      className: " fa-x",
    },
  ];
  return (
    <section>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample "
            />
          </div>
          <div className="card shadow rounded-lg col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form className="mt-4 mb-4 mr-2 ml-2">
            <p className="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-2">
                Sign In
              </p>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                {socialIcons.map((socialIcon, index) => (
                  <Link className="btn btn-primary btn-floating mx-1" to={socialIcon.to} key={index}>
                    <FontAwesomeIcon {...socialIcon} />
                  </Link>
                ))}
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
                <label className="form-label" for="form3Example3">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
                <label className="form-label" for="form3Example4">
                  Password
                </label>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
                <Link to="#!" className="text-body">
                  Forgot password?
                </Link>
              </div>

              <div className=" text-lg-start mt-4 pt-2">
                <button type="button" className="btn btn-primary btn-lg">
                  Login
                </button>
                <p className="md fs-6 mt-2 pt-1 mb-0">
                  Don't have an account?
                  <Link to="/register" className="link-danger">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
