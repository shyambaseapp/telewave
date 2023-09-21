import React, { useEffect, useRef } from "react";

const ActiveSpeakerDetection = (props) => {
  const ref = useRef();
  useEffect(() => {
    props.peer.on("stream", (stream) => {
      ref.current.srcObject = stream;
    });
  }, [props.peer]);
  return (
      <video playsInline autoPlay ref={ref} />
  );
};

export default ActiveSpeakerDetection;
