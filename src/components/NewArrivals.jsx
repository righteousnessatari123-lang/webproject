import { Link } from "react-router";

function NewArrivals() {

  const products = [
    {
      image: "/images/Images (5).png",
      name: "Shiny Dress",
      category: "Al Karam",
      price: "$95.50",
    },
    {
      image: "/images/Images (6).png",
      name: "Long Dress",
      category: "Al Karam",
      price: "$95.50",
    },
    {
      image: "/images/Images (7).png",
      name: "Full Sweater",
      category: "Al Karam",
      price: "$95.50",
    },
    {
      image: "/images/Images (8).png",
      name: "White Dress",
      category: "Al Karam",
      price: "$95.50",
    },
    {
      image: "/images/Images (9).png",
      name: "Colorful Dress",
      category: "Al Karam",
      price: "$95.50",
    },
    {
      image: "/images/Images (10).png",
      name: "White Shirt",
      category: "Al Karam",
      price: "$95.50",
    },
  ];

  return (
    <section className="arrivals">

      <div className="section-heading">

        <h2>
          New Arrivals
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin 
        </p>

      </div>

      <div className="arrival-tabs">

        <button>
          Men's Fashion
        </button>

        <button className="active">
          Women's Fashion
        </button>

        <button>
          Women Accessories
        </button>

        <button>
         Men Accessories
        </button>

        <button>
          Discount Deals
        </button>

      </div>

      <div className="products">

        {products.map((product) => (
          <div
            className="product"
            key={product.name}
          >

            <div className="product-image">

              <img
                src={product.image}
                alt={product.name}
              />

            </div>

            <div className="product-details">

              <div className="product-top">

                <h3>
                  {product.name}
                </h3>

                <span className="stars">
                  ★★★★★
                </span>

              </div>

              <p>
                {product.category}
              </p>

              <div className="product-review">

                <p>
                  {product.reviewCount} (4.1k) Customer Reviews
                </p>

              </div>

              <div className="product-bottom">

                <span>
                  {product.price}
                </span>

                <small>
                  Almost Sold Out
                </small>

              </div>

            </div>

          </div>
        ))}

      </div>

      <Link
        to="/shop"
        className="view-more"
      >
        View More
      </Link>

    </section>
  );
}

export default NewArrivals;