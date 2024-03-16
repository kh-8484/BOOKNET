import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import AuthType from "../../components/AuthType";
import useForm from "../../hooks/useForm";
import { register } from "../../actions/login";
import emailIcon from "./../../static/images/mail-icon.svg";
import passwordIcon from "./../../static/images/password-icon.svg";
import bg from "./../../static/images/sign-up-bg.png";
import "../Login/login.scss";

const Register = () => {
  const initialData = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { formData, errors, loading, handleChange, handleSubmit } = useForm({
    initialFormData: initialData,
    redirectPath: "/",
    action: register,
  });

  const [authType, setAuthType] = useState<string>("ADMIN");

  const handleAuthType = (type: string) => {
    setAuthType(type);
  };

  return (
    <div className="login-container">
      <div className="bg-container">
        <img src={bg} alt="bg" className="bg-img" />
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="flex-start">
            <h2 className="font-Poppins-SemiBold-600-normal title-text">
              Register
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
            {errors.message && (
              <div className="flex-start m-b-1 flex-end font-Poppins-SemiBold-600-normal error-message">
                {errors.message}
              </div>
            )}
          </div>
        </form>
        <div className="font-Poppins-Regular-regular-normal description m-t-3">
          Already have an account? &nbsp;
          <Link
            to={"/login"}
            className="font-Poppins-SemiBold-600-normal link-tag"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
