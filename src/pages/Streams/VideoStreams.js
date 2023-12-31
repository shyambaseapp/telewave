import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
import { useParams } from "react-router-dom";
import VideoCarousel from "./VideoCarousel";
import ActiveSpeakerDetection from "./ActiveSpeakerDetection";
import StreamIcons from "./StreamIcons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

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
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        userVideo.current.srcObject = stream;
        socket.emit("join room", roomID);
        socket.on("all users", (users) => {
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
      <div className="rounded-3 bg-dark container">
        <div className="p-1">
          <div className="row flex-lg-nowrap  mb-3 mt-3">
            <div className="col-lg-8 ml-4">
              <div className="rounded-3 ml-2" style={{ height: "145px" }}>
                <Slider {...settings}>
                  {peers.length === 0 ? (
                    <p className="text-center text-white mt-5">
                      No member joined yet.
                    </p>
                  ) : (
                    peers.map((peer, index) => {
                      return peer._remoteStreams !== null ? (
                        <VideoCarousel peer={peer} key={index} />
                      ) : null;
                    })
                  )}
                </Slider>
              </div>

              <div
                className="border border-1 rounded-3 embed-responsive embed-responsive-16by9 mt-2 ml-2"
                style={{
                  height: "418px",
                  width: "auto",
                }}
              >
                <div className="col">
                  {peers.map((peer, index) => {
                    return peer._remoteStreams !== null ? (
                      <ActiveSpeakerDetection peer={peer} />
                    ) : null;
                  })}
                </div>
              </div>
              <div className="row mt-4">
                <div className="col text-right ml-5">
                  <StreamIcons />
                </div>
                <div className="col text-right">
                  <Link className="btn btn-danger " to={`/`}>
                    Leave Meeting
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 gap-2">
              <div
                className="rounded-3 border border-1 embed-responsive embed-responsive-16by9 ml-4"
                style={{
                  height: "200px",
                  width: "270px",
                }}
              >
                <video muted ref={userVideo} autoPlay playsInline />
              </div>
              <div
                className="row rounded border border-1 bg-white mt-1 mb-1 ml-1"
                style={{ height: "385px", width: "310px" }}
              ></div>
              <div className="row" style={{ width: "340px" }}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control ml-2"
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
                      className="h-4 w-4 "
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
