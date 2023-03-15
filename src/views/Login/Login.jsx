import axios, { formToJSON } from "axios";
import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
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
      .post("http://localhost:8080/auth", form, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json"
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
      // how do i log in now?? /auth/validate
    }
  })

  useEffect(() => {
    if (!isError && isError != undefined) {
      navigate("/");
    }
  }, [isError]);

  return (
    <section className="bg-gray-300 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Logo size="large" title="Test" />
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:mx-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in
            </h1>
            <LoginForm onSubmit={handleLogin}> </LoginForm>
            {!isError ? null : <LoginError />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
