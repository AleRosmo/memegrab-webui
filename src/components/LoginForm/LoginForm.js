import React from "react";
import LabelTextInput from "../LabelTextInput/LabelTextInput";
import RememberMe from "../RememberMe/RememberMe";
import LoginButton from "./LoginButton/components/LoginButton";

const LoginForm = ({ onSubmit }) => {
  return (
    <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
      <LabelTextInput name="email" id="email" type="email" placeholder="your@email.com">Your email </LabelTextInput>
      <LabelTextInput name="password" id="password" type="password" placeholder="••••••••"> Your password </LabelTextInput>
      <div className="flex items-center justify-between">
        <RememberMe />
        <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot Password?</a>
      </div>
      <LoginButton />
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?{" "}
        <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
          Sign up
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
