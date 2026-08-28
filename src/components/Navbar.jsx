import { Link } from "react-router";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* LOGO */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          FASCO
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="navbar-links">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/deals" onClick={closeMenu}>
            Deals
          </Link>

          <Link to="/new-arrivals" onClick={closeMenu}>
            New Arrivals
          </Link>

          <Link to="/packages" onClick={closeMenu}>
            Packages
          </Link>
        </nav>

        {/* DESKTOP RIGHT */}
        <div className="navbar-right">
          <Link
            to="/signin"
            className="signin"
            onClick={closeMenu}
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            className="signup"
            onClick={closeMenu}
          >
            Sign Up
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* MOBILE DROPDOWN */}
      <div className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}>

        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/deals" onClick={closeMenu}>
          Deals
        </Link>

        <Link to="/new-arrivals" onClick={closeMenu}>
          New Arrivals
        </Link>

        <Link to="/packages" onClick={closeMenu}>
          Packages
        </Link>

        <div className="mobile-nav-divider"></div>

        <Link
          to="/signin"
          className="mobile-signin"
          onClick={closeMenu}
        >
          Sign In
        </Link>

        <Link
          to="/signup"
          className="mobile-signup"
          onClick={closeMenu}
        >
          Sign Up
        </Link>

      </div>
    </header>
  );
}

export default Navbar;