function Instagram() {

  const images = [
    "/images/instagram-1.png",
    "/images/instagram-2.png",
    "/images/instagram-3.png",
    "/images/instagram-4.png",
    "/images/instagram-5.png",
    "/images/instagram-6.png",
    "/images/instagram-7.png",
  ];

  return (
    <section className="instagram">

      <div className="section-heading">

        <h2>
          Follow Us On Instagram
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Scelerisque duis ultrices sollicitudin aliquam sem.
        </p>

      </div>

      <div className="instagram-grid">

        {images.map((image) => (
          <img
            key={image}
            src={image}
            alt="Instagram fashion"
          />
        ))}

      </div>

    </section>
  );
}

export default Instagram;