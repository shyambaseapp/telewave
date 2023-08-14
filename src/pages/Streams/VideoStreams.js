import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
import { useParams } from "react-router-dom";
import VideoCarousel from "./VideoCarousel";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const videoConstraints = {
//   height: window.innerHeight / 4,
//   width: window.innerWidth / 4,
// };

const socket = io.connect("https://videochatserver-evr8.onrender.com");

const VideoStreams = (props) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [peers, setPeers] = useState([]);
  const userVideo = useRef();
  const peersRef = useRef([]);
  const { roomID } = useParams();
  console.log("roomID", roomID);
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        userVideo.current.srcObject = stream;
        socket.emit("join room", roomID);
        socket.on("all users", (users) => {
          console.log(users);
          const peers = [];
          users.forEach((userID) => {
            const peer = createPeer(userID, socket.id, stream);
            peersRef.current.push({
              peerID: userID,
              peer,
            });
            peers.push(peer);
          });
          setPeers(peers);
        });

        socket.on("user joined", (payload) => {
          const peer = addPeer(payload.signal, payload.callerID, stream);
          peersRef.current.push({
            peerID: payload.callerID,
            peer,
          });

          setPeers((users) => [...users, peer]);
        });

        socket.on("receiving returned signal", (payload) => {
          const item = peersRef.current.find((p) => p.peerID === payload.id);
          item.peer.signal(payload.signal);
        });
      });
  }, [roomID]);

  function createPeer(userToSignal, callerID, stream) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on("signal", (signal) => {
      socket.emit("sending signal", {
        userToSignal,
        callerID,
        signal,
      });
    });

    return peer;
  }

  function addPeer(incomingSignal, callerID, stream) {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on("signal", (signal) => {
      socket.emit("returning signal", { signal, callerID });
    });

    peer.signal(incomingSignal);

    return peer;
  }

  return (
    <>
      <div className="card card-body bg-dark container">
        <div className="row  text-white" style={{ height: "50px" }}>
          <h3 className="text-center">TeleWave</h3>
        </div>
        <hr className="bg-white" />
        <div className="row flex-lg-nowrap">
          <div className="col-lg-8 ml-3">
            <div>
              <Slider {...settings}>
                {peers.map((peer, index) => {
                  if (peer._remoteStreams != null) {
                    return <VideoCarousel peer={peer} />;
                  }
                  return null;
                })}
              </Slider>
              <div>
      </div>
            </div>

            <div
              className="row card card-body bg-danger mt-3"
              style={{ height: "600px" }}
            >
              <div className="col">
              
              </div>
            </div>
            <div className="row mt-3" style={{ height: "50px" }}>
              <div className="col">c</div>
            </div>
          </div>
          <div className="col-lg-3 gap-2 ml-1">
            <div
              className="rounded bg-secondary border-secondary embed-responsive embed-responsive-16by9"
              style={{
                height: "230px",
                width: "310px",
              }}
            >
              <video muted ref={userVideo} autoPlay playsInline />
            </div>
            <div
              className="row card mt-3 ml-1"
              style={{ height: "450px", width: "310px" }}
            ></div>
            <div className="row mt-3 pl-2" style={{ width: "340px" }}>
              <div className="">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Send Message"
                  />
                  <button className="input-group-text">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 mr-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoStreams;
