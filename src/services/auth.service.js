import axios from "axios";

const API_URL = "http://localhost:3000/auth";

const login = async (jsonForm) => {
  const response = await axios.post(API_URL + "/signin", jsonForm, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true
  });
  if (response.data.username) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const check = async () => {
  const response = await axios.get(API_URL, {
    headers: { "Content-Type": "application/json" },
    withCredentials: true
  });
  if (response.status === 200) {
    return true
  }
  return false
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  login,
  check,
  getCurrentUser,
};

export default AuthService;
