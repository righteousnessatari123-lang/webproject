function Featured() {
  return (
    <section className="featured">

      <div className="featured-image">

        <img
          src="/images/image (8).png"
          alt="Peaky Blinders"
        />

      </div>

      <div className="featured-content">

        <p>
          Women Collection
        </p>

        <h2>
          Peaky Blinders
        </h2>

        <h4>
          DESCRIPTION
        </h4>

        <p className="featured-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. 
           duis ultrices sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis.
        </p>

        <div className="featured-description">
        <p>
            Size: 
            <button className="size-button">
                M
            </button>
        </p>
        </div>

        <div className="featured-price">
          $100.00
        </div>

        <button>
          Buy Now
        </button>

      </div>

    </section>
  );
}

export default Featured;