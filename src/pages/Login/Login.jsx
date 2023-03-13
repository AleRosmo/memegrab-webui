import React from "react";
import Button from "../../components/Button/Button";
import InputLabel from "../../components/InputLabel/InputLabel";
import Logo from "../../components/Logo/Logo";
import RememberMe from "../../components/RememberMe/RememberMe";

const Login = () => {
  return (
    <section className="bg-gray-300 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Logo size="large" title="Test" />
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:mx-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <InputLabel
                id="email"
                name="email"
                type="email"
                text="Your email"
              />
              <InputLabel
                id="password"
                name="password"
                type="password"
                text="Your password"
              />
              <div className="flex items-center justify-between">
               <RememberMe />
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot Password?
                </a>
              </div>
              <Button type="input" text="Login" />
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

