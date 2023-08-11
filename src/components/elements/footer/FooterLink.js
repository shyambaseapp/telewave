import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = (props) => {
  const { data } = props;
  return (
    <>
      {data.map((section, index) => (
        <div className="col-md-3 mx-auto" key={index}>
          <h5 className="font-weight-bold text-white mb-3">{section.title}</h5>
          <ul className="list-unstyled">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <Link to={link.to}>{link.subject}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterLinks;
