import { Link, useNavigate } from "react-router";

function Confirmation() {
  const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();

  navigate("/new-password");
};

  return (
    <div className="confirmation-page">

      <div className="confirmation-card">

        {/* =================================
            LEFT IMAGE
        ================================== */}
        <div className="confirmation-left">

          <img
            src="/images/signin-model.png"
            alt="Fashion model"
            className="confirmation-image"
          />

        </div>


        {/* =================================
            RIGHT SIDE
        ================================== */}
        <div className="confirmation-right">

          <div className="confirmation-content">

            {/* FASCO LOGO */}
            <Link
              to="/"
              className="confirmation-logo"
            >
              FASCO
            </Link>


            {/* TITLE */}
            <h1 className="confirmation-title">
              Enter The Confirmation Code
            </h1>


            {/* FORM */}
            <form
              className="confirmation-form"
              onSubmit={handleSubmit}
            >

              {/* CONFIRMATION CODE */}
              <div className="confirmation-field">

                <input
                  type="text"
                  name="confirmationCode"
                  placeholder="Confirmation Code"
                  maxLength="6"
                  autoComplete="one-time-code"
                  required
                />

              </div>


              {/* RECOVER ACCOUNT */}
              <button
                type="submit"
                className="confirmation-submit"
              >
                Recover Account
              </button>

            </form>


            {/* RESEND CODE */}
            <div className="confirmation-resend">

              <span>
                Didn’t receive Confirmation Code?
              </span>

              <button
                type="button"
                className="confirmation-resend-link"
              >
                Resend Now
              </button>

            </div>

          </div>


          {/* TERMS */}
          <div className="confirmation-terms">
            FASCO Terms &amp; Conditions
          </div>

        </div>

      </div>

    </div>
  );
}

export default Confirmation;