import React from "react";
import "../../assets/styles/home.css";
import Carousel from "../../components/elements/Carousel";
import { Link } from "react-router-dom";
import { v1 as uuid } from "uuid";

const Home = (props) => {
  const id = uuid();
  return (
    <>
      <div className=" mt-4 container-lg">
        <div className="row">
          <div className="col-md-5  d-flex justify-content-center">
            <div className="container-lg">
              <div className="row">
                <span className="font-weight-bold display-6 mb-3">
                  Elevate Your Meetings with Complimentary free Video
                  Conferencing.
                </span>
                <p className="text-muted lead">
                  We've transformed our meticulously crafted business meeting
                  platform, TeleWave, into an unrestricted and complimentary
                  solution, ensuring seamless connections for everyone.
                </p>
              </div>
              <div className="row">
                <div className="mt-2">
                  <Link
                    className="btn btn-outline-primary btn-lg"
                    to={`/room/${id}`}
                  >
                    Create Meeting
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-5 d-flex mt-4 mb-4 justify-content-center">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
