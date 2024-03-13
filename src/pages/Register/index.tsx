import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import AuthType from "../../components/AuthType";
import useForm from "../../hooks/useForm";
import { register } from "../../actions/login";
import emailIcon from "../../assets/mail-icon.svg";
import passwordIcon from "../../assets/password-icon.svg";
import bg from "../../assets/sign-up-bg.png";
import "../../App.css";

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
    <div className="container">
      <img src={bg} alt="bg" className="bg-img" />

      <div>
        <h2>Register</h2>
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
          Already have an account? <Link to={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
