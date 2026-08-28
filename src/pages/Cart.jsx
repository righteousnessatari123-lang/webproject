import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Cart.css";
import { useNavigate } from "react-router";

function Cart() {
  const [quantity, setQuantity] = useState(1);
  const [giftWrap, setGiftWrap] = useState(false);
  const navigate = useNavigate();

  const productPrice = 14.9;

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const removeProduct = () => {
    setQuantity(0);
  };

  const subtotal = quantity * productPrice + (giftWrap ? 10 : 0);

  return (
    <div className="cart-page">

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
          CART HEADER
      ========================== */}
      <section className="cart-heading">

        <h1>Shopping Cart</h1>

        <div className="cart-breadcrumb">
          <span>Home</span>
          <span className="breadcrumb-arrow">›</span>
          <span>Your Shopping Cart</span>
        </div>

      </section>


      {/* =========================
          CART CONTENT
      ========================== */}
      <main className="cart-container">

        {/* TABLE HEADER */}
        <div className="cart-table-header">

          <div className="cart-column-product">
            Product
          </div>

          <div className="cart-column-price">
            Price
          </div>

          <div className="cart-column-quantity">
            Quantity
          </div>

          <div className="cart-column-total">
            Total
          </div>

        </div>


        {/* =========================
            PRODUCT
        ========================== */}
        {quantity > 0 ? (
          <div className="cart-product-row">

            {/* PRODUCT */}
            <div className="cart-product">

              <img
                src="/images/div.swiper-container.png"
                alt="Mini Dress With Ruffled Straps"
                className="cart-product-image"
              />

              <div className="cart-product-info">

                <h2>Mini Dress With<br />
                  Ruffled Straps
                </h2>

                <p>
                  Color : Red
                </p>

                <button
                  className="remove-button"
                  onClick={removeProduct}
                >
                  Remove
                </button>

              </div>

            </div>


            {/* PRICE */}
            <div className="cart-price">
              $14.90
            </div>


            {/* QUANTITY */}
            <div className="cart-quantity">

              <button
                type="button"
                onClick={decreaseQuantity}
              >
                −
              </button>

              <span>
                {String(quantity).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={increaseQuantity}
              >
                +
              </button>

            </div>


            {/* TOTAL */}
            <div className="cart-total">
              ${(productPrice * quantity).toFixed(2)}
            </div>

          </div>
        ) : (
          <div className="empty-cart">
            Your cart is empty.
          </div>
        )}


        {/* =========================
            GIFT WRAP + SUMMARY
        ========================== */}
        <div className="cart-bottom">

          <div className="cart-gift-wrap">

            <label className="gift-label">

              <input
                type="checkbox"
                checked={giftWrap}
                onChange={(e) => setGiftWrap(e.target.checked)}
              />

              <span className="custom-checkbox"></span>

              <span>
                For <strong>$10.00</strong> Please Wrap The Product
              </span>

            </label>

          </div>


          {/* =========================
              SUMMARY
          ========================== */}
          <div className="cart-summary">

            <div className="subtotal-row">

              <span>
                Subtotal
              </span>

              <strong>
                ${subtotal.toFixed(2)}
              </strong>

            </div>


            <button
              type="button"
              className="checkout-button"
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>

            <a
              href="/cart"
              className="view-cart-link"
            >
              View Cart
            </a>

          </div>

        </div>

      </main>


      {/* =========================
          NEWSLETTER
      ========================== */}
      <section className="cart-newsletter">

        <div className="newsletter-person newsletter-person-left">

          <img
            src="/images/image 2.png"
            alt="Newsletter model"
          />

        </div>


        <div className="newsletter-content">

          <h2>
            Subscribe To Our Newsletter
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Scelerisque duis<br />
            ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>


          <div className="newsletter-form">

            <input
              type="email"
              placeholder="michael@ymail.com"
            />

            <button>
              Subscribe Now
            </button>

          </div>

        </div>


        <div className="newsletter-person newsletter-person-right">

          <img
            src="/images/image 3.png"
            alt="Newsletter model"
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

export default Cart;