import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout-page">

      {/* =========================
          HEADER
      ========================== */}
      <header className="checkout-header">
        <div className="checkout-header-inner">

          <div className="checkout-logo">
            FASCO
          </div>

          <nav className="checkout-nav">
            <a href="/">Home</a>
            <a href="/shop">Shop</a>
            <a href="/products">
              Products
            </a>

            <a href="#" className="pages-link">
              Pages <span>⌄</span>
            </a>
          </nav>

          <div className="checkout-icons">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg></span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
            </svg></span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
            </svg></span>

            <span className="bag-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-handbag" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2m3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6z"/>
              </svg>
              <b>1</b>
            </span>
          </div>

        </div>
      </header>


      {/* =========================
          PAGE TITLE
      ========================== */}
      <section className="checkout-title">
        <h1>FASCO Demo Checkout</h1>
      </section>


      {/* =========================
          CHECKOUT AREA
      ========================== */}
      <main className="checkout-main">

        {/* LEFT SIDE */}
        <section className="checkout-form-section">

          {/* CONTACT */}
          <div className="checkout-section">

            <div className="section-heading-row">
              <h2>Contact</h2>

              <p>
                Have an account?{" "}
                <a href="/signin">Create Account</a>
              </p>
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="checkout-input full"
            />

          </div>


          {/* DELIVERY */}
          <div className="checkout-section">

            <h2>Delivery</h2>

            <div className="select-wrapper">
              <select defaultValue="">
                <option value="" disabled>
                  Country / Region
                </option>
                <option>Nigeria</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
              </select>

              <span>⌄</span>
            </div>


            <div className="two-inputs">
              <input
                type="text"
                placeholder="First Name"
                className="checkout-input"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="checkout-input"
              />
            </div>


            <input
              type="text"
              placeholder="Address"
              className="checkout-input full"
            />


            <div className="two-inputs">
              <input
                type="text"
                placeholder="City"
                className="checkout-input"
              />

              <input
                type="text"
                placeholder="Postal Code"
                className="checkout-input"
              />
            </div>


            <label className="save-checkbox">
              <input type="checkbox" />
              <span>Save This Info For Future</span>
            </label>

          </div>


          {/* PAYMENT */}
          <div className="checkout-section payment-section">

            <h2>Payment</h2>

            <div className="payment-box">

              <div className="payment-method">
                <span>Credit Card</span>

                <div className="card-right">
                  <div className="mastercard">
                    <span></span>
                    <span></span>
                  </div>

                  <span className="payment-arrow">
                    ⌄
                  </span>
                </div>
              </div>


              <div className="card-number-wrapper">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="checkout-input full"
                />

                <span className="lock-icon">
                  🔒
                </span>
              </div>


              <div className="two-inputs">
                <input
                  type="text"
                  placeholder="Expiration Date"
                  className="checkout-input"
                />

                <input
                  type="text"
                  placeholder="Security Code"
                  className="checkout-input"
                />
              </div>


              <input
                type="text"
                placeholder="Card Holder Name"
                className="checkout-input full"
              />


              <label className="save-checkbox payment-save">
                <input type="checkbox" />
                <span>Save This Info For Future</span>
              </label>

            </div>

          </div>


          <button className="pay-now-button">
            Pay Now
          </button>


          <p className="checkout-copyright">
            Copyright © 2022 FASCO . All Rights Reserved.
          </p>

        </section>


        {/* =========================
            RIGHT ORDER SUMMARY
        ========================== */}
        <aside className="order-summary">

          <div className="order-product">

            <div className="order-image-wrapper">

              <img
                src="/images/div.swiper-container.png"
                alt="Mini Dress With Ruffled Straps"
              />

              <span className="order-count">
                1
              </span>

            </div>


            <div className="order-product-info">

              <h3>
                Mini Dress With Ruffled Straps
              </h3>

              <p>
                Red
              </p>

            </div>


            <strong className="order-price">
              $100.00
            </strong>

          </div>


          {/* DISCOUNT */}
          <div className="discount-row">

            <input
              type="text"
              placeholder="Discount code"
            />

            <button>
              Apply
            </button>

          </div>


          {/* TOTALS */}
          <div className="order-totals">

            <div>
              <span>Subtotal</span>
              <strong>$100.00</strong>
            </div>

            <div>
              <span>Shipping</span>
              <strong>$40.00</strong>
            </div>

            <div className="total-row">
              <span>Total</span>
              <strong>$140.00</strong>
            </div>

          </div>

        </aside>

      </main>


      {/* =========================
          NEWSLETTER
      ========================== */}
      <section className="checkout-newsletter">

        <div className="newsletter-person newsletter-left">
          <img
            src="/src/assets/image 2.png"
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
            Scelerisque duis ultrices sollicitudin.
          </p>


          <div className="newsletter-input-wrapper">

            <input
              type="email"
              placeholder="michael@ymail.com"
            />

          </div>


          <button>
            Subscribe Now
          </button>

        </div>


        <div className="newsletter-person newsletter-right">
          <img
            src="/src/assets/image 3.png"
            alt=""
          />
        </div>

      </section>


      {/* =========================
          FOOTER
      ========================== */}
      <footer className="checkout-footer">

        <div className="checkout-footer-inner">

          <div className="footer-logo">
            FASCO
          </div>


          <nav className="footer-nav">

            <a href="/">Home</a>

            <a href="/shop">Shop</a>

            <a href="/products">Products</a>

            <a href="#">
              Pages <span>⌄</span>
            </a>

          </nav>

        </div>


        <p className="footer-copyright">
          Copyright © 2022 FASCO . All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default Checkout;