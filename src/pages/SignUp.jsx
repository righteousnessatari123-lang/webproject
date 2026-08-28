import { Link } from "react-router";
import { useNavigate } from "react-router";

function Signup() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup-page">

      {/* LEFT IMAGE SECTION */}
      <div className="signup-image-section">
        <img
          src="/images/signup-model.png"
          alt="Fashion model"
          className="signup-model"
        />
      </div>


      {/* RIGHT SIGNUP SECTION */}
      <div className="signup-form-section">

        <div className="signup-content">

          {/* LOGO */}
          <Link
            to="/"
            className="signup-logo"
          >
            FASCO
          </Link>


          {/* TITLE */}
          <h1 className="signup-title">
            Create Account
          </h1>


          {/* SOCIAL BUTTONS */}
          <div className="social-signup">

            {/* GOOGLE */}
            <button
              type="button"
              className="social-button"
            >

              <svg
                className="google-icon"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#FFC107"
                  d="M43.6 20.5H42V20H24v8h11.3C33.6 32.7 29.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c10 0 19.1-7.2 19.1-20 0-1.2-.1-2.3-.3-3.5Z"
                />

                <path
                  fill="#FF3D00"
                  d="M6.3 14.7 12.9 19.5C14.7 15 18.9 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34 6.1 29.3 4 24 4c-7.7 0-14.3 4.3-17.7 10.7Z"
                />

                <path
                  fill="#4CAF50"
                  d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-1.9 1.4-4.4 2.4-7.2 2.4-5.1 0-9.4-3.3-11-7.8l-6.6 5.1C9.8 39.7 16.4 44 24 44Z"
                />

                <path
                  fill="#1976D2"
                  d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.6 5.5-6.1 7.1l6.2 5.2C39 36.7 43.1 31.1 43.1 24c0-1.2-.1-2.3-.3-3.5Z"
                />
              </svg>

              <span>
                Sign up with Google
              </span>

            </button>


            {/* GMAIL */}
            <button
              type="button"
              className="social-button"
            >

              <svg
                className="gmail-icon"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#EA4335"
                  d="M5 10v28h7V18.5L24 28l12-9.5V38h7V10L24 21 5 10Z"
                />

                <path
                  fill="#C5221F"
                  d="M5 10l19 14L43 10l-7 0-12 9L12 10H5Z"
                />

              </svg>

              <span>
                Sign up with Email
              </span>

            </button>

          </div>


          {/* OR DIVIDER */}
          <div className="signup-divider">

            <span></span>

            <strong>
              OR
            </strong>

            <span></span>

          </div>


          {/* FORM */}
          <form
            className="signup-form"
            onSubmit={handleSubmit}
          >

            <div className="form-grid">

              {/* FIRST NAME */}
              <div className="form-field">

                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder=" "
                  required
                />

                <label htmlFor="firstName">
                  First Name
                </label>

              </div>


              {/* LAST NAME */}
              <div className="form-field">

                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder=" "
                  required
                />

                <label htmlFor="lastName">
                  Last Name
                </label>

              </div>


              {/* EMAIL */}
              <div className="form-field">

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  required
                />

                <label htmlFor="email">
                  Email Address
                </label>

              </div>


              {/* PHONE */}
              <div className="form-field">

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder=" "
                  required
                />

                <label htmlFor="phone">
                  Phone Number
                </label>

              </div>


              {/* PASSWORD */}
              <div className="form-field">

                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder=" "
                  required
                />

                <label htmlFor="password">
                  Password
                </label>

              </div>


              {/* CONFIRM PASSWORD */}
              <div className="form-field">

                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder=" "
                  required
                />

                <label htmlFor="confirmPassword">
                  Confirm Password
                </label>

              </div>

            </div>


            {/* CREATE ACCOUNT BUTTON */}
              <button
                type="button"
                className="create-account-button"
                onClick={() => navigate("/signin")}
              >
                Create Account
              </button>

          </form>


          {/* LOGIN */}
          <p className="login-text">

            Already have an account?

            <Link to="/signin">
              Login
            </Link>

          </p>

        </div>


        {/* TERMS */}
        <div className="terms">
          FASCO Terms &amp; Conditions
        </div>

      </div>

    </div>
  );
}

export default Signup;