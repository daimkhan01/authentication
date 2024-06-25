import React from "react";
import "./App.css";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";

function App() {
  return (
    <div className="container">
      <div className="form-container">
        <h2>Sign Up</h2>
        <SignUpForm />
      </div>
      <div className="form-container">
        <h2>Sign In</h2>
        <SignInForm />
      </div>
    </div>
  );
}

export default App;
