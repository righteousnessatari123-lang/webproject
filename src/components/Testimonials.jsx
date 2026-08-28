function Testimonials() {

  return (
    <section className="testimonials">

      <div className="section-heading">

        <h2>
          This Is What Our Customers Say
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

      </div>

      <div className="testimonial-container">

        <div className="testimonial-small">

          <img
            src="src/assets/image (16).png"
            alt=""
          />

        </div>

        <div className="testimonial-main">

          <div className="testimonial-person">

            <img
              src="src/assets/image (17).png"
              alt=""
            />

          </div>

          <div className="testimonial-text">

            <p>
              “Just what I was looking for. Thank you for making it painless, 
              pleasant and most of all hassle free! All products are great.”
            </p>

            <div className="stars">
              ★★★★★
            </div>

            <p>
                _____________
            </p>

            <h3>
              James K.
            </h3>

            <span>
              Traveler
            </span>

          </div>

        </div>

   
        <div className="testimonial-small">

          
        <div className="testimonial-text">

            <p>
              “Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great.”
            </p>

            <div className="stars">
              ★★★★★
            </div>

            <p>
                _____________
            </p>

            <h3>
              Megen W.
            </h3>

            <span>
              Traveler
            </span>

          </div>

        </div>
     

      </div>

      <div className="testimonial-arrows">

        <button>
          ‹
        </button>

        <button>
          ›
        </button>

      </div>

    </section>
  );
}

export default Testimonials;