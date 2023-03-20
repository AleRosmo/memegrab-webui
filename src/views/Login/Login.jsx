import axios, { formToJSON } from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CenterContainer from "../../components/CenterContainer";
import { AppContext } from "../../components/Context";
import LoginError from "../../components/LoginForm/components/LoginError";
import LoginForm from "../../components/LoginForm/LoginForm";
import Logo from "../../components/Logo/Logo";
import AuthService from "../../services/auth.service";

export default function Login() {
  const context = useContext(AppContext);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false)
  const [isLogged, setIsLogged] = useState();
  const [isError, setIsError] = useState();
  const [isInvalid, setIsInvalid] = useState();

  const handleLogin = (e) => {
    setIsLoading(true)
    e.preventDefault();
    const form = formToJSON(e.target);
    AuthService.login(form).then(
      () => {
        navigate("/");
        window.location.reload();
      },
      (error) => {
        const responseMessage =
          (error.response ** error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
    axios
      .post("http://localhost:8080/auth/login", form, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // response.data
        setIsLogged(true);
        localStorage.setItem("auth", response.data);
        navigate(context.url.home);
      })
      .catch((response) => {
        setIsLogged(false);
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
          setIsLogged(true);
          navigate(context.url.home);
        })
        .catch((response) => {
          setIsLogged(false);
          setIsInvalid(true);
        });
    }
    return () => {};
  }, []);

  return (
    <section className="bg-gray-300 dark:bg-gray-900">
      {!isLogged && isLogged != undefined ? (
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
}
