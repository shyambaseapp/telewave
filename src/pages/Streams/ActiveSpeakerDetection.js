import React, { useEffect, useRef } from "react";
import { Vad } from "webrtcvad";

const ActiveSpeakerDetection = (props) => {
  const ref = useRef();
  useEffect(() => {
    props.peer.on("stream", (stream) => {
      ref.current.srcObject = stream;
    });
  }, [props.peer]);

  const vad = new Vad();
  const frameDuration = 30;
  // Process the received audio data
  const audioBuffer = new Uint8Array(ref);
  const isSpeech = vad.processAudio(audioBuffer, 16000, frameDuration);
  if (isSpeech) {
    return <video playsInline autoPlay ref={ref} />;
  } else {
    return null;
  }
};

export default ActiveSpeakerDetection;
