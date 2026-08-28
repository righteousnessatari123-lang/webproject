import { Link, useNavigate } from "react-router";

function EnterNewPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // After changing the password, return to sign in
    navigate("/signin");
  };

  return (
    <div
      className="new-password-page"
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        padding: "30px",
        boxSizing: "border-box",
      }}
    >
      <div
        className="new-password-card"
        style={{
          width: "1392px",
          height: "780px",
          maxWidth: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          backgroundColor: "#ffffff",
          border: "1px solid #dddddd",
          borderRadius: "0 25px 25px 0",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* LEFT IMAGE */}
        <div
          className="new-password-left"
          style={{
            width: "100%",
            height: "100%",
            minWidth: 0,
            minHeight: 0,
            overflow: "hidden",
            backgroundColor: "#eeeeee",
          }}
        >
          <img
            src="/images/signin-model.png"
            alt="Fashion model"
            className="new-password-image"
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "100%",
              maxHeight: "100%",
              display: "block",
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
        </div>

        {/* RIGHT SECTION */}
        <div
          className="new-password-right"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            minWidth: 0,
            minHeight: 0,
            backgroundColor: "#ffffff",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          {/* CONTENT */}
          <div
            className="new-password-content"
            style={{
              width: "80%",
              maxWidth: "484px",
              margin: "0 auto",
              paddingTop: "67px",
              boxSizing: "border-box",
            }}
          >
            {/* FASCO LOGO */}
            <Link
              to="/"
              className="new-password-logo"
              style={{
                display: "block",
                width: "fit-content",
                color: "#444444",
                textDecoration: "none",
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "49px",
                lineHeight: "1",
                fontWeight: "700",
                letterSpacing: "-1px",
                margin: "0 0 198px 0",
              }}
            >
              FASCO
            </Link>

            {/* TITLE */}
            <h1
              className="new-password-title"
              style={{
                margin: "0 0 53px 0",
                color: "#111111",
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "24px",
                lineHeight: "1.2",
                fontWeight: "700",
              }}
            >
              Enter Your New Password
            </h1>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="new-password-form"
              style={{
                width: "100%",
                margin: "0",
                padding: "0",
              }}
            >
              {/* NEW PASSWORD */}
              <div
                className="new-password-field"
                style={{
                  width: "100%",
                  height: "39px",
                  margin: "0 0 19px 0",
                  borderBottom: "1px solid #b5b5b5",
                  boxSizing: "border-box",
                }}
              >
                <input
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  autoComplete="new-password"
                  required
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    margin: "0",
                    padding: "0",
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                    color: "#222222",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "13px",
                    fontWeight: "400",
                    letterSpacing: "0.5px",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              {/* CONFIRM PASSWORD */}
              <div
                className="new-password-field"
                style={{
                  width: "100%",
                  height: "39px",
                  margin: "0",
                  borderBottom: "1px solid #b5b5b5",
                  boxSizing: "border-box",
                }}
              >
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirmation Password"
                  autoComplete="new-password"
                  required
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    margin: "0",
                    padding: "0",
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                    color: "#222222",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "13px",
                    fontWeight: "400",
                    letterSpacing: "0.5px",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="new-password-submit"
                style={{
                  width: "100%",
                  height: "44px",
                  display: "block",
                  margin: "22px 0 0 0",
                  padding: "0",
                  border: "none",
                  borderRadius: "6px",
                  backgroundColor: "#5d86e3",
                  color: "#ffffff",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: "12px",
                  fontWeight: "700",
                  cursor: "pointer",
                  boxSizing: "border-box",
                }}
              >
                Submit
              </button>
            </form>
          </div>

          {/* TERMS & CONDITIONS */}
          <div
            className="new-password-terms"
            style={{
              position: "absolute",
              right: "58px",
              bottom: "27px",
              color: "#111111",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "12px",
              fontWeight: "400",
              whiteSpace: "nowrap",
            }}
          >
            FASCO Terms &amp; Conditions
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnterNewPassword;