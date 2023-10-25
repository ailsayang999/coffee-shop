import React from "react";
import "./loginContent.scss";
import { BiSolidUser, BiSolidLockOpen } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

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

          <button className="login-google-btn login-account-btn">
            <FcGoogle className="btn-icon" />
            Continue with Google
          </button>

          <button className="login-google-btn login-account-btn">
            <SiFacebook className="btn-icon fb-btn" />
            Continue with Facebook
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginContent;
