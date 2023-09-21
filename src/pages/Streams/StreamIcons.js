import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faMessage,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

const streamIcons = [
  { icon: faVideo, className: " mr-md-5  mt-1 fa-2x", color: "#6666ff" }, 
  { icon: faMicrophone, className: " mr-md-5 mt-1 fa-2x", color: "#ff3333" }, 
  { icon: faMessage, className: " mr-md-5 mt-1 fa-2x", color: "#009933" }, 
];
const handleClick = (iconName) => {
  // Handle the click event for the specific icon here
  
};

const StreamIcons = () => {
  return (
    <>
      {streamIcons.map((streamIcon, index) => (
         <span
         key={index}
         className="icon-container"
         onClick={() => handleClick(streamIcon)}
       >
         <FontAwesomeIcon {...streamIcon}  style={{ color: streamIcon.color }}/>
       </span>
      ))}
    </>
  );
};

export default StreamIcons;
