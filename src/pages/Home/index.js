import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Home.module.scss";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import {
  faCartShopping,
  faTag,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("slide-parent")}>
        <Slide>
          <div className="each-slide-effect">
            <div className={cx("slide-item")}>
              <img
                className={cx("image-slide")}
                src="https://dashboard.leanow.vn/upload/2-2024/1708073726889.webp"
              ></img>
            </div>
          </div>
          <div className="each-slide-effect">
            <div className={cx("slide-item")}>
              <img
                className={cx("image-slide")}
                src="https://dashboard.leanow.vn/upload/2-2024/1708073905140.webp"
              ></img>
            </div>
          </div>
        </Slide>
      </div>
      <div className={cx("introduce")}>
        <div className={cx("introduce-item-left")}>
          <FontAwesomeIcon className={cx("icon-introduce")} icon={faTag} />
          <p className={cx("content-introduce")}>
            GIẢM 100K ĐH ĐÀU TIÊN TỪ 699K
          </p>
        </div>
        <div className={cx("introduce-item")}>
          <FontAwesomeIcon className={cx("icon-introduce")} icon={faTruck} />
          <p className={cx("content-introduce")}>FREESHIP TOÀN QUỐC ĐƠN 499K</p>
        </div>
        <div className={cx("introduce-item-right")}>
          <FontAwesomeIcon
            className={cx("icon-introduce")}
            icon={faCartShopping}
          />
          <p className={cx("content-introduce")}>ĐỔI HÀNG TRONG VÒNG 30 NGÀY</p>
        </div>
      </div>
      <div className={cx("news")}>
        <div className={cx("news-title")}>
          <h2 className={cx("title")}>What's NEW?</h2>
        </div>
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
      <div className={cx("promotions")}>
        <div className={cx("promotion-title")}>
          <h2 className={cx("title")}>PROMOTION</h2>
        </div>
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
      <div className={cx("sellers")}>
        <div className={cx("seller-title")}>
          <h2 className={cx("title")}>BEST SELLER</h2>
          <div className={cx("category")}>
            <ul className={cx("category-list")}>
              <li className={cx("category-item")}>
                <a href="" className={cx("category-link")}>
                  SƠ MI
                </a>
              </li>
              <li className={cx("category-item")}>
                <a href="" className={cx("category-link")}>
                  QUẦN
                </a>
              </li>
              <li className={cx("category-item")}>
                <a href="" className={cx("category-link")}>
                  ÁO THUN
                </a>
              </li>
              <li className={cx("category-item")}>
                <a href="" className={cx("category-link")}>
                  ÁO KHOÁC
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={cx("product-seller")}>
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
        <div className={cx("product-seller")}>
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
      <div className={cx("banner")}>
        <Slide>
          <div className="each-slide-effect">
            <div className={cx("image-slide-banner")}>
              <img
                className={cx("img-banner")}
                src="https://dashboard.leanow.vn/upload/10-2023/1697306000348.webp"
              ></img>
            </div>
          </div>
          <div className="each-slide-effect">
            <div className={cx("image-slide-banner")}>
              <img
                className={cx("img-banner")}
                src="https://dashboard.leanow.vn/upload/9-2023/1695628724171.webp"
              ></img>
            </div>
          </div>
        </Slide>
      </div>
      {/* style */}
      <div className={cx("styles")}>
        <div className={cx("style-title")}>
          <h2 className={cx("title")}>STYLE PICK!</h2>
        </div>
        <div className={cx("product-style")}>
          <div className={cx("product")}>
            <img
              className={cx("image-product-style")}
              src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/022024/1708334774333.webp"
            ></img>
            <div className={cx("info-product")}>
              <p className={cx("name-product")}>SƠ MI</p>
              <p className={cx("price-product")}>499,000</p>
            </div>
            <p className={cx("color-product")}>2 màu</p>
          </div>
          <div className={cx("product")}>
            <img
              className={cx("image-product-style")}
              src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/022024/1708334774333.webp"
            ></img>
            <div className={cx("info-product")}>
              <p className={cx("name-product")}>SƠ MI</p>
              <p className={cx("price-product")}>499,000</p>
            </div>
            <p className={cx("color-product")}>2 màu</p>
          </div>
          <div className={cx("product")}>
            <img
              className={cx("image-product-style")}
              src="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/022024/1708334774333.webp"
            ></img>
            <div className={cx("info-product")}>
              <p className={cx("name-product")}>SƠ MI</p>
              <p className={cx("price-product")}>499,000</p>
            </div>
            <p className={cx("color-product")}>2 màu</p>
          </div>
        </div>
      </div>
      <div className={cx("blogs")}>
        <div className={cx("blog-title")}>
          <h2 className={cx("title")}>BLOG</h2>
        </div>
        <Slide>
          <div className="each-slide-effect">
            <div className={cx("img-list")}>
              <div className={cx("img-item")}>
                <a className={cx("link-blog")} href="">
                  <img
                    className={cx("image-blog")}
                    src="https://dashboard.leanow.vn/upload/7-2023/1690294640922.webp"
                  ></img>
                </a>
                <div class={cx("text-overlay")}>
                  <a href="">
                    <h2>Your Text Here</h2>
                    <p>Additional text goes here</p>
                  </a>
                </div>
              </div>
              <div className={cx("img-item")}>
                <a className={cx("link-blog")} href="">
                  <img
                    className={cx("image-blog")}
                    src="https://dashboard.leanow.vn/upload/7-2023/1690294640922.webp"
                  ></img>
                </a>
                <div class={cx("text-overlay")}>
                  <a href="">
                    <h2>Your Text Here</h2>
                    <p>Additional text goes here</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="each-slide-effect">
            <div className={cx("img-list")}>
              <div className={cx("img-item")}>
                <a className={cx("link-blog")} href="">
                  <img
                    className={cx("image-blog")}
                    src="https://dashboard.leanow.vn/upload/7-2023/1690294640922.webp"
                  ></img>
                </a>
                <div class={cx("text-overlay")}>
                  <a href="">
                    <h2>Your Text Here</h2>
                    <p>Additional text goes here</p>
                  </a>
                </div>
              </div>
              <div className={cx("img-item")}>
                <a className={cx("link-blog")} href="">
                  <img
                    className={cx("image-blog")}
                    src="https://dashboard.leanow.vn/upload/7-2023/1690294640922.webp"
                  ></img>
                </a>
                <div class={cx("text-overlay")}>
                  <a href="">
                    <h2>Your Text Here</h2>
                    <p>Additional text goes here</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default Home;
