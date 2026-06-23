import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./Navbar.css";
import { useState } from "react";
import LoginModal from "../components/common/LoginModal";

function Navbar() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [showLogin, setShowLogin] = useState(false);

  //data token mẫu khi chưa có backend, sau này sẽ xóa
  useEffect(() => {
    localStorage.setItem("token", "sample-token-123");
    localStorage.setItem(
      "user",
      JSON.stringify({
        id: 1,
        name: "Ho Thanh Duy",
        avatar: "https://i.pravatar.cc/150?img=3",
      })
    );
  }, []);
    // remove token (dùng cho role guest, sau này sẽ xóa)
    localStorage.removeItem("token");
    localStorage.removeItem("user");


  return (
    <header className="navbar">
      <div className="logo">DevPrep</div>

      <ul className="menu">
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/payment">PAYMENT</NavLink>
        </li>
        <li>
          <NavLink to="/news">NEWS</NavLink>
        </li>
        <li>
          <NavLink to="/feedback-system">FEEDBACK SYSTEM</NavLink>
        </li>
        <li>
          <NavLink to="/feedback-ai">FEEDBACK AI</NavLink>
        </li>
        <span className="indicator"></span>
      </ul>

      <div className="nav-btns">
        {!token ? (
          <>
            <button className="start-btn" onClick={() => setShowLogin(true)}>
              Login
            </button>
            <LoginModal show={showLogin} onClose={() => setShowLogin(false)} />
          </>
        ) : (
          <NavLink to="/profile">
            <img
              src={user?.avatar || "https://ui-avatars.com/api/?name=User"}
              alt="Profile"
              className="profile-avatar"
            />
          </NavLink>
        )}
      </div>
    </header>
  );
}

export default Navbar;