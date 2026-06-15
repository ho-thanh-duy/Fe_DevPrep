import "./Register.css";

function Register() {
  return (
    <div className="register-page">
      <div className="register-card">
        <h2 className="logo">DevPrep AI</h2>

        <h1>Create Your Account</h1>

        <p className="subtitle">
          Start your journey to landing your dream
          engineering role.
        </p>

        <form>
          <div className="form-group">
            <label>FULL NAME</label>
            <input
              type="text"
              placeholder="Alex Rivera"
            />
          </div>

          <div className="form-group">
            <label>EMAIL ADDRESS</label>
            <input
              type="email"
              placeholder="alex.rivera"
              className="error"
            />

            <span className="error-text">
              Please enter a valid email address.
            </span>
          </div>

          <div className="form-group">
            <label>PASSWORD</label>

            <div className="password-box">
              <input
                type="password"
                placeholder="••••••••"
              />
            </div>

            <div className="strength-bar">
              <span className="active"></span>
              <span className="active yellow"></span>
              <span></span>
              <span></span>
            </div>

            <small>STRENGTH: FAIR</small>
          </div>

          <div className="form-group">
            <label>CONFIRM PASSWORD</label>

            <input
              type="password"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="create-btn"
          >
            Create Account
          </button>
        </form>

        <div className="divider">
          <span>OR CONTINUE WITH</span>
        </div>

        <div className="social-login">
          <button>Google</button>
          <button>GitHub</button>
        </div>

        <p className="signin">
          Already have an account?
          <a href="/"> Sign In</a>
        </p>
      </div>
    </div>
  );
}

export default Register;