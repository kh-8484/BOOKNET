import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../static/images/logo.png";
import Button from "../../Button/Button";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
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

          <div>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
