import React from "react";
import { Link } from "react-router-dom";
import VideoChat from "../../assets/images/videochat.png";

const Carousel = () => {
  return (
    <>
      <div className="container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={VideoChat} alt="" style={{ height: "400px", width: "500px" }} />
            </div>
            <div className="carousel-item">
              <img src={VideoChat} alt="" style={{ height: "400px", width: "500px" }} />
            </div>
            <div className="carousel-item">
              <img src={VideoChat} alt="" style={{ height: "400px", width: "500px" }} />
            </div>
          </div>
          <Link
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </Link>
          <Link
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Carousel;
