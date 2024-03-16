import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import AuthType from "../../components/AuthType";
import useForm from "../../hooks/useForm";
import emailIcon from "./../../static/images/mail-icon.svg";
import { forgotPassword } from "../../actions/login";
import passwordIcon from "./../../static/images/password-icon.svg";
import bg from "./../../static/images/forgot-pass-bg.png";
import "../Login/login.scss";

const ForgotPassword = () => {
  const initialData = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { formData, errors, loading, handleChange, handleSubmit } = useForm({
    initialFormData: initialData,
    redirectPath: "/login",
    action: forgotPassword,
  });

  const [authType, setAuthType] = useState<string>("ADMIN");

  const handleAuthType = (type: string) => {
    setAuthType(type);
  };

  return (
    <div className="login-container">
      <div className="bg-container flex-3">
        <img src={bg} alt="bg" className="bg-img" />
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="flex-start">
            <h2 className="font-Poppins-SemiBold-600-normal title-text">
              Forgot Password
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

            <Input
              type="password"
              id="password"
              name="confirmPassword"
              placeholder="Repeat Password"
              icon={passwordIcon}
              value={formData.confirmPassword}
              onChange={handleChange}
              errorMessage={errors.confirmPassword}
              length={60}
              className="m-t-2"
            />

            <Button
              type="submit"
              title="Sign Up"
              btn={loading ? "loading" : "primary"}
              className="login-btn m-b-1"
            />
          </div>
          <div className=" flex-start font-Poppins-Regular-regular-normal description m-t-3">
            Back to &nbsp;{" "}
            <Link
              to={"/login"}
              className="font-Poppins-SemiBold-600-normal link-tag"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
