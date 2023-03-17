import axios, { formToJSON } from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import CenterContainer from "../../components/CenterContainer";
import { AppContext } from "../../components/Context";
import LoginError from "../../components/LoginForm/components/LoginError";
import LoginForm from "../../components/LoginForm/LoginForm";
import Logo from "../../components/Logo/Logo";
import GetProfile from "../../helper/profile";

const Login = () => {
  const navigate = useNavigate();

  const [isError, setIsError] = useState();
  const [isInvalid, setIsInvalid] = useState();

  const [isLoggedIn, setIsLoggedIn] = useState();

  const context = useContext(AppContext);

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
        setIsLoggedIn(true);
        setIsError(false);
      })
      .catch((response) => {
        setIsLoggedIn(false);
        setIsError(true);
      });
  };

  useEffect(() => {
    if (document.cookie.startsWith("token=")) {
      axios
        .get("http://localhost:8080/auth/validate", {
          withCredentials: true,
        })
        .then((response) => {
          setIsLoggedIn(true);
          setIsInvalid(false);
        })
        .catch((response) => {
          setIsLoggedIn(false);
          setIsInvalid(true);
        });
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn && !isError && !isInvalid && isLoggedIn != undefined) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <section className="bg-gray-300 dark:bg-gray-900">
      {!isLoggedIn || isLoggedIn != undefined ? (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Logo key="logo" size="large" title="Test" />
          <CenterContainer title={"Sign in"}>
            <LoginForm onSubmit={handleLogin} />
            {!isError ? null : <LoginError text="Invalid credentials." />}
            {!isInvalid ? null : <LoginError text="Please log in again." />}
          </CenterContainer>
        </div>
      ) : null}
    </section>
  );
};

export default Login;
