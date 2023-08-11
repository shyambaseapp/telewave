import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
import Video from "../../components/video-stream/Video";
import { useParams } from "react-router-dom";
import AllVideoStreamsCarousel from "../../components/video-stream/AllVideoStreamsCarousel";

// const videoConstraints = {
//   height: window.innerHeight / 2,
//   width: window.innerWidth / 2,
// };

const socket = io.connect("https://videochatserver-evr8.onrender.com");

const VideoStreams = (props) => {
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
      <AllVideoStreamsCarousel videoStreams={peers}/>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Video Streams</h5>
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className="embed-responsive embed-responsive-16by9">
                  <video muted ref={userVideo} autoPlay playsInline />
                </div>
              </div>
              {peers.map((peer, index) => {
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
      </div>
    </>
  );
};

export default VideoStreams;
