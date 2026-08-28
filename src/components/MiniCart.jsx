import React from "react";
import { useNavigate } from "react-router";
import "./MiniCart.css";

function MiniCart({ onClose }) {
  const navigate = useNavigate();

  return (
    <div
      className="minicart-overlay"
      onClick={onClose}
    >
      <div
        className="minicart"
        onClick={(e) => e.stopPropagation()}
      >

        {/* =========================
            CART HEADER
        ========================== */}
        <div className="minicart-header">

          <div>
            <h1>Shopping Cart</h1>

            <p className="shipping-message">
              Buy <strong>$122.35</strong> More And Get{" "}
              <strong>Free Shipping</strong>
            </p>
          </div>

          <button
            className="minicart-close"
            onClick={onClose}
            aria-label="Close shopping cart"
          >
            ×
          </button>

        </div>


        {/* =========================
            CART PRODUCT
        ========================== */}
        <div className="minicart-product">

          <img
            src="/images/div.swiper-container.png"
            alt="Denim Jacket"
            className="minicart-product-image"
          />

          <div className="minicart-product-details">

            <h2>Denim Jacket</h2>

            <p className="product-color">
              Color : Red
            </p>

            <p className="product-price">
              $14.80
            </p>


            {/* Quantity */}
            <div className="minicart-quantity">

              <button>−</button>

              <span>01</span>

              <button>+</button>

            </div>

          </div>

        </div>


        {/* Divider */}
        <div className="minicart-divider"></div>


        {/* =========================
            GIFT WRAP
        ========================== */}
        <div className="gift-wrap">

          <input
            type="checkbox"
            id="gift-wrap"
          />

          <label htmlFor="gift-wrap">
            For <strong>$10.00</strong> Please Wrap The Product
          </label>

        </div>


        <div className="minicart-divider"></div>


        {/* =========================
            SUBTOTAL
        ========================== */}
        <div className="minicart-subtotal">

          <span>Subtotal</span>

          <strong>$100.00</strong>

        </div>


        {/* =========================
            CHECKOUT
        ========================== */}
        <button
          type="button"
          className="checkout-button"
          onClick={() => {
            onClose();
            navigate("/checkout");
          }}
        >
          Checkout
        </button>


        {/* =========================
            VIEW CART
        ========================== */}
        <a
          href="/cart"
          className="view-cart"
        >
          View Cart
        </a>

      </div>
    </div>
  );
}

export default MiniCart;