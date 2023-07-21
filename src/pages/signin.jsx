import React, { useState } from "react";
import "./logIn.css";

export const Signin = () => {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);

  const handleToggleForm = () => {
    setLoginFormVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className="login-page">
      <div className="form">
        {isLoginFormVisible ? (
          <form className="login-form">
            <h2>Sign In</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            <p className="message">
              Not registered?{" "}
              <span onClick={handleToggleForm}>Create an account</span>
            </p>
          </form>
        ) : (
          <form className="register-form">
            <h2>Sign Up</h2>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Create Account</button>
            <p className="message">
              Already registered?{" "}
              <span onClick={handleToggleForm}>Sign In</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
