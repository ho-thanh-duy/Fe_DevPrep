import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useGoogleLogin } from "@react-oauth/google";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import useAuthStore from "../store/useAuthStore";
import "./Login.css";

function Login({ isModal }) {
  const navigate = useNavigate();
  const { setUser, setAccessToken } = useAuthStore();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.warning("Please fill in all fields.");
      return;
    }

    console.log("Form login:", formData);

    // Show info notification
    toast.info("Email/Password login is not yet implemented. Please use Google Sign-in.");

    // TODO: Call API Login here when backend is ready
  };

  const isJwt = (token) => typeof token === "string" && token.split(".").length === 3;

  const decodeJwt = (token) => {
    if (!isJwt(token)) return null;

    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.warn("JWT decode failed:", error);
      return null;
    }
  };

  // nếu đăng nhập gg thành công thì sẽ nhận được credentialResponse, trong đó có thể có access_token hoặc id_token
  const handleGoogleSuccess = (credentialResponse) => {
    setAuthError("");
    console.log("Google sign in success:", credentialResponse);

    const jwtSource =
      credentialResponse?.credential || credentialResponse?.id_token;

    if (jwtSource) {
      const decoded = decodeJwt(jwtSource);
      console.log("Decoded Google JWT payload:", decoded);
      return;
    }

    if (credentialResponse?.access_token) {
      const decodedAccessToken = decodeJwt(credentialResponse.access_token);
      if (decodedAccessToken) {
        console.log("Decoded Google access token:", decodedAccessToken);
      } else {
        console.log(
          "Google access_token is opaque and not a JWT. Fetching user info from Google UserInfo endpoint..."
        );
        fetchGoogleUserInfo(credentialResponse.access_token);
      }
    }
  };

  // Fetch user info from Google UserInfo endpoint using access token
  const fetchGoogleUserInfo = async (accessToken) => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/oauth2/v2/userinfo",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const userInfo = await response.json();
      console.log("Google user info:", userInfo);
      // userInfo contains: id, email, verified_email, name, picture, locale, given_name, family_name, etc.

      // Save user info and access token to auth store
      setUser(userInfo);
      setAccessToken(accessToken);
      localStorage.setItem("token", accessToken);
      localStorage.setItem("user", JSON.stringify(userInfo));
      // console.log("token:", localStorage.getItem("token"));
      // console.log("user:", localStorage.getItem("user"));

      // Show success notification
      toast.success(`Welcome back, ${userInfo.name}!`);

      // Redirect to home after successful login
      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (error) {
      console.error("Failed to fetch Google user info:", error);
      setAuthError("Failed to fetch user info. Please try again.");
      
      // Show error notification
      toast.error("Failed to fetch user info. Please try again.");
    }
  };

  const handleGoogleError = () => {
    setAuthError("Google sign-in failed. Vui lòng thử lại.");
    
    // Show error notification
    toast.error("Google sign-in failed. Please try again.");
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: handleGoogleSuccess,
    onError: handleGoogleError,
  });

  // Login with github
const signInWithGitHub = async () => {
  const provider = new GithubAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);

    const credential =
      GithubAuthProvider.credentialFromResult(result);

    const accessToken = credential?.accessToken;

    const user = {
      uid: result.user.uid,
      name: result.user.displayName,
      email: result.user.email,
      avatar: result.user.photoURL,
    };

    console.log("User:", user);
    console.log("Access Token:", accessToken);

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", accessToken);

    toast.success(`Welcome ${user.name}`);

    navigate("/");
  } catch (error) {
    console.error(error);

    toast.error("GitHub login failed");
  }
};

  const handleGitHubSuccess = async (code) => {
    toast.success("GitHub authorization code received.");
    console.log("GitHub authorization code:", code);

    // TODO: Send code to backend for token exchange and user info fetching
    // Example:
    // const result = await fetch('/api/auth/github', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ code }),
    // });
    // const userInfo = await result.json();
    // setUser(userInfo);
    // setAccessToken(userInfo.accessToken);
    // localStorage.setItem('token', userInfo.accessToken);
    // localStorage.setItem('user', JSON.stringify(userInfo));
    // navigate('/');
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

          {authError && <p className="auth-error">{authError}</p>}
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="social-buttons">
          <button
            type="button"
            className="social-btn"
            onClick={() => loginWithGoogle()}
          >
            <FcGoogle size={18} />
            <span>Sign in with Google</span>
          </button>

          <button
            type="button"
            className="social-btn"
            onClick={() => signInWithGitHub()}
          >
            <AiFillGithub size={18} />
            <span>Sign in with GitHub</span>
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