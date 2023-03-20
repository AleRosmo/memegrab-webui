import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../components/Context";

const context = useContext(AppContext);

const login = async (jsonForm) => {
  const response = await axios.post(context.url.auth + "signin", jsonForm, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.data.username) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  login,
  getCurrentUser,
};

export default AuthService;
