function Newsletter() {
  return (
    <section className="newsletter">

      <div className="newsletter-model left">

        <img
          src="src/assets/image 2.png"
          alt=""
        />

      </div>

      <div className="newsletter-content">

        <h2>
          Subscribe To Our Newsletter
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Scelerisque duis ultrices sollicitudin aliquam sem.
        </p>

        <div className="newsletter-input">

          <input
            type="email"
            placeholder="michael@gmail.com"
          />

          <button>
            Subscribe Now
          </button>

        </div>

      </div>

      <div className="newsletter-model right">

        <img
          src="src/assets/image 3.png"
          alt=""
        />

      </div>

    </section>
  );
}

export default Newsletter;