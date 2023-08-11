import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const socialIcons = [
  { icon: faFacebookF, to: "https://www.facebook.com", className: "white-text mr-md-5 mr-3 ml-3 fa-2x" },
  { icon: faTwitter, to: "https://www.twitter.com", className: "white-text mr-md-5 mr-3 ml-3 fa-2x" },
  { icon: faGooglePlusG, to: "https://www.google.com", className: "white-text mr-md-5 mr-3 ml-3 fa-2x" },
  { icon: faLinkedinIn, to: "https://in.linkedin.com/", className: "white-text mr-md-5 mr-3 ml-3 fa-2x" },
  { icon: faInstagram, to: "https://www.instagram.com/", className: "white-text mr-md-5 mr-3 ml-3 fa-2x" },
];

const FooterSocialIcons = () => {
  return (
    <div className="col-md-14 py-4">
      <div className="flex-center">
        {socialIcons.map((socialIcon, index) => (
          <Link to={socialIcon.to} key={index}>
            <FontAwesomeIcon {...socialIcon} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterSocialIcons;
