function Packages() {
  return (
    <section className="page-section">

      <div className="page-heading">

        <p className="section-label">
          SPECIAL PACKAGES
        </p>

        <h1>
          Packages
        </h1>

        <p>
          Shop our specially selected fashion packages.
        </p>

      </div>

      <div className="package-grid">

        <div className="package-card">

          <h2>
            Basic Package
          </h2>

          <h3>
            $99
          </h3>

          <p>
            Three selected fashion items.
          </p>

          <button className="black-btn">
            Choose Package
          </button>

        </div>

        <div className="package-card featured-package">

          <h2>
            Premium Package
          </h2>

          <h3>
            $199
          </h3>

          <p>
            Six premium fashion items.
          </p>

          <button className="black-btn">
            Choose Package
          </button>

        </div>

      </div>

    </section>
  );
}

export default Packages;