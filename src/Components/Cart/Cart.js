import React from "react";
import "./Cart.css";
import StarRatings from "react-star-ratings";
import useFunction from "../../Hooks/useFunction";

const Cart = () => {
  const {
    selectedColor,
    selectedProduct,
    selectedPrice,
    selectedSize,
    quantity,
    cart,
    totalQuantity,
    totalPrice,
    handleColorChange,
    handleSizeSelect,
    handlePriceSelect,
    setQuantity,
    handleAddToCart,
  } = useFunction();

  return (
    <>
      {/* ======================== */}
      {/* Cart Section Start */}
      {/* ======================== */}
      <section>
        <div className="row gx-5 gy-5 align-items-center w-100">
          {/* product image div */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xm-12">
            <img
              className="rounded w-100 h-100"
              src={selectedColor.image}
              alt={selectedProduct.title}
            />
          </div>

          {/* product information div */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xm-12">
            {/* Product Title */}
            <h3 className="product-title">{selectedProduct.title}</h3>

            {/* Product Review */}
            <div className="d-flex ">
              <StarRatings
                rating={selectedProduct.reviewStar}
                starDimension="18px"
                starSpacing="4.5px"
                starRatedColor="#ffd200"
              />
              <p className="ms-3 review-count">
                ({selectedProduct.reviewNumber} Reviews)
              </p>
            </div>

            {/* Product Price */}
            <div className="d-flex">
              <p className="original-price">
                $ {selectedProduct.price.toFixed(2)}
              </p>
              <p className="ms-3 discount-price">${selectedPrice.toFixed(2)}</p>
            </div>

            {/* Product Descripton */}
            <div>
              <p className="product-description">
                {selectedProduct.description}
              </p>
            </div>

            {/* Product Type and Model Number */}
            <div className="d-flex">
              <div>
                <p className="type-model-title">Type</p>
                <p className="type-model-title-name">{selectedProduct.type}</p>
              </div>

              <div className="ms-5">
                <p className="type-model-title">Model Number</p>
                <p className="type-model-title-name">
                  {selectedProduct.modelNumber}
                </p>
              </div>
            </div>

            {/* Product Color Varient */}
            <div>
              <p className="band-color-title">Band Color</p>
              <div className="d-flex">
                {selectedProduct.colors.map((color) => (
                  <label className="custom-radio" key={color.id}>
                    <input
                      type="radio"
                      name="color"
                      checked={color.id === selectedColor.id}
                      onChange={() => handleColorChange(color.id)}
                    />
                    <span
                      className="custom-radio-span"
                      style={{ backgroundColor: color.cCode }}
                    ></span>
                  </label>
                ))}
              </div>
            </div>

            {/* Product Size */}
            <div>
              <p className="product-size-title">Wrist Size</p>
              <div className="d-flex size-btn">
                {selectedProduct.sizes.map((s) => (
                  <button
                    className={
                      selectedSize === s.size
                        ? "product-size-btn-active"
                        : "product-size-btn"
                    }
                    key={s.id}
                    onClick={() => {
                      handleSizeSelect(s.size);
                      handlePriceSelect(s.dPrice);
                    }}
                  >
                    {s.size} <span>${s.dPrice}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Increment, Decrement and Add to Cart buttons */}
            <div className="d-flex mt-4">
              <div className="quantity">
                <p
                  className="quantity__minus"
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                >
                  <span>
                    <i className="fa-solid fa-minus"></i>
                  </span>
                </p>
                <input
                  name="quantity"
                  type="text"
                  className="quantity__input"
                  value={quantity}
                />
                <p
                  className="quantity__plus"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <span>
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </p>
              </div>

              <div className="ms-3">
                <button className="add-cart-button" onClick={handleAddToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          {cart.length > 0 && (
            <button
              className="checkout-btn"
              // onClick={handleCheckout}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Checkout <span>{cart.length}</span>
            </button>
          )}
        </div>
      </section>
      {/* ======================== */}
      {/* Cart Section end */}
      {/* ======================== */}

      {/* =========================== */}
      {/* Modal Section Start */}
      {/* =========================== */}

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Your Cart
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Product table title */}
              <div className="row w-100 modal-cart-header-div">
                <div className="col-4 modal-cart-header">Item</div>
                <div className="col-2 modal-cart-header text-center">Color</div>
                <div className="col-2 modal-cart-header text-center">Size</div>
                <div className="col-2 modal-cart-header text-center">Qnt</div>
                <div className="col-2 modal-cart-header text-center">Price</div>
              </div>

              {/* Product table information */}
              {cart.map((item, index) => (
                <div className="row w-100 modal-cart-info-div " key={index + 1}>
                  <div className="col-4 modal-cart-info d-flex flex-wrap align-items-center">
                    <img
                      src={item.image}
                      alt="product_image"
                      style={{ margin: "0px 10px 0px 0px" }}
                    />
                    <p style={{ fontWeight: "400", margin: "0px 0px 0px 0px" }}>
                      {item.title}
                    </p>
                  </div>
                  <div
                    className="col-2 modal-cart-info text-center"
                    style={{ fontWeight: "400" }}
                  >
                    {item.color}
                  </div>
                  <div className="col-2 modal-cart-info text-center">
                    {item.size}
                  </div>
                  <div className="col-2 modal-cart-info text-center">
                    {item.quantity}
                  </div>
                  <div className="col-2 modal-cart-info text-center">
                    ${item.price.toFixed(2)}
                  </div>
                </div>
              ))}

              {/* Product total information */}
              <div className="row w-100 modal-cart-total-info-div">
                <div className="col-4 modal-cart-total-info">Total</div>
                <div className="col-2"></div>
                <div className="col-2"></div>
                <div
                  className="col-2 modal-cart-total-info text-center"
                  style={{ paddingLeft: "2rem" }}
                >
                  {totalQuantity}
                </div>
                <div className="col-2 modal-cart-total-info text-center">
                  $ {totalPrice.toFixed(2)}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="continue-shopping-btn" data-bs-dismiss="modal">
                Continue Shopping
              </button>

              <button className="add-cart-button" data-bs-dismiss="modal">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =========================== */}
      {/* Modal Section End */}
      {/* =========================== */}
    </>
  );
};

export default Cart;
