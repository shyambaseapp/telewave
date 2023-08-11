import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand fs-2 ml-5" to="/">
            TeleWave
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse ml-5 mr-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link active" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link active" to="/plan-and-pricing">
                  Plan & Pricing
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link active" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <Link
              className="btn btn-success my-2 my-sm-0 mr-4"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="btn btn btn-success mr-5"
              to="/register"
            >
              Register
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
