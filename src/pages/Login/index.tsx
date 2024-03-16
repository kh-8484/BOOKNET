import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../actions/login";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import AuthType from "../../components/AuthType";
import useForm from "../../hooks/useForm";
import emailIcon from "./../../static/images/mail-icon.svg";
import passwordIcon from "./../../static/images/password-icon.svg";
import bg from "./../../static/images/login-bg.png";
import "./login.scss";

const Login = () => {
  const initialData = {
    email: "",
    password: "",
  };

  const { formData, errors, loading, handleChange, handleSubmit } = useForm({
    initialFormData: initialData,
    redirectPath: "/",
    action: login,
  });

  const [authType, setAuthType] = useState<string>("ADMIN");

  const handleAuthType = (type: string) => {
    setAuthType(type);
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-container">
          <div className="flex-start">
            <h2 className="font-Poppins-SemiBold-600-normal title-text">
              Login
            </h2>
            <AuthType
              handleAuthType={handleAuthType}
              type={authType}
              className="p-tb-2"
            />
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              icon={emailIcon}
              value={formData.email}
              onChange={handleChange}
              errorMessage={errors.email}
              length={60}
            />

            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              icon={passwordIcon}
              value={formData.password}
              onChange={handleChange}
              errorMessage={errors.password}
              length={60}
              className="m-t-2"
            />

            <Button
              type="submit"
              title="Login"
              btn={loading ? "loading" : "primary"}
              className="login-btn m-b-1"
            />
            {errors.message && (
              <div className="flex-start m-b-1 flex-end font-Poppins-SemiBold-600-normal error-message">
                {errors.message}
              </div>
            )}

            <Link
              className="flex-end font-Poppins-SemiBold-600-normal link-tag"
              to={"/forgot-password"}
            >
              Forgot password?
            </Link>

            <div className="font-Poppins-Regular-regular-normal description m-t-3">
              Don't have an account? &nbsp;
              <Link
                className="font-Poppins-SemiBold-600-normal link-tag"
                to={"/sign-up"}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div className="bg-container">
        <img src={bg} alt="bg" className="bg-img" />
      </div>
    </div>
  );
};

export default Login;
