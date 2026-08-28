import { Link } from "react-router";

function Deals() {
  return (
    <section className="deals">

      <div className="deals-content">

        <h2>
          Deals Of The Month
        </h2>

        <p className="deals-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Scelerisque duis ultrices sollicitudin aliquam sem.
          Scelerisque duis ultrices sollicitudin.
        </p>

        <Link
          to="/deals"
          className="deal-button"
        >
          Buy Now
        </Link>

        <h4>
          Hurry, Before It's Too Late!
        </h4>

        <div className="timer">

          <div>
            <strong>02</strong>
            <span>Days</span>
          </div>

          <div>
            <strong>06</strong>
            <span>Hr</span>
          </div>

          <div>
            <strong>05</strong>
            <span>Mins</span>
          </div>

          <div>
            <strong>33</strong>
            <span>Sec</span>
          </div>

        </div>

      </div>

      <div className="deals-products">

        <div className="deal-product">

          <img
            src="src/assets/image (5).png"
            alt=""
          />

          <div className="deal-tag">
            <strong>
              01--- Spring Sale
              30% OFF
            </strong>
          </div>

        </div>

        <div className="deal-product">

          <img
            src="src/assets/image (6).png"
            alt=""
          />

        </div>

        <div className="deal-product">

          <img
            src="src/assets/image (7).png"
            alt=""
          />

        </div>

      </div>

    </section>
  );
}

export default Deals;