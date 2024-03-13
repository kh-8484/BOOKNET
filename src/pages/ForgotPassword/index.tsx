import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import AuthType from "../../components/AuthType";
import useForm from "../../hooks/useForm";
import emailIcon from "../../assets/mail-icon.svg";
import { forgotPassword } from "../../actions/login";
import passwordIcon from "../../assets/password-icon.svg";
import bg from "../../assets/forgot-pass-bg.png";
import "../../App.css";

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
    <div className="container">
      <img src={bg} alt="bg" className="bg-img" />

      <div>
        <h2>Forgot Password</h2>
        <AuthType handleAuthType={handleAuthType} type={authType} />

        <form onSubmit={handleSubmit} className="form-container">
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            icon={emailIcon}
            value={formData.email}
            onChange={handleChange}
            errorMessage={errors.email}
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
          />

          <Button
            type="submit"
            title="Sign Up"
            btn={loading ? "loading" : "primary"}
          />
        </form>
        <Link to={"/forgot-password"}>Forgot password?</Link>
        <div>
          Back to <Link to={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
