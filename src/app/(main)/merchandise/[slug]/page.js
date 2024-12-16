"use client";
import React, { useState, useEffect } from "react";
import ReactImageMagnify from "react-image-magnify";
import axios from "axios";
import config from "@/config"; // Assuming you have a config file for API URL
import Loading from "../../user/loading";

const Info = ({ params }) => {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { slug } = params;
        const response = await axios.get(
          `${config.API_URL}/landing/merchandise/${slug}`
        );
        setProduct(response?.data?.data);
        setSelectedImage(response?.data?.data.gallery[0]);
        setSelectedSize(response?.data?.data?.size[0]);
        setSelectedColor(response?.data?.data?.color[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params]);

  if (loading)
    return (
      <p>
        <Loading />
      </p>
    );
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found.</p>;

  const price = parseFloat(product?.price);
  const taxRate = 0.18;
  const discountRate = 0.1;
  const discount = (product?.price * quantity * 10) / 100;
  // Calculate total amount including tax
  // Calculate tax based on the total amount
  const tax = price * quantity * taxRate;

  return (
    <div className="container mt-4">
      <div className="row">
        {/* left side gallery */}
        <div className="col-md-6">
          <div className="position-relative">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: product.name,
                  isFluidWidth: true,
                  src: selectedImage,
                },
                largeImage: {
                  src: selectedImage,
                  width: 1200,
                  height: 1200,
                },
                enlargedImagePosition: "over",
              }}
            />
          </div>
          <div className="d-flex flex-wrap mt-3">
            {product?.gallery.map((image, index) => (
              <div
                key={index}
                className="me-2 mb-2"
                onClick={() => setSelectedImage(image)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={image}
                  alt={product.name}
                  className="img-thumbnail"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right side info */}
        <div className="col-md-6">
          <div className="card p-3">
            <h2 className="text-black">{product?.name}</h2>
            {/* <p className="text-dark">Rs.{product.price}</p> */}
            <p className="text-dark">
              <span className="fs-4 fw-bold">₹{price}</span>
              <span className="text-muted ms-2 fs-5">
                MRP. <del>₹{Math.round(price * (1 + discountRate))}</del>
              </span>
              <span className="text-danger ms-2 fs-6">(10% OFF)</span>
              <p className="text-success fw-bold">inclusive of all taxes</p>
            </p>

            <div className="mt-3">
              <label className="form-label txt-dark">Select Size:</label>
              <div className="d-flex flex-wrap">
                {product?.size.map((size, index) => (
                  <button
                    key={index}
                    className={`btn btn-md me-2 mb-2 ${
                      selectedSize === size
                        ? "btn-orange"
                        : "btn-outline-secondary"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size?.value}
                  </button>
                ))}
              </div>
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#sizechart"
                // className="btn btn-orange"
                className="text-white"
              >
                <div className="theme-color fw-bold pointer-cursor">
                  Size Chart
                </div>
              </a>
            </div>

            <div className="mt-3">
              <label className="form-label">Select Color:</label>
              <div className="d-flex flex-wrap">
                {product?.color.map((color, index) => (
                  <button
                    key={index}
                    className={`btn btn-md me-2 mb-2 ${
                      selectedColor === color
                        ? "btn-orange"
                        : "btn-outline-secondary"
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color?.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-3">
              <label className="form-label">Quantity:</label>
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input
                  type="number"
                  className="form-control mx-2 fs-6"
                  value={quantity}
                  min="1"
                  style={{ height: "40px", width: "140px" }}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value)))
                  }
                />
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#product"
              // className="btn btn-orange"
              className="text-white"
            >
              <button
                className="btn btn-md btn-orange mt-3"
                // onClick={handleAddToCart}
              >
                {/* Buy Now */}
                <i className="fas fa-sign-in-alt me-2" />
                Order Now
              </button>
            </a>

            <hr className="my-4" />
            <div className="card p-3">
              <h4>Product Details</h4>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-between mb-2">
                  <strong>Material composition:</strong>
                  <span>Cotton</span>
                </li>
                <li className="d-flex justify-content-between mb-2">
                  <strong>Fit type:</strong>
                  <span>Oversized Fit</span>
                </li>
                <li className="d-flex justify-content-between mb-2">
                  <strong>Sleeve type:</strong>
                  <span>Half Sleeve</span>
                </li>
                <li className="d-flex justify-content-between mb-2">
                  <strong>Length:</strong>
                  <span>Standard Length</span>
                </li>
                <li className="d-flex justify-content-between mb-2 ">
                  <strong>Country of Origin:</strong>
                  <span>India</span>
                </li>
                <li className="d-flex justify-content-between">
                  <strong>Manufactured By:</strong>
                  <span>Citiskape Sports Pvt. ltd.</span>
                </li>
              </ul>
            </div>

            <hr className="my-4"></hr>
            <div className="card p-3">
              <h4>About this item</h4>
              <p>{product?.description}</p>
            </div>

            <hr className="my-4" />

            <div className="card p-3">
              <h4>Additional Information</h4>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong>Wash Care Instructions:</strong>
                  <p className="text-muted">
                    Gentle Machine wash with mild detergent
                  </p>
                </li>
                <li className="mb-3">
                  <strong>Return and Exchange:</strong>
                  <p className="text-muted">
                    The product is eligible for 7 days return
                  </p>
                </li>
                <li className="mb-3">
                  <strong>Legal Disclaimer:</strong>
                  <p className="text-muted">
                    The actual color may slightly vary due to computerizing and
                    display screen
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      <div
        className="modal fade"
        id="product"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="productmodal"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered login-pop-form modal-md"
          role="document"
        >
          <div className="modal-content" id="productmodal">
            <span
              className="mod-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              <i className="fas fa-close" />
            </span>
            <div className="modal-content">
              <div className="modal-body">
                <h4>Order Summary</h4>
                <ul className="list-unstyled">
                  <p className="text-dark">{product?.name}</p>
                  <p className="text-dark">
                    <span className="fs-4 fw-bold">₹{price * quantity}</span>
                    <span className="text-muted ms-2 fs-5">
                      MRP.{" "}
                      <del>
                        ₹{Math.round(price * quantity * (1 + discountRate))}
                      </del>
                    </span>
                    <span className="text-danger ms-2 fs-6">
                      {/* ({Math.round(discountRate * 100*quantity)}% OFF) */}
                      (10% OFF)
                    </span>
                    <p className="text-success fw-bold">
                      inclusive of all taxes
                    </p>
                  </p>

                  <li className="d-flex justify-content-between mb-2">
                    <strong>Quantity:</strong>
                    <span>{quantity}</span>
                  </li>
                  <li className="d-flex justify-content-between mb-2">
                    <strong>Discount:</strong>
                    <span>-₹{discount?.toFixed(2)}</span>
                  </li>
                  <li className="d-flex justify-content-between mb-2">
                    <strong>Tax(18% inclusive):</strong>
                    <span>₹{tax?.toFixed(2)}</span>
                  </li>
                  <li className="d-flex justify-content-between mb-2">
                    <strong>Price:</strong>
                    <span>₹{price * quantity}</span>
                  </li>
                  <li className="mt-3 text-muted">
                    <strong>Pickup Instructions:</strong>
                    <p className="text-dark">
                      🎉 Your order is confirmed! <br />
                      💳 Please complete the payment at the venue. <br />
                      📍 **Pick up your item from:** <br />
                      <strong>
                        Sportzon, Wave City Marg, near NH24, Sector - 6,
                        Ghaziabad, Uttar Pradesh 201005
                      </strong>{" "}
                      <br />
                      🕒 We look forward to seeing you soon! <br />
                    </p>
                  </li>
                </ul>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-orange">
                  Confirm Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="sizechart"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="sizechartmodal"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered login-pop-form modal-md"
          role="document"
        >
          <div className="modal-content" id="productmodal">
            <span
              className="mod-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              <i className="fas fa-close" />
            </span>
            <div className="modal-content">
              <div className="modal-body">
                <div className="container my-4">
                  <h2 className="text-center mb-4">Size Chart</h2>
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                      <thead className="thead-dark">
                        <tr>
                          <th scope="col">Size</th>
                          <th scope="col">Chest (inches)</th>
                          <th scope="col">Waist (inches)</th>
                          <th scope="col">Hips (inches)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>XS</td>
                          <td>32</td>
                          <td>24</td>
                          <td>34</td>
                        </tr>
                        <tr>
                          <td>S</td>
                          <td>34</td>
                          <td>26</td>
                          <td>36</td>
                        </tr>
                        <tr>
                          <td>M</td>
                          <td>36</td>
                          <td>28</td>
                          <td>38</td>
                        </tr>
                        <tr>
                          <td>L</td>
                          <td>40</td>
                          <td>30</td>
                          <td>42</td>
                        </tr>
                        <tr>
                          <td>XL</td>
                          <td>42</td>
                          <td>32</td>
                          <td>44</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
