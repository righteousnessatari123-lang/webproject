function Instagram() {

  const images = [
    "src/assets/instagram-1.png",
    "src/assets/instagram-2.png",
    "src/assets/instagram-3.png",
    "src/assets/instagram-4.png",
    "src/assets/instagram-5.png",
    "src/assets/instagram-6.png",
    "src/assets/instagram-7.png",
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