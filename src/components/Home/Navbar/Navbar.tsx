import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../static/images/logo.png";
import menu from "../../../static/images/menu_icon.svg";
import xIcon from "../../../static/images/x-icon.svg";

import Button from "../../Button/Button";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="nav-wrapper">
      <div className="container">
        <div className="nav-container p-tb-3">
          <img src={logo} alt="logo" className="logo" />
          <div className="nav-content">
            <Link
              to={"/"}
              className={`nav-title font-Poppins-SemiBold-600-normal ${
                pathname == "/" ? "active-nav-title" : ""
              } `}
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className={`nav-title font-Poppins-SemiBold-600-normal ${
                pathname == "/about" ? "active-nav-title" : ""
              } `}
            >
              About Booknet
            </Link>
            <Link
              to={"/book"}
              className={`nav-title font-Poppins-SemiBold-600-normal ${
                pathname == "/book" ? "active-nav-title" : ""
              } `}
            >
              Book Slot
            </Link>
            <Link
              to={"/contact"}
              className={`nav-title font-Poppins-SemiBold-600-normal ${
                pathname == "/contact" ? "active-nav-title" : ""
              } `}
            >
              Contact us
            </Link>
          </div>

          <div className="nav-button-container">
            <Button
              btn="primary"
              title="Login"
              onClick={() => navigate("/login")}
              className="m-r-2"
            />
            <Button
              btn="secondary"
              title="Sign up"
              onClick={() => navigate("/sign-up")}
            />
          </div>
          <img
            src={menu}
            alt="logo"
            className="menu-icon"
            onClick={toggleDrawer}
          />
        </div>
      </div>

      <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>

        <div className="drawer-content">
        <img src={xIcon} alt="logo" className="x-icon" onClick={toggleDrawer} />
          <Link
            to={"/"}
            className={`nav-title font-Poppins-SemiBold-600-normal ${
              pathname == "/" ? "active-nav-title" : ""
            } `}
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className={`nav-title font-Poppins-SemiBold-600-normal ${
              pathname == "/book" ? "active-nav-title" : ""
            } `}
          >
            About Booknet
          </Link>
          <Link
            to={"/book"}
            className={`nav-title font-Poppins-SemiBold-600-normal ${
              pathname == "/book" ? "active-nav-title" : ""
            } `}
          >
            Book Slot
          </Link>
          <Link
            to={"/contact"}
            className={`nav-title font-Poppins-SemiBold-600-normal ${
              pathname == "/contact" ? "active-nav-title" : ""
            } `}
          >
            Contact us
          </Link>
          <Button
            btn="primary"
            title="Login"
            onClick={() => navigate("/login")}
          />
          <Button
            btn="secondary"
            title="Sign up"
            onClick={() => navigate("/sign-up")}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
