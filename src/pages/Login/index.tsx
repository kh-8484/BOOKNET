import { Link } from "react-router-dom";
import { login } from "../../actions/login";
import useForm from "../../hooks/useForm";
import Button from "../../components/Button";
import Input from "../../components/Input";
import emailIcon from "../../assets/mail-icon.svg";
import passwordIcon from "../../assets/password-icon.svg";
import bg from "../../assets/login-bg.png";
import "../../App.css";
import { useState } from "react";
import AuthType from "../../components/AuthType";

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
    <div className="container">
      <img src={bg} alt="bg" className="bg-img" />
      <div>
        <h2>Login</h2>
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

          <Button
            type="submit"
            title="Login"
            btn={loading ? "loading" : "primary"}
          />
        </form>

        <div>
          Don't have an account? <Link to={"/sign-up"}>Sign Up</Link>
        </div>
        {errors.message && <div>{errors.message}</div>}
      </div>
    </div>
  );
};

export default Login;
