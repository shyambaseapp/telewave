import React, { useState } from "react";
import Video from "../video-stream/Video";

const AllVideoStreamsCarousel = ({ videoStreams, streamsPerSlide=6 }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const totalSlides = Math.ceil(videoStreams.length / streamsPerSlide);

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const startIdx = activeSlide * streamsPerSlide;
  const endIdx = startIdx + streamsPerSlide;

  const visibleStreams = videoStreams.slice(startIdx, endIdx);

  return (
    <div className="container mt-4">
      <div
        id="videoCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              {visibleStreams.map((peer, index) => {
                if (peer._remoteStreams != null) {
                  return (
                    <div className="col-md-4 mb-3" key={index}>
                      <div className="embed-responsive embed-responsive-16by9">
                        <Video key={index} peer={peer} />
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          onClick={handlePrevSlide}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={handleNextSlide}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default AllVideoStreamsCarousel;
