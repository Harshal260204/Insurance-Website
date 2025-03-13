import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";

const Navbar = () => {
  const { user, token, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  useEffect(() => {
    setIsAuthenticated(!!token);
  }, [token, user]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold" onClick={closeMenu}>
          🛡️ <span className="brand-text">InsureNow</span>
        </Link>

        <button className="navbar-toggler" type="button" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/plans" className={`nav-link ${location.pathname === "/plans" ? "active" : ""}`} onClick={closeMenu}>
                Plans
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/apply" className={`nav-link ${location.pathname === "/apply" ? "active" : ""}`} onClick={closeMenu}>
                Apply
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/claims" className={`nav-link ${location.pathname === "/claims" ? "active" : ""}`} onClick={closeMenu}>
                Claims
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} onClick={closeMenu}>
                About
              </Link>
            </li>

            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link to="/dashboard" className={`nav-link ${location.pathname.startsWith("/dashboard") ? "active" : ""}`} onClick={closeMenu}>
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger ms-3" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link to="/login" className="btn btn-primary ms-3" onClick={closeMenu}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
