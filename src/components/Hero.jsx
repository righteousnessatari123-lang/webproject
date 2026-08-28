import { Link } from "react-router";
import { useNavigate } from "react-router";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">

      {/* LEFT IMAGE */}
      <div className="hero-side hero-side-left">
        <img
          src="src/assets/image 2 28 (2).png"
          alt="Fashion model"
        />
        
      </div>


      {/* MIDDLE */}
      <div className="hero-middle">

        {/* TOP IMAGE */}
        <div className="hero-top-image">
          <img
            src="src/assets/images (3).png"
            alt="New collection"
          />
        </div>


        {/* TITLE */}
        <div className="hero-title">

          <h1>
            ULTIMATE
          </h1>

          <h2>
            SALE
          </h2>

          <p>
            NEW COLLECTION
          </p>

          <Link
            to="/shop"
            className="hero-shop"
          >
            SHOP NOW
          </Link>

        </div>


        {/* BOTTOM IMAGE */}
        <div className="hero-bottom-image">

          <img
            src="src/assets/images (4).png"
            alt="Fashion collection"
          />


          {/* =========================
              BOTTOM RIGHT CONTROLS
          ========================== */}
          <div className="hero-image-controls">

            {/* CART ICON */}
            <button
              type="button"
              className="hero-cart-button"
              onClick={() => navigate("/cart")}
              aria-label="Shopping Cart"
            >
              🛒
            </button>


            {/* CIRCLED ARROW */}
            <button
              type="button"
              className="hero-arrow-button"
              onClick={() => navigate("/shop")}
              aria-label="Shop"
            >
              →
            </button>

          </div>

        </div>

      </div>


      {/* RIGHT IMAGE */}
      <div className="hero-side hero-side-right">

        <img
          src="src/assets/image 227.png"
          alt="Fashion model"
        />

      </div>

    </section>
  );
}

export default Hero;