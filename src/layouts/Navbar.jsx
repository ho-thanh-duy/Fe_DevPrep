import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>DevPrep</h2>

      <div className="nav-links">
        <NavLink to="/">HOME</NavLink>

        <NavLink to="/payment">
          PAYMENT
        </NavLink>

        <NavLink to="/news">
          NEWS
        </NavLink>

        <NavLink to="/feedback-system">
          FEEDBACK SYSTEM
        </NavLink>

        <NavLink to="/feedback-ai">
          FEEDBACK AI
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;