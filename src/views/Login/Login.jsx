import axios, { formToJSON } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CenterContainer from "../../components/CenterContainer";
import LoginError from "../../components/LoginForm/components/LoginError";
import LoginForm from "../../components/LoginForm/LoginForm";
import Logo from "../../components/Logo/Logo";

// console.log(data.headers);
const Login = () => {
  const navigate = useNavigate();
  const [isError, setIsError] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = formToJSON(e.target);
    axios
      .post("http://localhost:8080/auth/login", form, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setIsError(false);
      })
      .catch((response) => {
        setIsError(true);
      });
  };

  useEffect(() => {
    if (document.cookie.startsWith("token=")) {
      axios.get("http://localhost:8080/auth/validate", {
        withCredentials: true,
      });
    }
  });

  useEffect(() => {
    if (!isError && isError != undefined) {
      navigate("/");
    }
  }, [isError]);

  return (
    <section className="bg-gray-300 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Logo size="large" title="Test" />
        <CenterContainer title={"Sign in"}>
          <LoginForm onSubmit={handleLogin} />
          {!isError ? null : <LoginError />}
        </CenterContainer>
      </div>
    </section>
  );
};

export default Login;
