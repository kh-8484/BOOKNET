import logo from "../../../static/images/logo.png";
import fbIcon from "../../../static/images/Group 85.svg";
import twitterIcon from "../../../static/images/Group 86.svg";
import linkedInIcon from "../../../static/images/Group 87.svg";
import instaIcon from "../../../static/images/Group 88.svg";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="footer-container">
          <div className="footer-social-container  p-t-5">
            <img src={logo} alt="logo" className="footer-logo" />
            <div className="v-separator m-r-3"></div>
            <div className="social-icon-container">
              <img src={fbIcon} alt="icon" className="social-icon" />
              <img src={twitterIcon} alt="icon" className="social-icon" />
              <img src={linkedInIcon} alt="icon" className="social-icon" />
              <img src={instaIcon} alt="icon" className="social-icon" />
            </div>
          </div>

          <div className="links-container m-t-5 m-b-3">
            <Link
              to={"/"}
              className={`footer-title font-Poppins-Regular-regular-normal`}
            >
              Home
            </Link>
            <div className="v-separator m-lr-3"></div>
            <Link
              to={"/about"}
              className={`footer-title font-Poppins-Regular-regular-normal`}
            >
              About Booknet
            </Link>
            <div className="v-separator m-lr-3"></div>

            <Link
              to={"/book"}
              className={`footer-title font-Poppins-Regular-regular-normal`}
            >
              Book Slot
            </Link>
            <div className="v-separator m-lr-3"></div>

            <Link
              to={"/contact"}
              className={`footer-title font-Poppins-Regular-regular-normal`}
            >
              Contact us
            </Link>
            <div className="v-separator m-lr-3"></div>

            <Link
              to={"/privacy-policy"}
              className={`footer-title font-Poppins-Regular-regular-normal`}
            >
              Privacy Policy
            </Link>
          </div>

          <div className="footer-reserved-container font-Poppins-Regular-regular-normal">
            © 2024 Booknet | All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
