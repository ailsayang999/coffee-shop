import React from "react";
import "./loginContent.scss";
import { BiSolidUser, BiSolidLockOpen } from "react-icons/bi";

const LoginContent = () => {
  return (
    <div className="login-page">
      <div className="login-page-wrapper">
        <form action="" className="">
          <h1>Login</h1>

          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <BiSolidUser className="icon" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <BiSolidLockOpen className="icon" />
          </div>

          <div className="remember-forget">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="/">Forgot password?</a>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <div className="register-link">
            <p>
              Don't have an account <a href="/">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginContent;
