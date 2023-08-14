import React, { useEffect, useRef } from "react";

const VideoCarousel = (props) => {
  const ref = useRef();
  useEffect(() => {
    props.peer.on("stream", (stream) => {
      ref.current.srcObject = stream;
    });
  }, [props.peer]);
  return (
    <div
      className="rounded embed-responsive embed-responsive-16by9"
      style={{
        height: "135px",
        width: "200px",
      }}
    >
      <video playsInline autoPlay ref={ref} />
    </div>
  );
};

export default VideoCarousel;
