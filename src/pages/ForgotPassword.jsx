import { Link, useNavigate } from "react-router";

function ForgotPassword() {
  const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();

  navigate("/confirmation");
};

  return (
    <div className="forgot-page">

      <div className="forgot-card">

        {/* LEFT IMAGE */}
        <div className="forgot-left">
          <img
            src="/images/signin-model.png"
            alt="Fashion model"
            className="forgot-image"
          />
        </div>


        {/* RIGHT SIDE */}
        <div className="forgot-right">

          <div className="forgot-content">

            {/* FASCO LOGO */}
            <Link
              to="/"
              className="forgot-logo"
            >
              FASCO
            </Link>


            {/* TITLE */}
            <h1 className="forgot-title">
              Forget Password
            </h1>


            {/* FORM */}
            <form
              className="forgot-form"
              onSubmit={handleSubmit}
            >

              {/* FIRST NAME */}
              <div className="forgot-field">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  autoComplete="given-name"
                  required
                />
              </div>


              {/* LAST NAME */}
              <div className="forgot-field">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  autoComplete="family-name"
                  required
                />
              </div>


              {/* EMAIL */}
              <div className="forgot-field">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  autoComplete="email"
                  required
                />
              </div>


              {/* PHONE */}
              <div className="forgot-field">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  autoComplete="tel"
                  required
                />
              </div>


              {/* SEND CONFIRMATION CODE */}
              <button
                type="submit"
                className="forgot-submit"
              >
                Send Confirmation Code
              </button>

            </form>


            {/* LOGIN */}
            <div className="forgot-login">
              Already have an account?

              <Link
                to="/signin"
                className="forgot-login-link"
              >
                Login
              </Link>
            </div>

          </div>


          {/* TERMS */}
          <div className="forgot-terms">
            FASCO Terms &amp; Conditions
          </div>

        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;