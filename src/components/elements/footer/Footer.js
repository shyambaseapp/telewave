import React from "react";
import { Link } from "react-router-dom";
import FooterLinks from "./FooterLink";
import FooterSocialIcons from "./FooterSocialIcons";

const Footer = () => {
  const footerLinksData = [
    {
      title: "AboutUs",
      links: [
        {
          to: "www.baseapp.com",
          subject: "Robotic Arms",
        },
      ],
    },
    {
      title: "contactus",
      links: [
        {
          to: "www.affbotics.com",
          subject: "affbotics Arms",
        },
      ],
    },
    {
      title: "contactus",
      links: [
        {
          to: "www.affbotics.com",
          subject: "affbotics Arms",
        },
      ],
    },
  ];

  return (
    <footer className="page-footer font-small bg-dark ">
      <div className="container-sm  text-md-center">
        <div className="row">
          <FooterSocialIcons />
        </div>
        <hr className="bg-white" />
        <div className="container-sm  text-center text-md-center">
          <div className="row">
            <FooterLinks data={footerLinksData} />
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center text-white py-2">
        © 2023 Copyright :<Link to="/"> telewave.com</Link>
      </div>
    </footer>
  );
};

export default Footer;
