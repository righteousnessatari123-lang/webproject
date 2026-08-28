import { Link } from "react-router";

function Shop() {
  const products = [
    {
      image: "/images/Link ⏵ responsive-image.png",
      name: "Rounded Red Hat",
      price: "$8.00",
      colors: ["#ffd600", "#000000"],
    },
    {
      image: "/images/div.overflow-hidden.png",
      name: "Linen-blend Shirt",
      price: "$17.00",
      colors: ["#b9ddff", "#f5f5f5"],
    },
    {
      image: "/images/Link ⏵ responsive-image (1).png",
      name: "Long-sleeve Coat",
      price: "$106.00",
      colors: ["#ffffff", "#c7dfc1"],
    },
    {
      image: "/images/Link ⏵ responsive-image (2).png",
      name: "Bea Denim Hat",
      price: "$25.00",
      colors: ["#dce7ee", "#063c61"],
    },
    {
      image: "/images/Link ⏵ responsive-image (3).png",
      name: "Linen Plain Top",
      price: "$25.00",
      colors: ["#dce9d9", "#eeeeee"],
    },
    {
      image: "/images/Link ⏵ responsive-image (4).png",
      name: "Oversized T-shirt",
      price: "$11.00",
      oldPrice: "$14.00",
      colors: ["#e6d9e4", "#eeeeee", "#ffffff"],
    },
    {
      image: "/images/Link ⏵ responsive-image (5).png",
      name: "Polarised Sunglasses",
      price: "$18.00",
      oldPrice: "$21.00",
      colors: ["#111111", "#9c846b"],
    },
    {
      image: "/images/Link ⏵ responsive-image (6).png",
      name: "Rockstar Jacket",
      price: "$22.00",
      colors: ["#d8cce1", "#cde9ed"],
    },
    {
      image: "/images/Link ⏵ responsive-image (7).png",
      name: "Dotted Black Dress",
      price: "$20.00",
      colors: ["#000000", "#879eb2", "#c3d0dc"],
    },
  ];

  const instagramImages = [
    "src/assets/instagram-1.png",
    "src/assets/instagram-2.png",
    "src/assets/instagram-3.png",
    "src/assets/instagram-4.png",
    "src/assets/instagram-5.png",
    "src/assets/instagram-6.png",
    "src/assets/instagram-7.png",
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        color: "#222222",
        fontFamily: "Arial, Helvetica, sans-serif",
        overflowX: "hidden",
      }}
    >

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header
        style={{
          width: "100%",
          height: "105px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >

        {/* LOGO */}

        <Link
          to="/"
          style={{
            color: "#444444",
            textDecoration: "none",
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: "35px",
            fontWeight: "700",
            letterSpacing: "-1px",
          }}
        >
          FASCO
        </Link>


        {/* NAVIGATION */}

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "42px",
          }}
        >
          <Link
            to="/"
            style={{
              color: "#222222",
              textDecoration: "none",
              fontSize: "13px",
            }}
          >
            Home
          </Link>

          <Link
            to="/shop"
            style={{
              color: "#222222",
              textDecoration: "none",
              fontSize: "13px",
              borderBottom: "1px solid #222222",
              paddingBottom: "5px",
            }}
          >
            Shop
          </Link>

          <Link
            to="/products"
            style={{
              color: "#222222",
              textDecoration: "none",
              fontSize: "13px",
            }}
          >
            Products
          </Link>

          <Link
            to="/pages"
            style={{
              color: "#222222",
              textDecoration: "none",
              fontSize: "13px",
            }}
          >
            Pages <span>⌄</span>
          </Link>
        </nav>


        {/* HEADER ICONS */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "17px",
            fontSize: "13px",
          }}
        >
          <span style={{ cursor: "pointer" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg></span>
          <span style={{ cursor: "pointer" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
            </svg></span>
          <span style={{ cursor: "pointer" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
            </svg></span>
          <span style={{ cursor: "pointer" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-handbag" viewBox="0 0 16 16">
              <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2m3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6z"/>
            </svg></span>
        </div>

      </header>


      {/* =====================================================
          PAGE TITLE
      ====================================================== */}

      <section
        style={{
          width: "100%",
          textAlign: "center",
          paddingTop: "28px",
          paddingBottom: "43px",
        }}
      >
        <h1
          style={{
            margin: "0",
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: "25px",
            fontWeight: "600",
            color: "#222222",
          }}
        >
          Fashion
        </h1>

        <div
          style={{
            marginTop: "12px",
            fontSize: "11px",
            color: "#333333",
          }}
        >
          <span>Home</span>
          <span style={{ margin: "0 9px" }}>›</span>
          <span>Fashion</span>
        </div>
      </section>


      {/* =====================================================
          SHOP AREA
      ====================================================== */}

      <main
        style={{
          width: "100%",
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >

        <div
          className="shop-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "175px 1fr",
            columnGap: "25px",
            alignItems: "start",
          }}
        >


          {/* =================================================
              FILTER SIDEBAR
          ================================================== */}

          <aside
            style={{
              width: "100%",
              color: "#222222",
            }}
          >

            <h2
              style={{
                margin: "0 0 22px",
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "25px",
                fontWeight: "550",
              }}
            >
              Filters
            </h2>


            {/* SIZE */}

            <div style={{ marginBottom: "18px" }}>

              <h3
                style={{
                  margin: "0 0 10px",
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                Size
              </h3>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "5px",
                  maxWidth: "100px",
                }}
              >
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    style={{
                      width: "28px",
                      height: "28px",
                      backgroundColor: "#ffffff",
                      border: "1px solid #dddddd",
                      borderRadius: "2px",
                      fontSize: "10px",
                      cursor: "pointer",
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>

            </div>


            {/* COLORS */}

            <div style={{ marginBottom: "20px" }}>

              <h3
                style={{
                  margin: "0 0 10px",
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                Colors
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(7, 13px)",
                  gap: "7px",
                }}
              >
                {[
                  "#ff6868",
                  "#ff963d",
                  "#ffe35c",
                  "#d6ef5b",
                  "#59e889",
                  "#5ee7bb",
                  "#5ab7ee",
                  "#2d9ddd",
                  "#5c86ef",
                  "#4173f1",
                  "#7765e8",
                  "#c16ae7",
                  "#e96bd1",
                  "#ff5f77",
                ].map((color) => (
                  <span
                    key={color}
                    style={{
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                      backgroundColor: color,
                      display: "block",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>

            </div>


            {/* PRICES */}

            <div style={{ marginBottom: "20px" }}>

              <h3
                style={{
                  margin: "0 0 11px",
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                Prices
              </h3>

              {[
                "$0-$50",
                "$50-$100",
                "$100-$150",
                "$150-$200",
                "$200-$250",
              ].map((price) => (
                <div
                  key={price}
                  style={{
                    color: "#888888",
                    fontSize: "11px",
                    lineHeight: "21px",
                    cursor: "pointer",
                  }}
                >
                  {price}
                </div>
              ))}

            </div>


            {/* BRANDS */}

            <div style={{ marginBottom: "20px" }}>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "9px",
                }}
              >
                <h3
                  style={{
                    margin: "0",
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  Brands
                </h3>

                <span style={{ fontSize: "13px" }}>⌃</span>
              </div>

              <div
                style={{
                  color: "#888888",
                  fontSize: "11px",
                  lineHeight: "21px",
                }}
              >
                <div>Minning</div>
                <div>Rebolle Brook</div>
                <div>Leotrs</div>
                <div>Vagobard</div>
                <div>Abby</div>
              </div>

            </div>


            {/* COLLECTIONS */}

            <div style={{ marginBottom: "20px" }}>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "9px",
                }}
              >
                <h3
                  style={{
                    margin: "0",
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  Collections
                </h3>

                <span style={{ fontSize: "13px" }}>⌃</span>
              </div>

              {[
                "All products",
                "Best sellers",
                "New arrivals",
                "Accessories",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    color: "#888888",
                    fontSize: "11px",
                    lineHeight: "21px",
                  }}
                >
                  {item}
                </div>
              ))}

            </div>


            {/* TAGS */}

            <div>

              <h3
                style={{
                  margin: "0 0 9px",
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                Tags
              </h3>

              <div
                style={{
                  color: "#888888",
                  fontSize: "11px",
                  lineHeight: "21px",
                }}
              >
                Fashion &nbsp; Hats &nbsp; Sandal
                <br />
                Belt &nbsp; Bags &nbsp; Snacker
                <br />
                Denim &nbsp; Minimong &nbsp; Vagabond
                <br />
                Sunglasses &nbsp; Beachwear
              </div>

            </div>

          </aside>


          {/* =================================================
              PRODUCTS
          ================================================== */}

          <section>

            {/* PRODUCT HEADER */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "18px",
              }}
            >

              <select
                style={{
                  border: "none",
                  outline: "none",
                  backgroundColor: "#ffffff",
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "13px",
                  color: "#222222",
                  cursor: "pointer",
                }}
                defaultValue="best"
              >
                <option value="best">
                  Best selling
                </option>

                <option value="new">
                  New arrivals
                </option>

                <option value="price-low">
                  Price low to high
                </option>
              </select>


              <div
                style={{
                  display: "flex",
                  gap: "6px",
                }}
              >
                {["☰", "||", "|||", "||||", "|||||"].map(
                  (item, index) => (
                    <button
                      key={index}
                      style={{
                        width: "30px",
                        height: "30px",
                        border: "1px solid #eeeeee",
                        backgroundColor:
                          index === 0
                            ? "#f4f4f4"
                            : "#ffffff",
                        fontSize: "8px",
                        cursor: "pointer",
                      }}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>

            </div>


            {/* PRODUCT GRID */}

            <div
              className="product-grid"
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(3, minmax(0, 1fr))",
                columnGap: "15px",
                rowGap: "28px",
              }}
            >

              {products.map((product, index) => (
                <article
                  key={index}
                  style={{
                    minWidth: 0,
                  }}
                >

                  {/* PRODUCT IMAGE */}

                  <div
                    style={{
                      width: "100%",
                      height: "400px",
                      overflow: "hidden",
                      backgroundColor: "#eeeeee",
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                        objectFit: "cover",
                      }}
                    />
                  </div>


                  {/* PRODUCT INFORMATION */}

                  <div
                    style={{
                      paddingTop: "7px",
                    }}
                  >

                    <h3
                      style={{
                        margin: "0 0 5px",
                        color: "#111111",
                        fontFamily:
                          'Georgia, "Times New Roman", serif',
                        fontSize: "13px",
                        fontWeight: "400",
                      }}
                    >
                      {product.name}
                    </h3>


                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "12px",
                      }}
                    >
                      <span>
                        {product.price}
                      </span>

                      {product.oldPrice && (
                        <span
                          style={{
                            color: "#999999",
                            textDecoration:
                              "line-through",
                          }}
                        >
                          {product.oldPrice}
                        </span>
                      )}
                    </div>


                    {/* COLOR DOTS */}

                    <div
                      style={{
                        display: "flex",
                        gap: "5px",
                        marginTop: "8px",
                      }}
                    >
                      {product.colors.map(
                        (color) => (
                          <span
                            key={color}
                            style={{
                              width: "15px",
                              height: "15px",
                              borderRadius: "50%",
                              backgroundColor:
                                color,
                              border:
                                "1px solid #cccccc",
                              boxSizing:
                                "border-box",
                            }}
                          />
                        )
                      )}
                    </div>

                  </div>

                </article>
              ))}

            </div>


            {/* PAGINATION */}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "22px",
                marginTop: "40px",
                marginBottom: "55px",
                fontSize: "9px",
              }}
            >

              <button
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor: "#f3f3f3",
                  fontSize: "13px",
                }}
              >
                1
              </button>

              <button
                style={{
                  border: "none",
                  background: "none",
                  fontSize: "13px",
                }}
              >
                2
              </button>

              <button
                style={{
                  border: "none",
                  background: "none",
                  fontSize: "13px",
                }}
              >
                3
              </button>

              <button
                style={{
                  border: "none",
                  background: "none",
                  fontSize: "13px",
                }}
              >
                »
              </button>

            </div>

          </section>

        </div>

      </main>


      {/* =====================================================
          PEEKY BLINDERS PROMOTION
      ====================================================== */}

      <section
        style={{
          width: "100%",
          backgroundColor: "#c6c5c5a9",
          marginTop: "0",
        }}
      >

        <div
          className="promo-section"
          style={{
            width: "2500px",
            maxWidth: "1300px",
            height: "350px",
            margin: "0 103px",
            marginLeft: "-5px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            overflow: "hidden",
            backgroundColor: "#452f2f00",
          }}
        >

          {/* PROMO IMAGE */}

          <div
            style={{
              position: "relative",
              height: "100%",
              width: "100%",
              overflow: "hidden",
              margin: "0 0 0 7px",
              backgroundColor: "#c6c5c500"
            }}
          >
            <img
              src="src/assets/image (19).png"
              alt="Peaky Blinders collection"
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
                
              }}
            />
          </div>


          {/* PROMO CONTENT */}

          <div
            style={{
              padding: "48px 55px",
              backgroundColor: "#d9d9d9",
              boxSizing: "border-box",
            }}
          >

            <div
              style={{
                color: "#999999",
                fontSize: "12px",
                marginBottom: "7px",
              }}
            >
              Women Collection
            </div>

            <h2
              style={{
                margin: "0 0 20px",
                fontFamily:
                  'Georgia, "Times New Roman", serif',
                fontSize: "33px",
                fontWeight: "400",
              }}
            >
              Peaky Blinders
            </h2>

            <div
              style={{
                fontSize: "11px",
                fontWeight: "600",
                marginBottom: "7px",
              }}
            >
              DESCRIPTION
            </div>

            <p
              style={{
                margin: "0",
                maxWidth: "310px",
                color: "#777777",
                fontSize: "10px",
                lineHeight: "15px",
              }}
            >
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Scelerisque duis ultrices
              sollicitudin aliquam sem.
              Scelerisque duis ultrices
              sollicitudin.
            </p>

            <div
              style={{
                marginTop: "10px",
                fontSize: "10px",
              }}
            >
              Size:
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "35px",
                  height: "18px",
                  marginLeft: "7px",
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  borderRadius: "5px",
                  fontSize: "10px",
                }}
              >
                M
              </span>
            </div>

            <div
              style={{
                marginTop: "8px",
                fontSize: "15px",
                fontWeight: "550",
              }}
            >
              $100.00
            </div>

            <button
              style={{
                width: "120px",
                height: "29px",
                marginTop: "12px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#000000",
                color: "#ffffff",
                fontSize: "10px",
                cursor: "pointer",
              }}
            >
              Buy Now
            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICE FEATURES
      ====================================================== */}

      <section
        style={{
          width: "100%",
          height: "105px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "1px solid #eeeeee",
        }}
      >

        <div
          className="service-grid"
          style={{
            width: "100%",
            maxWidth: "960px",
            display: "grid",
            gridTemplateColumns:
              "repeat(4, 1fr)",
            gap: "45px",
          }}
        >

          {[
            [
              "♧",
              "High Quality",
              "Crafted from top materials",
            ],
            [
              "♙",
              "Warranty Protection",
              "Over 2 years",
            ],
            [
              "◇",
              "Free Shipping",
              "Order over 150 $",
            ],
            [
              "♧",
              "24 / 7 Support",
              "Dedicated support",
            ],
          ].map(
            ([icon, title, text]) => (
              <div
                key={title}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "9px",
                }}
              >

                <span
                  style={{
                    fontSize: "19px",
                  }}
                >
                  {icon}
                </span>

                <div>
                  <div
                    style={{
                      fontSize: "9px",
                      fontWeight: "600",
                    }}
                  >
                    {title}
                  </div>

                  <div
                    style={{
                      color: "#888888",
                      fontSize: "7px",
                      marginTop: "3px",
                    }}
                  >
                    {text}
                  </div>
                </div>

              </div>
            )
          )}

        </div>

      </section>


      {/* =====================================================
          INSTAGRAM
      ====================================================== */}

      <section
        style={{
          width: "100%",
          paddingTop: "45px",
          overflow: "hidden",
        }}
      >

        <div
          style={{
            textAlign: "center",
            marginBottom: "45px",
          }}
        >

          <h2
            style={{
              margin: "0",
              fontFamily:
                'Georgia, "Times New Roman", serif',
              fontSize: "23px",
              fontWeight: "500",
            }}
          >
            Follow Us On Instagram
          </h2>

          <p
            style={{
              maxWidth: "400px",
              margin: "10px auto 0",
              color: "#999999",
              fontSize: "8px",
              lineHeight: "14px",
            }}
          >
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Scelerisque duis ultrices
            sollicitudin aliquam sem.
          </p>

        </div>


        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns:
              "repeat(7, 1fr)",
            alignItems: "end",
          }}
        >

          {instagramImages.map(
            (image, index) => (
              <img
                key={index}
                src={image}
                alt={`Instagram ${index + 1}`}
                style={{
                  width: "100%",
                  height:
                    index % 2  === 0
                      ? "215px"
                      : "260px",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            )
          )}

        </div>

      </section>


      {/* =====================================================
          NEWSLETTER
      ====================================================== */}

      <section
        style={{
          width: "100%",
          maxWidth: "1160px",
          height: "430px",
          margin: "0 auto",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >

        {/* LEFT MODEL */}

        <img
          src="src/assets/image 2.png"
          alt="Fashion model"
          style={{
            position: "absolute",
            left: "100px",
            bottom: "0",
            width: "180px",
            height: "350px",
            objectFit: "contain",
            objectPosition: "bottom",
          }}
        />


        {/* NEWSLETTER CONTENT */}

        <div
          style={{
            width: "400px",
            textAlign: "center",
            zIndex: 2,
          }}
        >

          <h2
            style={{
              margin: "0",
              fontFamily:
                'Georgia, "Times New Roman", serif',
              fontSize: "24px",
              fontWeight: "500",
            }}
          >
            Subscribe To Our Newsletter
          </h2>

          <p
            style={{
              margin: "12px auto 25px",
              maxWidth: "350px",
              color: "#999999",
              fontSize: "8px",
              lineHeight: "14px",
            }}
          >
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Scelerisque duis ultrices
            sollicitudin aliquam sem.
          </p>


          <div
            style={{
              width: "100%",
              height: "48px",
              backgroundColor: "#ffffff",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              padding: "0 14px",
              boxSizing: "border-box",
            }}
          >
            <input
              type="email"
              placeholder="michael@ymail.com"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                outline: "none",
                fontSize: "9px",
                color: "#555555",
                backgroundColor:
                  "transparent",
              }}
            />
          </div>


          <button
            style={{
              width: "95px",
              height: "32px",
              marginTop: "18px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: "#000000",
              color: "#ffffff",
              fontSize: "8px",
              cursor: "pointer",
            }}
          >
            Subscribe Now
          </button>

        </div>


        {/* RIGHT MODEL */}

        <img
          src="src/assets/image 3.png"
          alt="Fashion model"
          style={{
            position: "absolute",
            right: "90px",
            bottom: "0",
            width: "180px",
            height: "350px",
            objectFit: "contain",
            objectPosition: "bottom",
          }}
        />

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer
        style={{
          width: "100%",
          borderTop: "1px solid #eeeeee",
          padding: "22px 20px 18px",
          boxSizing: "border-box",
        }}
      >

        <div
          style={{
            width: "100%",
            maxWidth: "1160px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >

          <Link
            to="/"
            style={{
              color: "#444444",
              textDecoration: "none",
              fontFamily:
                'Georgia, "Times New Roman", serif',
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            FASCO
          </Link>


          <nav
            style={{
              display: "flex",
              gap: "35px",
            }}
          >

            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#333333",
                fontSize: "8px",
              }}
            >
              Home
            </Link>

            <Link
              to="/shop"
              style={{
                textDecoration: "none",
                color: "#333333",
                fontSize: "8px",
              }}
            >
              Shop
            </Link>

            <Link
              to="/products"
              style={{
                textDecoration: "none",
                color: "#333333",
                fontSize: "8px",
              }}
            >
              Products
            </Link>

            <Link
              to="/pages"
              style={{
                textDecoration: "none",
                color: "#333333",
                fontSize: "8px",
              }}
            >
              Pages⌄
            </Link>

          </nav>

        </div>


        <div
          style={{
            textAlign: "center",
            marginTop: "25px",
            fontSize: "7px",
            color: "#777777",
          }}
        >
          Copyright © 2022 FASCO. All Rights Reserved.
        </div>

      </footer>


      {/* =====================================================
          RESPONSIVE CSS
      ====================================================== */}

      <style>
        {`
          @media (max-width: 900px) {

            .shop-layout {
              grid-template-columns: 150px 1fr !important;
            }

            .product-grid {
              grid-template-columns:
                repeat(2, minmax(0, 1fr)) !important;
            }

            .service-grid {
              gap: 20px !important;
              padding: 0 20px !important;
              box-sizing: border-box !important;
            }

            .promo-section {
              height: auto !important;
            }

          }


          @media (max-width: 700px) {

            header {
              height: auto !important;
              padding-top: 25px !important;
              padding-bottom: 25px !important;
            }

            header nav {
              display: none !important;
            }

            .shop-layout {
              display: block !important;
            }

            .shop-layout aside {
              margin-bottom: 30px !important;
            }

            .product-grid {
              grid-template-columns:
                repeat(2, minmax(0, 1fr)) !important;
              gap: 20px 10px !important;
            }

            .promo-section {
              display: block !important;
              height: auto !important;
            }

            .promo-section > div {
              min-height: 300px !important;
            }

            .service-grid {
              grid-template-columns:
                repeat(2, 1fr) !important;
              gap: 25px !important;
              height: auto !important;
              padding: 25px !important;
            }

            .service-grid + * {
              margin-top: 20px !important;
            }

            footer > div:first-child {
              flex-direction: column !important;
              gap: 20px !important;
            }

            footer nav {
              flex-wrap: wrap !important;
              justify-content: center !important;
              gap: 18px !important;
            }

          }


          @media (max-width: 480px) {

            .product-grid {
              grid-template-columns:
                1fr !important;
            }

            .product-grid article > div:first-child {
              height: 350px !important;
            }

          }
        `}
      </style>

    </div>
  );
}

export default Shop;

