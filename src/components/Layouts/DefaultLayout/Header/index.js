import React, { useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.scss";
import {
  faBoxOpen,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Header() {
  const [cartVisible, setCartVisible] = useState(false);
  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };
  const divStyle = {
    marginRight: "20px",
  };
  const quantityStyle = {
    display: "flex",
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header-item-one")}>
        <div className={cx("header")}>
          <p className={cx("header-title")}>SSSTUTTER</p>
        </div>
        <div className={cx("header-item")}>
          <ul className={cx("list-item")}>
            <li className={cx("item")}>
              <a href="" className={cx("item-link")}>
                TRANG CHỦ
              </a>
            </li>
            <li className={cx("item")}>
              <a href="" className={cx("item-link")}>
                ABOUT SSS
              </a>
            </li>
            <li className={cx("item")}>
              <a href="" className={cx("item-link")}>
                SẢN PHẨM
              </a>
            </li>
            <li className={cx("item")}>
              <a href="" className={cx("item-link")}>
                VOUCHER
              </a>
            </li>
            <li className={cx("item")}>
              <a href="" className={cx("item-link")}>
                SALE UP TO 80%
              </a>
            </li>
          </ul>
        </div>
        <div className={cx("header-icon")}>
          <ul className={cx("list-icon")}>
            <li className={cx("icon-search")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </li>
            <li className={cx("icon-cart")} onClick={toggleCart}>
              <FontAwesomeIcon icon={faBoxOpen} />
            </li>
          </ul>
        </div>
      </div>
      <div className={cx("cart-container", { ["visible"]: cartVisible })}>
        <div className={cx("cart-top")}>
          <p className={cx("cart-title")}>Giỏ hàng</p>
          <p className={cx("cart-close")}>
            <FontAwesomeIcon icon={faXmark} onClick={toggleCart} />
          </p>
        </div>
        <hr></hr>
        <div className={cx("cart-info")}>
          <div className={cx("cart-image")}>
            <img
              className={cx("img-cart-prd")}
              src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/022024/1708332707937.webp"
            ></img>
          </div>
          <div className={cx("cart-description")}>
            <div>
              <span className={cx("name-prd")}>S HALF-ZIP SWEATSHIRT</span>
            </div>
            <div>
              <span className={cx("price-prd")}>499,000</span>
            </div>
            <div className={cx("quantity-prd")} style={quantityStyle}>
              <div>
                <span className={cx("color-title-prd")}>Số lượng</span>
              </div>
              <div className={cx("add-quantity")}>
                <input type="number" className={cx("quantity-plus")} />
              </div>
            </div>
            <div className={cx("color-prd")}>
              <span className={cx("color-title-prd")}>Màu</span>
              <span className={cx("color-prd-click")}>Nâu nhạt</span>
            </div>
            <div className={cx("size-prd")}>
              <span className={cx("size-title-prd")}>Size</span>
              <span className={cx("size-prd-click")}>1</span>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className={cx("total-cart")}>
          <div className={cx("total-cart-top")}>
            <span className={cx("title-total-cart")}>Thành tiền</span>
            <span className={cx("title-total-cart")}>499,000</span>
          </div>
          <div className={cx("buy")}>
            <button className={cx("btn-buy")}>Thanh toán</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
