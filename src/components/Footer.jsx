import { Link } from "react-router";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <Link
          to="/"
          className="footer-logo"
        >
          FASCO
        </Link>

        <div className="footer-links">

          <Link to="/shop">
            Support
          </Link>

          <Link to="/deals">
            FAQ
          </Link>

          <Link to="/signin">
            Contact
          </Link>

          <Link to="/signup">
            Company
          </Link>

          <Link to="/">
            Shop
          </Link>

          <Link to="/">
            Terms
          </Link>

        </div>

      </div>

      <div className="footer-copy">
        © 2026 FASCO. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;