import { useState } from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./Login.css";

function Login({ isModal }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

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
    <div id="login-page">
    <div className={isModal ? "login-page modal-login" : "login-page"}>
      <div className="login-card">
        <h1>Welcome Back</h1>

        <p className="subtitle">
          Sign in to continue your preparation.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Email Address</label>

            <div className="input-wrapper">
              <MdEmail className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="engineer@devprep.ai"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>

            <div className="input-wrapper">
              <MdLock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </button>
            </div>
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
            <FcGoogle size={18} />
            <span>Google</span>
          </button>

          <button className="social-btn">
            <AiFillGithub size={18} />
            <span>GitHub</span>
          </button>
        </div>

        <p className="register-text">
          Don't have an account?
          <a href="/register"> Register</a>
        </p>

      </div>
    </div>
    </div>

  );
}

export default Login;