import React, { useState, useEffect } from "react";

import MiniCart from "../components/MiniCart";

function Product() {
  const [showMiniCart, setShowMiniCart] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    "/images/product-main.jpg"
  );
  
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("blue");
  const [quantity, setQuantity] = useState(1);

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 5,
    seconds: 59,
  });

  

  /* =========================
     COUNTDOWN TIMER
  ========================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((previous) => {
        let { hours, minutes, seconds } = previous;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours--;
            }
          }
        }

        return {
          hours,
          minutes,
          seconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  

  /* =========================
     PRODUCT IMAGES
  ========================= */

  const productImages = [
    "/images/div.swiper-slide.png",
    "/images/div.swiper-container.png",
    "/images/div.sf-prod-media.png",
    "/images/div.sf-prod-media (1).png",
    "/images/div.sf-prod-media (2).png",
    "/images/div.sf-prod-media (3).png",
    "/images/div.swiper-slide (1).png",
  ];

  /* =========================
     SIZE
  ========================= */

  const sizes = ["M", "L", "XL", "XXL"];

  /* =========================
     COLORS
  ========================= */

  const colors = [
    {
      name: "blue",
      value: "#9FC2D9",
    },
    {
      name: "black",
      value: "#111111",
    },
    {
      name: "pink",
      value: "#F5C7D5",
    },
  ];

  return (
    <>

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
            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-handbag" viewBox="0 0 16 16">
              <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2m3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6z"/>
            </svg></span>
          </div>

        </div>
      </header>
      
      <style>{`

        * {
          box-sizing: border-box;
        }

        .product-page {
          width: 100%;
          background: #ffffff;
          color: #111111;
          font-family: Arial, Helvetica, sans-serif;
        }

        /* =========================
           PRODUCT SECTION
        ========================= */

        .product-section {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 55px 25px 70px;
        }

        .product-container {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
          align-items: start;
        }

        /* =========================
           IMAGE AREA
        ========================= */

        .product-gallery {
          width: 100%;
          display: grid;
          grid-template-columns: 65px 1fr;
          gap: 18px;
        }

        .thumbnail-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .thumbnail {
          width: 58px;
          height: 78px;
          border: 1px solid #eeeeee;
          background: #f4f4f4;
          cursor: pointer;
          overflow: hidden;
          transition: 0.2s ease;
        }

        .thumbnail:hover {
          border-color: #777777;
        }

        .thumbnail.active {
          border: 1px solid #111111;
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .main-product-image {
          width: 100%;
          height: 590px;
          background: #eeeeee;
          overflow: hidden;
        }

        .main-product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* =========================
           PRODUCT INFORMATION
        ========================= */

        .product-info {
          width: 100%;
          padding-top: 5px;
        }

        .product-brand {
          font-size: 11px;
          color: #777777;
          margin-bottom: 8px;
        }

        .product-title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
          font-weight: 500;
          margin: 0 0 7px;
          color: #111111;
        }

        .rating-row {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 10px;
        }

        .stars {
          font-size: 12px;
          letter-spacing: 1px;
        }

        .review-count {
          font-size: 10px;
          color: #555555;
        }

        .price-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 17px;
        }

        .current-price {
          font-size: 19px;
          font-weight: 600;
        }

        .old-price {
          font-size: 12px;
          color: #777777;
          text-decoration: line-through;
        }

        .sale-badge {
          background: #ff5a5a;
          color: white;
          font-size: 8px;
          padding: 4px 7px;
          border-radius: 3px;
          font-weight: 600;
        }

        .wishlist-button {
          float: right;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: white;
          border: 1px solid #eeeeee;
          cursor: pointer;
          font-size: 16px;
        }

        .viewers {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #777777;
          font-size: 11px;
          margin-bottom: 17px;
        }

        .eye {
          font-size: 14px;
        }

        /* =========================
           SALE TIMER
        ========================= */

        .sale-timer {
          width: 100%;
          background: #fff0f0;
          border: 1px solid #ffdede;
          padding: 10px 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .sale-timer-text {
          color: #ff6969;
          font-size: 11px;
        }

        .timer-values {
          color: #ff5d5d;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
        }

        /* =========================
           STOCK
        ========================= */

        .stock-text {
          font-size: 10px;
          color: #555555;
          margin-bottom: 6px;
        }

        .stock-line {
          width: 100%;
          height: 3px;
          background: #e5e5e5;
          margin-bottom: 18px;
          position: relative;
        }

        .stock-line::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 4%;
          height: 100%;
          background: #ec1c1c;
        }

        /* =========================
           OPTIONS
        ========================= */

        .option-section {
          margin-bottom: 17px;
        }

        .option-title {
          font-size: 11px;
          font-weight: 600;
          margin-bottom: 9px;
        }

        .size-options {
          display: flex;
          gap: 8px;
        }

        .size-button {
          width: 38px;
          height: 34px;
          background: white;
          border: 1px solid #dddddd;
          font-size: 10px;
          cursor: pointer;
          transition: 0.2s;
        }

        .size-button:hover {
          border-color: #111111;
        }

        .size-button.active {
          background: #111111;
          color: white;
          border-color: #111111;
        }

        .color-options {
          display: flex;
          gap: 10px;
        }

        .color-button {
          width: 27px;
          height: 27px;
          border-radius: 50%;
          border: 2px solid white;
          outline: 1px solid #dddddd;
          cursor: pointer;
        }

        .color-button.active {
          outline: 2px solid #111111;
        }

        /* =========================
           QUANTITY
        ========================= */

        .quantity-cart {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 20px;
          align-items: center;
          margin-top: 20px;
        }

        .quantity-box {
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid #dddddd;
          padding: 0 10px;
        }

        .quantity-box button {
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 15px;
        }

        .quantity-number {
          font-size: 12px;
        }

        .add-cart-button {
          height: 40px;
          background: white;
          border: 1px solid #383535;
          cursor: pointer;
          font-size: 11px;
          font-weight: 600;
          transition: 0.2s;
        }

        .add-cart-button:hover {
          background: #111111;
          color: white;
        }

        /* =========================
           PRODUCT ACTIONS
        ========================= */

        .product-actions {
          display: flex;
          gap: 25px;
          border-bottom: 1px solid #eeeeee;
          padding: 25px 0 18px;
        }

        .product-action {
          border: none;
          background: transparent;
          font-size: 10px;
          cursor: pointer;
          color: #222222;
        }

        /* =========================
           DELIVERY
        ========================= */

        .delivery-info {
          padding: 15px 0;
          border-bottom: 1px solid #eeeeee;
        }

        .delivery-row {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 8px;
          font-size: 10px;
        }

        .delivery-row:last-child {
          margin-bottom: 0;
        }

        /* =========================
           PAYMENT
        ========================= */

        .payment-box {
          margin-top: 18px;
          background: #fafafa;
          padding: 15px;
          text-align: center;
        }

        .payment-icons {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 9px;
          margin-bottom: 10px;
        }

        .payment-icon {
          width: 34px;
          height: 20px;
          border: 1px solid #dddddd;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 7px;
          font-weight: bold;
        }

        .secure-text {
          font-size: 10px;
        }

        /* =========================
           PROMOTIONAL BANNER
        ========================= */

        .promo-section {
          width: 100%;
          background: #eeeeee;
          min-height: 300px;
          display: grid;
          grid-template-columns: 50% 50%;
          overflow: hidden;
        }

        .promo-image {
          min-height: 300px;
          background: #c7c6c651;
          overflow: hidden;
        }

        .promo-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .promo-content {
          padding: 50px 65px;
          background: #dddddd;
          position: relative;
        }

        .promo-content::before {
          content: "";
          position: absolute;
          left: -30px;
          top: 0;
          width: 60px;
          height: 100%;
          background: #dddddd;
          transform: skew(-15deg);
        }

        .promo-small {
          position: relative;
          font-size: 10px;
          color: #777777;
          margin-bottom: 10px;
        }

        .promo-title {
          position: relative;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
          font-weight: 500;
          margin: 0 0 12px;
        }

        .promo-description {
          position: relative;
          max-width: 390px;
          color: #666666;
          font-size: 10px;
          line-height: 1.6;
        }

        .promo-size {
          position: relative;
          font-size: 10px;
          margin-top: 15px;
        }

        .promo-price {
          position: relative;
          font-size: 18px;
          font-weight: 600;
          margin: 10px 0;
        }

        .promo-button {
          position: relative;
          width: 95px;
          height: 35px;
          border: none;
          background: #000000;
          color: white;
          border-radius: 4px;
          font-size: 9px;
          cursor: pointer;
        }

        /* =========================
           FEATURES
        ========================= */

        .features-section {
          width: 100%;
          padding: 35px 20px;
          border-bottom: 1px solid #eeeeee;
        }

        .features-container {
          max-width: 1000px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .feature {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .feature-icon {
          font-size: 25px;
        }

        .feature-title {
          font-size: 11px;
          font-weight: 600;
          margin-bottom: 3px;
        }

        .feature-text {
          font-size: 8px;
          color: #777777;
        }

        /* =========================
           PEOPLE ALSO LOVED
        ========================= */

        .loved-section {
          width: 100%;
          padding: 80px 20px;
          background: #fafafa;
        }

        .loved-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 35% 65%;
          gap: 40px;
          align-items: center;
        }

        .loved-content {
          padding-left: 20px;
        }

        .loved-title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
          font-weight: 500;
          margin: 0 0 15px;
        }

        .loved-description {
          font-size: 10px;
          line-height: 1.6;
          color: #777777;
          max-width: 280px;
          margin-bottom: 18px;
        }

        .loved-button {
          width: 110px;
          height: 35px;
          background: #000000;
          border: none;
          color: white;
          font-size: 9px;
          border-radius: 4px;
          cursor: pointer;
        }

        .hurry-title {
          font-size: 14px;
          margin-top: 30px;
          margin-bottom: 12px;
        }

        .countdown-large {
          display: flex;
          gap: 10px;
        }

        .count-box {
          text-align: center;
        }

        .count-number {
          width: 45px;
          height: 45px;
          background: white;
          box-shadow: 0 3px 12px rgba(0,0,0,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 17px;
          font-family: monospace;
        }

        .count-label {
          font-size: 8px;
          margin-top: 5px;
          color: #777777;
        }

        .loved-products {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .loved-card {
          position: relative;
          height: 360px;
          background: #eeeeee;
          overflow: hidden;
        }

        .loved-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .discount-card {
          position: absolute;
          bottom: 15px;
          left: 15px;
          background: white;
          padding: 12px 16px;
          min-width: 125px;
        }

        .discount-small {
          font-size: 8px;
          color: #777777;
        }

        .discount-text {
          font-size: 18px;
          margin-top: 5px;
        }

        /* =========================
           NEWSLETTER
        ========================= */

        .newsletter-section {
          width: 100%;
          padding: 100px 20px 80px;
          background: white;
        }

        .newsletter-container {
          max-width: 1000px;
          min-height: 400px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .newsletter-image-left {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 220px;
          height: 380px;
        }

        .newsletter-image-right {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 210px;
          height: 380px;
        }

        .newsletter-image-left img,
        .newsletter-image-right img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .newsletter-content {
          width: 450px;
          text-align: center;
          z-index: 2;
        }

        .newsletter-title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
          font-weight: 500;
          margin-bottom: 12px;
        }

        .newsletter-description {
          font-size: 9px;
          color: #777777;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .newsletter-input {
          width: 100%;
          height: 45px;
          border: none;
          border-bottom: 1px solid #eeeeee;
          box-shadow: 0 8px 25px rgba(0,0,0,0.05);
          padding: 0 15px;
          outline: none;
          font-size: 11px;
          margin-bottom: 15px;
        }

        .newsletter-button {
          width: 130px;
          height: 38px;
          border: none;
          background: #000000;
          color: white;
          font-size: 9px;
          border-radius: 4px;
          cursor: pointer;
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 900px) {

          .product-section {
            padding: 35px 20px 50px;
          }

          .product-container {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .product-gallery {
            max-width: 650px;
            margin: auto;
          }

          .main-product-image {
            height: 500px;
          }

          .product-info {
            max-width: 650px;
            margin: auto;
          }

          .promo-section {
            grid-template-columns: 1fr;
          }

          .promo-image {
            height: 300px;
          }

          .promo-content {
            padding: 45px 30px;
          }

          .features-container {
            grid-template-columns: repeat(2, 1fr);
          }

          .loved-container {
            grid-template-columns: 1fr;
          }

          .loved-content {
            padding-left: 0;
            max-width: 500px;
            margin: auto;
          }

          .newsletter-image-left,
          .newsletter-image-right {
            opacity: 0.25;
          }
        }

        @media (max-width: 600px) {

          .product-section {
            padding: 25px 15px 40px;
          }

          .product-gallery {
            grid-template-columns: 50px 1fr;
            gap: 10px;
          }

          .thumbnail {
            width: 45px;
            height: 45px;
          }

          .thumbnail-container {
            gap: 8px;
          }

          .main-product-image {
            height: 430px;
          }

          .product-title {
            font-size: 24px;
          }

          .sale-timer {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .quantity-cart {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .quantity-box {
            width: 120px;
          }

          .add-cart-button {
            width: 100%;
          }

          .product-actions {
            gap: 15px;
            flex-wrap: wrap;
          }

          .promo-image {
            min-height: 230px;
          }

          .promo-content {
            padding: 35px 25px;
          }

          .promo-title {
            font-size: 24px;
          }

          .features-container {
            grid-template-columns: 1fr;
          }

          .loved-section {
            padding: 55px 15px;
          }

          .loved-products {
            grid-template-columns: 1fr;
          }

          .loved-card {
            height: 400px;
          }

          .newsletter-section {
            padding: 60px 15px;
          }

          .newsletter-container {
            min-height: 350px;
          }

          .newsletter-content {
            width: 100%;
            max-width: 450px;
          }

          .newsletter-title {
            font-size: 24px;
          }

          .newsletter-image-left,
          .newsletter-image-right {
            display: none;
          }
        }

      `}</style>

      <main className="product-page">

        {/* ==========================================
            PRODUCT SECTION
        ========================================== */}

        <section className="product-section">

          <div className="product-container">

            {/* IMAGE GALLERY */}

            <div className="product-gallery">

              <div className="thumbnail-container">

                {productImages.map((image, index) => (
                  <button
                    key={index}
                    className={
                      selectedImage === image
                        ? "thumbnail active"
                        : "thumbnail"
                    }
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                    />
                  </button>
                ))}

              </div>

              <div className="main-product-image">

                <img
                  src={"/images/div.swiper-container.png"}
                  alt="Denim Jacket"
                />

              </div>

            </div>

            {/* PRODUCT INFORMATION */}

            <div className="product-info">

              <button
                className="wishlist-button"
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                </svg>
              </button>

              <div className="product-brand">
                FASCO
              </div>

              <h1 className="product-title">
                Denim Jacket
              </h1>

              <div className="rating-row">

                <span className="stars">
                  ★★★★☆
                </span>

                <span className="review-count">
                  (3)
                </span>

              </div>

              <div className="price-row">

                <span className="current-price">
                  $39.00
                </span>

                <span className="old-price">
                  $59.00
                </span>

                <span className="sale-badge">
                  SAVE 33%
                </span>

              </div>

              <div className="viewers">

                <span className="eye">
                  👁
                </span>

                <span>
                  24 people are viewing this right now
                </span>

              </div>

              {/* SALE TIMER */}

              <div className="sale-timer">

                <span className="sale-timer-text">
                  Hurry up! Sale ends in:
                </span>

                <span className="timer-values">

                  {String(timeLeft.hours).padStart(2, "0")}
                  {" : "}
                  {String(timeLeft.minutes).padStart(2, "0")}
                  {" : "}
                  {String(timeLeft.seconds).padStart(2, "0")}

                </span>

              </div>

              {/* STOCK */}

              <div className="stock-text">
                Only 9 item(s) left in stock!
              </div>

              <div className="stock-line"></div>

              {/* SIZE */}

              <div className="option-section">

                <div className="option-title">
                  Size: {selectedSize}
                </div>

                <div className="size-options">

                  {sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={
                        selectedSize === size
                          ? "size-button active"
                          : "size-button"
                      }
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}

                </div>

              </div>

              {/* COLOR */}

              <div className="option-section">

                <div className="option-title">
                  Color: {selectedColor}
                </div>

                <div className="color-options">

                  {colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      className={
                        selectedColor === color.name
                          ? "color-button active"
                          : "color-button"
                      }
                      style={{
                        backgroundColor: color.value,
                      }}
                      onClick={() =>
                        setSelectedColor(color.name)
                      }
                    />
                  ))}

                </div>

              </div>

              {/* QUANTITY */}

              <div className="option-section">

                <div className="option-title">
                  Quantity
                </div>

                <div className="quantity-cart">

                  <div className="quantity-box">

                    <button
                      type="button"
                      onClick={() =>
                        setQuantity(
                          Math.max(1, quantity - 1)
                        )
                      }
                    >
                      −
                    </button>

                    <span className="quantity-number">
                      {quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        setQuantity(quantity + 1)
                      }
                    >
                      +
                    </button>

                  </div>

                  <button
                   className="add-to-cart"
                   onClick={() => setShowMiniCart(true)}
                  >
                   Add to cart
                  </button>

                </div>

              </div>

              {/* ACTIONS */}

              <div className="product-actions">

                <button
                  className="product-action"
                  type="button"
                >
                  ⇅ &nbsp; Compare
                </button>

                <button
                  className="product-action"
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
                  </svg> Ask a question
                </button>

                <button
                  className="product-action"
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
                  </svg> Share
                </button>

              </div>

              {/* DELIVERY */}

              <div className="delivery-info">

                <div className="delivery-row">
                  <span>🚛</span>
                  <strong>Estimated Delivery:</strong>
                  <span>Jul 30 - Aug 03</span>
                </div>

                <div className="delivery-row">
                  <span>▤</span>
                  <strong>Free Shipping & Returns:</strong>
                  <span>On all orders over $75</span>
                </div>

              </div>

              {/* PAYMENT */}

              <div className="payment-box">

                <div className="payment-icons">

                  <div className="payment-icon">
                    <svg width="60" height="20" viewBox="0 0 60 20" xmlns="http://www.w3.org/2000/svg">
                     <text x="0" y="16"
                     font-family="Arial, sans-serif"
                     font-size="18"
                     font-weight="bold"
                     font-style="italic"
                     fill="#1434CB">VISA</text>
                    </svg>
                  </div>

                  <div className="payment-icon">
                    <svg width="80" height="50" viewBox="0 0 80 50" xmlns="http://www.w3.org/2000/svg">
                      <rect width="80" height="50" rx="4" fill="black"/>
                      <circle cx="32" cy="25" r="14" fill="#EB001B"/>
                      <circle cx="48" cy="25" r="14" fill="#F79E1B"/>
                      <path d="M40 14.5C43.1 17.1 45 20.8 45 25C45 29.2 43.1 32.9 40 35.5C36.9 32.9 35 29.2 35 25C35 20.8 36.9 17.1 40 14.5Z" fill="#FF5F00"/>
                    </svg>
                  </div>

                  <div className="payment-icon">
                    <svg width="90" height="55" viewBox="0 0 90 55" xmlns="http://www.w3.org/2000/svg">
                      <rect width="90" height="55" rx="5" fill="#006FCF"/>

                      <text x="45" y="34"
                        text-anchor="middle"
                        font-family="Arial, sans-serif"
                        font-size="19"
                        font-weight="bold"
                        fill="#006FCF"
                        stroke="white"
                        stroke-width="3"
                        paint-order="stroke">
                        AMEX
                      </text>
                    </svg>
                  </div>

                  <div className="payment-icon">
                    <svg xmlns="http://w3.org" viewBox="0 0 24 15" width="48" height="30">
                      <rect width="24" height="15" fill="#FFF" rx="2"/>
                      <path d="M3 3h4v9H3zm5 0h4v9H8zm5 0h4v9h-4z" fill="none"/>
                      <path d="M6.5 3.5c0-.3-.2-.5-.5-.5H3.5c-.3 0-.5.2-.5.5v5.3c0 1.5 1 2.7 2.5 2.7s2.5-1.2 2.5-2.7zm-1 5.3c0 .6-.4 1-1 1s-1-.4-1-1V5h2z" fill="#003781"/>
                      <path d="M11.5 3.5c0-.3-.2-.5-.5-.5H8.5c-.3 0-.5.2-.5.5v5.3c0 1.5 1 2.7 2.5 2.7.9 0 1.7-.4 2.1-1.1l-.8-.6c-.3.4-.8.6-1.3.6-.6 0-1-.4-1-1V7.5h2.5V5.2H9.5V5h2c.3 0 .5-.2.5-.5z" fill="#E60012"/>
                      <path d="M16.5 3.5c0-.3-.2-.5-.5-.5h-2.5c-.3 0-.5.2-.5.5v8c0 .3.2.5.5.5H16c.3 0 .5-.2.5-.5v-.9c0-.5-.3-1-1-1h-.5V9h.5c.6 0 1-.4 1-1V6.9c0-.6-.4-1-1-1h-.5V5h.5c.3 0 .5-.2.5-.5z" fill="#008136"/>
                    </svg>
                  </div>

                  <div className="payment-icon">
                    <svg xmlns="http://w3.org" viewBox="0 0 24 15" width="48" height="30">
                      <rect width="24" height="15" fill="#FFF" rx="2"/>
                      <path d="M2.5 5h1.7c1.3 0 2.2.8 2.2 2.5S5.5 10 4.2 10H2.5zm1.2 3.8h.4c.7 0 1.1-.4 1.1-1.3s-.4-1.3-1.1-1.3h-.4zm4.5 1.2h1.2V5H8.2zm4-2.8c.2-.5.7-.8 1.3-.8.9 0 1.4.6 1.4 1.4v2.2h1.2V6.9c0-1.3-1-2.1-2.4-2.1-.9 0-1.6.4-1.9 1l-.1-.8h-1v5h1.2zm6.7-.4c.3-.5.9-.8 1.6-.8.4 0 .8.1 1.1.4l-.5.9c-.2-.2-.4-.3-.7-.3-.5 0-.9.4-1 1v1.6h-1.2V5h1.1z" fill="#221E1F"/>
                      <circle cx="16.5" cy="7.5" r="2.1" fill="#FF6600"/>
                    </svg>
                  </div>

                  <div className="payment-icon">
                    <svg xmlns="http://w3.org" viewBox="0 0 24 15" width="48" height="30">
                      <rect width="24" height="15" fill="#FFF" rx="2"/>
                      <circle cx="7.5" cy="7.5" r="4.5" fill="#0079C1" opacity=".15"/>
                      <circle cx="10.5" cy="7.5" r="4.5" fill="#0079C1" opacity=".15"/>
                      <path d="M6 7.5c0-1.8 1.2-3.3 2.9-3.8C8.4 3.3 7.8 3 7.1 3 4.6 3 2.5 5 2.5 7.5S4.6 12 7.1 12c.7 0 1.3-.2 1.8-.7C7.2 10.8 6 9.3 6 7.5zm9.4-4.5c-.7 0-1.3.3-1.8.7 1.7.5 2.9 2 2.9 3.8s-1.2 3.3-2.9 3.8c.5.4 1.1.7 1.8.7 2.5 0 4.6-2 4.6-4.5S17.9 3 15.4 3z" fill="#0079C1"/>
                    </svg>
                  </div>

                  <div className="payment-icon">
                    <svg xmlns="http://w3.org" viewBox="0 0 24 15" width="48" height="30">
                      <rect width="24" height="15" fill="#FFF" rx="2"/>
                      <path d="M2.5 3h10v9h-10z" fill="#007A87"/>
                      <path d="M12.5 3h9v9h-9z" fill="#C4141B"/>
                      <path d="M9.5 3h5v9h-5z" fill="#005A9C"/>
                      
                      <path d="M7.5 11l6-7h2l-6 7z" fill="#FFF"/>
                    </svg>
                  </div>

                </div>

                <div className="secure-text">
                  <h2>Guarantee safe & secure checkout</h2>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ==========================================
            PEAKY BLINDERS BANNER
        ========================================== */}

        <section className="promo-section">

          <div className="promo-image">

            <img
              src="/images/image (8).png"
              alt="Peaky Blinders Collection"
            />

          </div>

          <div className="promo-content">

            <div className="promo-small">
              Women Collection
            </div>

            <h2 className="promo-title">
              Peaky Blinders
            </h2>

            <div className="promo-description">

              <strong>DESCRIPTION</strong>

              <br />
              <br />

              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ut scelerisque dui
              ultrices sollicitudin aliquam sem.
              Scelerisque dui ultrices sollicitudin
              aliquam sem.

            </div>

            <div className="promo-size">
              Size: M
            </div>

            <div className="promo-price">
              $100.00
            </div>

            <button
              className="promo-button"
              type="button"
            >
              Buy Now
            </button>

          </div>

        </section>


        {/* ==========================================
            FEATURES
        ========================================== */}

        <section className="features-section">

          <div className="features-container">

            <div className="feature">

              <div className="feature-icon">
                ♧
              </div>

              <div>
                <div className="feature-title">
                  High Quality
                </div>

                <div className="feature-text">
                  Crafted from top materials
                </div>
              </div>

            </div>


            <div className="feature">

              <div className="feature-icon">
                ♕
              </div>

              <div>
                <div className="feature-title">
                  Warranty Protection
                </div>

                <div className="feature-text">
                  Over 2 years
                </div>
              </div>

            </div>


            <div className="feature">

              <div className="feature-icon">
                ◇
              </div>

              <div>
                <div className="feature-title">
                  Free Shipping
                </div>

                <div className="feature-text">
                  Order over $150
                </div>
              </div>

            </div>


            <div className="feature">

              <div className="feature-icon">
                ⚙
              </div>

              <div>
                <div className="feature-title">
                  24 / 7 Support
                </div>

                <div className="feature-text">
                  Dedicated support
                </div>
              </div>

            </div>

          </div>

        </section>


        {/* ==========================================
            PEOPLE ALSO LOVED
        ========================================== */}

        <section className="loved-section">

          <div className="loved-container">

            <div className="loved-content">

              <h2 className="loved-title">
                People Also Loved
              </h2>

              <p className="loved-description">

                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                Scelerisque dui ultrices
                sollicitudin aliquam sem.
                Scelerisque quis ultrices.

              </p>

              <button
                className="loved-button"
                type="button"
              >
                Buy Now
              </button>

              <h3 className="hurry-title">
                Hurry, Before It's Too Late!
              </h3>

              <div className="countdown-large">

                <div className="count-box">

                  <div className="count-number">
                    02
                  </div>

                  <div className="count-label">
                    Days
                  </div>

                </div>

                <div className="count-box">

                  <div className="count-number">
                    06
                  </div>

                  <div className="count-label">
                    Hr
                  </div>

                </div>

                <div className="count-box">

                  <div className="count-number">
                    05
                  </div>

                  <div className="count-label">
                    Mins
                  </div>

                </div>

                <div className="count-box">

                  <div className="count-number">
                    30
                  </div>

                  <div className="count-label">
                    Sec
                  </div>

                </div>

              </div>

            </div>


            <div className="loved-products">

              <div className="loved-card">

                <img
                  src="/images/image (5).png"
                  alt="Loved product"
                />

                <div className="discount-card">

                  <div className="discount-small">
                    01 — Spring Sale
                  </div>

                  <div className="discount-text">
                    30% OFF
                  </div>

                </div>

              </div>


              <div className="loved-card">

                <img
                  src="/images/image (6).png"
                  alt="Loved product"
                />

              </div>


              <div className="loved-card">

                <img
                  src="/images/image (7).png"
                  alt="Loved product"
                />

              </div>

            </div>

          </div>

        </section>


        {/* ==========================================
            NEWSLETTER
        ========================================== */}

        <section className="newsletter-section">

          <div className="newsletter-container">

            <div className="newsletter-image-left">

              <img
                src="/images/image 2.png"
                alt="Fashion model"
              />

            </div>


            <div className="newsletter-content">

              <h2 className="newsletter-title">
                Subscribe To Our Newsletter
              </h2>

              <p className="newsletter-description">

                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                Scelerisque dui ultrices
                sollicitudin aliquam sem.
                Scelerisque quis ultrices.

              </p>

              <input
                className="newsletter-input"
                type="email"
                placeholder="michael@ymail.com"
              />

              <button
                className="newsletter-button"
                type="button"
              >
                Subscribe Now
              </button>

            </div>


            <div className="newsletter-image-right">

              <img
                src="/images/image 3.png"
                alt="Fashion model"
              />

            </div>

          </div>

        </section>

      </main>

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

      {showMiniCart && (
  <MiniCart
    onClose={() => setShowMiniCart(false)}
  />
)}
    </>
  );
}

export default Product;