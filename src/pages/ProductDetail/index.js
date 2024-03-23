import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ProductDetail.module.scss";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const cx = classNames.bind(styles);
function ProductDetail() {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [productDetail, setProductDetail] = useState([]);
  const [sizeByColor, setSizeByColor] = useState([]);
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    if (id) {
      getProductDetail();
    }
  }, [id]);
  const getProductDetail = async () => {
    const response = await axios.get(
      `http://127.0.0.1:3005/products/api/get-product-detail/${id}`
    );
    if (response.data) {
      setProductDetail(response.data);
    }
  };
  const handleSelectColor = async (colorId) => {
    setSelected(true);
    setSelectedColor(colorId);
    console.log("colorId:", colorId);
    try {
      const response = await axios.get(
        `http://127.0.0.1:3005/products/api/get-size-color/${colorId}`
      );
      setSizeByColor(response.data);
      // console.log("data-size:", sizeByColor);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleSelectSize = (sizeId) => {
    setSelectedSize(sizeId);
  };

  console.log("ok", sizeByColor.sizes);
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
              src={`http://127.0.0.1:3005/${productDetail?.productImage?.filePath}`}
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
            <h1 className={cx("title-name")}>{productDetail.name}</h1>
          </div>
          <div>
            <h1 className={cx("price")}>{productDetail.price}</h1>
          </div>
          <div>
            <div>
              <span className={cx("color-title")}>Chọn màu:</span>
            </div>
            {productDetail.colors?.map((color) => (
              <button
                key={color.id}
                className={cx("button", { ["active"]: selected })}
                onClick={() => handleSelectColor(color.id)}
              >
                {color.color}
              </button>
            ))}
            <div className={cx("selected-color")}>
              {selectedColor
                ? `Màu đã chọn: ${
                    productDetail.colors?.find((c) => c.id === selectedColor)
                      .color
                  }`
                : "Vui lòng chọn màu"}
            </div>
          </div>
          <div>
            <div>
              <span className={cx("size-title")}>Chọn size:</span>
            </div>
            {sizeByColor.sizes?.map((size) => {
              return (
                <button
                  key={size.id}
                  className={cx("btn-size", { ["active"]: selected })}
                  onClick={() => handleSelectSize(size.id)}
                >
                  {size.size}
                </button>
              );
            })}
            <div className={cx("selected-size")}>
              {selectedSize
                ? `Size đã chọn: ${
                    sizeByColor.sizes?.find((s) => s.id === selectedSize).size
                  }`
                : "Vui lòng chọn size"}
            </div>
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
              <p className={cx("content-dcrt")}>{productDetail.description}</p>
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
