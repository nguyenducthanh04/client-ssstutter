import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ProductDetail.module.scss";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { useState } from "react";
const cx = classNames.bind(styles);
function ProductDetail() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleCheckboxChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleCheckboxSize = (event) => {
    setSelectedSize(event.target.value);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("image-product-detail")}>
        <div className={cx("image-small")}>
          <div>
            <img
              className={cx("image-small-item")}
              src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/012024/1704390173949.jpeg"
            ></img>
          </div>
          <div>
            <img
              className={cx("image-small-item")}
              src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/012024/1704390173949.jpeg"
            ></img>
          </div>
          <div>
            <img
              className={cx("image-small-item")}
              src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/012024/1704390173949.jpeg"
            ></img>
          </div>
        </div>
        <div className={cx("image-big")}>
          <div className={cx("slide-image-item")}>
            <img
              className={cx("image-slide")}
              src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/012024/1704390173985.jpeg"
            ></img>
          </div>
          <div className={cx("slide-image-item")}>
            <img
              className={cx("image-slide")}
              src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/012024/1704390173985.jpeg"
            ></img>
          </div>
          <div className={cx("slide-image-item")}>
            <img
              className={cx("image-slide")}
              src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/012024/1704390198324.jpeg"
            ></img>
          </div>
        </div>
        <div className={cx("description")}>
          <div>
            <h2 className={cx("title-name")}>BOTTEGA STRAIGHT TROUSERS</h2>
          </div>
          <div>
            <h3 className={cx("price")}>449,000</h3>
          </div>
          <div>
            <div>
              <span className={cx("color-title")}>Chọn màu</span>
            </div>
            <label className={cx("option")}>
              <input
                type="checkbox"
                value="Option 1"
                checked={selectedOption === "Option 1"}
                onChange={handleCheckboxChange}
              />
              <span className={cx("color")}>Màu nâu</span>
            </label>
            <label className={cx("option")}>
              <input
                type="checkbox"
                value="Option 2"
                checked={selectedOption === "Option 2"}
                onChange={handleCheckboxChange}
              />
              <span className={cx("color")}>Màu đen</span>
            </label>
          </div>
          <div>
            <div>
              <span className={cx("size-title")}>Chọn size</span>
            </div>
            <label className={cx("option")}>
              <input
                type="checkbox"
                value="Size 0"
                checked={selectedSize === "Size 0"}
                onChange={handleCheckboxSize}
              />
              <span className={cx("color")}>0</span>
            </label>
            <label className={cx("option")}>
              <input
                type="checkbox"
                value="Size 1"
                checked={selectedSize === "Size 1"}
                onChange={handleCheckboxSize}
              />
              <span className={cx("color")}>1</span>
            </label>
            <label className={cx("option")}>
              <input
                type="checkbox"
                value="Size 2"
                checked={selectedSize === "Size 2"}
                onChange={handleCheckboxSize}
              />
              <span className={cx("color")}>2</span>
            </label>
            <label className={cx("option")}>
              <input
                type="checkbox"
                value="Size 3"
                checked={selectedSize === "Size 3"}
                onChange={handleCheckboxSize}
              />
              <span className={cx("color")}>3</span>
            </label>
            <label className={cx("size")}>
              <span className={cx("size-link")}>Bảng size</span>
            </label>
          </div>
          <div className={cx("btn-add-cart")}>
            <button className={cx("btn")}>Thêm vào giỏ hàng</button>
          </div>
          <div className={cx("dcrt")}>
            <span className={cx("title-dcrt")}>Mô tả</span>
            <div>
              <p className={cx("content-dcrt")}>
                Áo Sơ Mi Caro Nam MANDO Form Rộng Dài Tay Kiểu Dáng Basic Unisex
                Thời Trang Hàn Quốc SMD111
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("relate-to")}>
        <h2 className={cx("title-relate")}>CÓ THỂ BẠN SẼ THÍCH</h2>
        <Slide>
          <div className="each-slide-effect">
            <div className={cx("slide-product-item")}>
              <div className={cx("product")}>
                <img
                  className={cx("image-product")}
                  src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/012024/1704388745338.webp"
                ></img>
                <div className={cx("info-product")}>
                  <p className={cx("name-product")}>SƠ MI</p>
                  <p className={cx("price-product")}>499,000</p>
                </div>
                <p className={cx("color-product")}>2 màu</p>
              </div>
              <div className={cx("product")}>
                <img
                  className={cx("image-product")}
                  src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/012024/1704388745338.webp"
                ></img>
                <div className={cx("info-product")}>
                  <p className={cx("name-product")}>SƠ MI</p>
                  <p className={cx("price-product")}>499,000</p>
                </div>
                <p className={cx("color-product")}>2 màu</p>
              </div>
              <div className={cx("product")}>
                <img
                  className={cx("image-product")}
                  src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/012024/1704388745338.webp"
                ></img>
                <div className={cx("info-product")}>
                  <p className={cx("name-product")}>SƠ MI</p>
                  <p className={cx("price-product")}>499,000</p>
                </div>
                <p className={cx("color-product")}>2 màu</p>
              </div>
              <div className={cx("product")}>
                <img
                  className={cx("image-product")}
                  src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/012024/1704388745338.webp"
                ></img>
                <div className={cx("info-product")}>
                  <p className={cx("name-product")}>SƠ MI</p>
                  <p className={cx("price-product")}>499,000</p>
                </div>
                <p className={cx("color-product")}>2 màu</p>
              </div>
            </div>
          </div>
          <div className="each-slide-effect">
            <div className={cx("slide-product-item")}>
              <div className={cx("product")}>
                <img
                  className={cx("image-product")}
                  src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/012024/1704388745338.webp"
                ></img>
                <div className={cx("info-product")}>
                  <p className={cx("name-product")}>SƠ MI</p>
                  <p className={cx("price-product")}>499,000</p>
                </div>
                <p className={cx("color-product")}>2 màu</p>
              </div>
              <div className={cx("product")}>
                <img
                  className={cx("image-product")}
                  src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/022024/1708332707937.webp"
                ></img>
                <div className={cx("info-product")}>
                  <p className={cx("name-product")}>SƠ MI</p>
                  <p className={cx("price-product")}>499,000</p>
                </div>
                <p className={cx("color-product")}>2 màu</p>
              </div>
              <div className={cx("product")}>
                <img
                  className={cx("image-product")}
                  src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/022024/1708332707937.webp"
                ></img>
                <div className={cx("info-product")}>
                  <p className={cx("name-product")}>SƠ MI</p>
                  <p className={cx("price-product")}>499,000</p>
                </div>
                <p className={cx("color-product")}>2 màu</p>
              </div>
              <div className={cx("product")}>
                <img
                  className={cx("image-product")}
                  src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/022024/1708332707937.webp"
                ></img>
                <div className={cx("info-product")}>
                  <p className={cx("name-product")}>SƠ MI</p>
                  <p className={cx("price-product")}>499,000</p>
                </div>
                <p className={cx("color-product")}>2 màu</p>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default ProductDetail;
