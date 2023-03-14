import axios, { formToJSON } from "axios";
import React, { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import Logo from "../../components/Logo/Logo";

const handleLogin = (event) => {
  event.preventDefault();
  const form = formToJSON(event.target);

  const req = axios.post("http://localhost:8080/login", form, {headers: {"Access-Control-Allow-Origin": "*"}})
  req.then(console.log(form));
};

const Login = () => {

  const [error, setError] = useState(false)

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
