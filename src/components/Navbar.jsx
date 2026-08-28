import { Link } from "react-router";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-inner">

        <Link to="/" className="navbar-logo">
          FASCO
        </Link>

        <nav className="navbar-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/deals">
            Deals
          </Link>

          <Link to="/new-arrivals">
            New Arrivals
          </Link>

          <Link to="/packages">
            Packages
          </Link>

        </nav>

        <div className="navbar-right">

          <Link
            to="/signin"
            className="signin"
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            className="signup"
          >
            Sign Up
          </Link>

        </div>

        <button className="mobile-menu">
          ☰
        </button>

      </div>

    </header>
  );
}

export default Navbar;