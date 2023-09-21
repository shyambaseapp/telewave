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
      className="border border-1 rounded-3 embed-responsive embed-responsive-16by9 mt-1"
      style={{
        height: "135px",
        width: "175px",
      }}
    >
      <video playsInline autoPlay ref={ref}  />
    </div>
  );
};

export default VideoCarousel;
