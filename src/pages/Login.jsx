import { useState } from "react";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Call API Login here
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h2 className="logo">DevPrep AI</h2>

        <h1>Welcome Back</h1>

        <p className="subtitle">
          Sign in to continue your preparation.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="engineer@devprep.ai"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="/forgot-password">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="login-btn">
            Sign In
          </button>

        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="social-buttons">
          <button className="social-btn">
            Google
          </button>

          <button className="social-btn">
            GitHub
          </button>
        </div>

        <p className="register-text">
          Don't have an account?
          <a href="/register"> Register</a>
        </p>

      </div>
    </div>
  );
}

export default Login;