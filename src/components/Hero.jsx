import { Link, useNavigate } from "react-router";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">

      {/* LEFT IMAGE */}
      <div className="hero-side hero-side-left">
        <img
          src="/images/image 2 28 (2).png"
          alt="Fashion model"
        />
      </div>

      {/* MIDDLE */}
      <div className="hero-middle">

        {/* TOP IMAGE */}
        <div className="hero-top-image">
          <img
            src="/images/images (3).png"
            alt="New collection"
          />
        </div>

        {/* TITLE */}
        <div className="hero-title">

          <h1>ULTIMATE</h1>

          <h2>SALE</h2>

          <p>NEW COLLECTION</p>

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
            src="/images/images (4).png"
            alt="Fashion collection"
          />

          {/* CONTROLS */}
          <div className="hero-image-controls">

            {/* CART */}
            <button
              type="button"
              className="hero-cart-button"
              onClick={() => navigate("/cart")}
              aria-label="Shopping Cart"
            >
              🛒
            </button>

            {/* ARROW */}
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
          src="/images/image 227.png"
          alt="Fashion model"
        />
      </div>

    </section>
  );
}

export default Hero;