import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const register = async ({
  email,
  password,
  authType,
}: {
  email: string;
  password: string;
  authType: string;
}): Promise<{
  message: string;
  success: boolean;
}> => {
  try {
    const result = await axios.post(BACKEND_URL + "register", {
      email,
      password,
      authType,
    });

    const { message, status, token } = result.data;

    if (status != 200)
      return { message: "Signup fail, Please try again", success: false };

    localStorage.setItem("token", token);

    return { message, success: true };
  } catch (error) {
    console.log("error: ", error);
    return { message: "Signup fail, Please try again", success: false };
  }
};

export const login = async ({
  email,
  password,
  authType,
}: {
  email: string;
  password: string;
  authType: string;
}): Promise<{
  message: string;
  success: boolean;
}> => {
  try {
    console.log(" email, password,  authType,: ", email, password, authType);

    const result = await axios.post(BACKEND_URL + "login", {
      email,
      password,
      authType,
    });

    const { status, message, token } = result.data;

    if (status != 200)
      return { message: "Incorrect Email or Password", success: false };

    localStorage.setItem("token", token);

    return { message, success: true };
  } catch (error) {
    console.log("error: ", error);
    return { message: "Login fail, Please try again", success: false };
  }
};

export const forgotPassword = async ({
  email,
  password,
  authType,
}: {
  email: string;
  password: string;
  authType: string;
}): Promise<{
  message: string;
  success: boolean;
}> => {
  try {
    const result = await axios.post(BACKEND_URL + "forgot-password", {
      email,
      password,
      authType,
    });

    const { status, message, token } = result.data;

    if (status != 200)
      return { message: "Incorrect Email or Password", success: false };

    localStorage.setItem("token", token);

    return { message, success: true };
  } catch (error) {
    console.log("error: ", error);
    return { message: "Login fail, Please try again", success: false };
  }
};
