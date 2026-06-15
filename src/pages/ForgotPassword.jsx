import { FaArrowLeft, FaPaperPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./ForgotPassword.css";
import { NavLink } from "react-router-dom";
function ForgotPassword() {
  return (
    <div className="forgot-page">
      <div className="forgot-wrapper">

        <div className="back-btn">
          <FaArrowLeft />
          <NavLink to="/login">Back to Login</NavLink>
        </div>

        <div className="forgot-card">

          <div className="logo-box"></div>

          <h2 className="brand">DevPrep AI</h2>

          <h1>Reset Your Password</h1>

          <p className="description">
            Enter your registered email address below and
            we'll send you a 6-digit OTP to verify your identity.
          </p>

          <div className="input-group">
            <label>EMAIL ADDRESS</label>

            <div className="input-box">
              <MdEmail className="icon" />

              <input
                type="email"
                placeholder="name@company.com"
              />
            </div>
          </div>

          <button className="otp-btn">
            Send OTP
            <FaPaperPlane />
          </button>

          <p className="support">
            Still having trouble?
            <span> Contact Support</span>
          </p>

        </div>

        <div className="footer-info">
          <span>v2.4.0-STABLE</span>
          <span>•</span>
          <span>SECURE_AUTH_NODE</span>
        </div>

      </div>
    </div>
  );
}

export default ForgotPassword;