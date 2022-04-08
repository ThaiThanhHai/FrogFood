import { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./related.css";

const Related = () => {
  return (
    <div className="related-dish">
      <h2 className="head-title">Sản phẩm liên quan</h2>
      <div className="dish-list">
        <OwlCarousel
          className="owl-theme"
          items={2}
          loop
          autoplay={true}
          autoplayTimeout={3000}
          autoWidth
        >
          <ul className="item">
            <li>
              <div className="content">
                <div className="field-img">
                  <a href="##">
                    <img
                      src="https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/b/u/burger-534x374px_ddouble-burger.png"
                      alt=""
                    />
                  </a>
                </div>
                <h3>
                  <a href={"##"}>Burger Double Double</a>
                </h3>
                <div className="filed-price">
                  <span>35.000đ</span>
                </div>
                <div className="filed-btn">
                  <button type="button" title="Thêm vào giỏ hàng">
                    <span>Thêm vào giỏ hàng</span>
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <ul className="item">
            <li>
              <div className="content">
                <div className="field-img">
                  <a href="##">
                    <img
                      src="https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/b/u/burger-534x374px_ddouble-burger.png"
                      alt=""
                    />
                  </a>
                </div>
                <h3>
                  <a href={"##"}>Burger Double Double</a>
                </h3>
                <div className="filed-price">
                  <span>35.000đ</span>
                </div>
                <div className="filed-btn">
                  <button type="button" title="Thêm vào giỏ hàng">
                    <span>Thêm vào giỏ hàng</span>
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <ul className="item">
            <li>
              <div className="content">
                <div className="field-img">
                  <a href="##">
                    <img
                      src="https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/b/u/burger-534x374px_ddouble-burger.png"
                      alt=""
                    />
                  </a>
                </div>
                <h3>
                  <a href={"##"}>Burger Double Double</a>
                </h3>
                <div className="filed-price">
                  <span>35.000đ</span>
                </div>
                <div className="filed-btn">
                  <button type="button" title="Thêm vào giỏ hàng">
                    <span>Thêm vào giỏ hàng</span>
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <ul className="item">
            <li>
              <div className="content">
                <div className="field-img">
                  <a href="##">
                    <img
                      src="https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/b/u/burger-534x374px_ddouble-burger.png"
                      alt=""
                    />
                  </a>
                </div>
                <h3>
                  <a href={"##"}>Burger Double Double</a>
                </h3>
                <div className="filed-price">
                  <span>35.000đ</span>
                </div>
                <div className="filed-btn">
                  <button type="button" title="Thêm vào giỏ hàng">
                    <span>Thêm vào giỏ hàng</span>
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <ul className="item">
            <li>
              <div className="content">
                <div className="field-img">
                  <a href="##">
                    <img
                      src="https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/b/u/burger-534x374px_ddouble-burger.png"
                      alt=""
                    />
                  </a>
                </div>
                <h3>
                  <a href={"##"}>Burger Double Double</a>
                </h3>
                <div className="filed-price">
                  <span>35.000đ</span>
                </div>
                <div className="filed-btn">
                  <button type="button" title="Thêm vào giỏ hàng">
                    <span>Thêm vào giỏ hàng</span>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Related;
