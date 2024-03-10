import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.scss";
import {
  faFacebook,
  faInstagram,
  faSquareYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("title")}>
          <div className={cx("ssstutter")}>
            <h3 className={cx("ssstutter-title")}>SSSTUTTER</h3>
            <p className={cx("ssstutter-content")}>
              Với thông điệp "Refined Life", SSStutter mong muốn đem đến cho
              khách hàng một lối sống tinh gọn bằng các sản phẩm thời trang tinh
              tế.
            </p>
          </div>
          <div className={cx("ssstutter-address")}>
            <h3 className={cx("address-title")}>CHI NHÁNH HÀ NỘI</h3>
            <p className={cx("address-content")}>
              105 - D6, ngõ 4B Đặng Văn Ngữ
            </p>
            <p className={cx("address-content")}>70 Tô Hiến Thành</p>
            <p className={cx("address-content")}>342 Cầu Giấy</p>
            <p className={cx("address-content")}>46 Đông Các</p>
          </div>
          <div className={cx("ssstutter-address")}>
            <h3 className={cx("address-title")}>CHI NHÁNH TP. HỒ CHÍ MINH</h3>
            <p className={cx("address-content")}>
              Lầu 1, số 25, Nguyễn Trãi, Q1
            </p>
            <p className={cx("address-content")}>
              152 Nguyễn Gia Trí, Bình Thạnh
            </p>
          </div>
          <div className={cx("ssstutter-policy")}>
            <h3 className={cx("policy-title")}>CHÍNH SÁCH</h3>
            <p className={cx("policy-content")}>Về sản phẩm</p>
            <p className={cx("policy-content")}>Chính sách bảo mật</p>
            <p className={cx("policy-content")}>Quy định đổi, trả hàng</p>
            <p className={cx("policy-content")}>Chính sách giao hàng</p>
            <p className={cx("policy-content")}>Chính sách thanh toán</p>
            <p className={cx("policy-content")}>Chính sách thành viên</p>
          </div>
          <div className={cx("social-all")}>
            <div className={cx("ssstutter-ecommerce")}>
              <h3 className={cx("ecommerce-title")}>ECOMMERCE</h3>
              <p className={cx("ecommerce-content")}>Shopee</p>
            </div>
            <div className={cx("ssstutter-social")}>
              <h3 className={cx("social-title")}>SOCIAL</h3>
              <div className={cx("ssstutter-social-list")}>
                <p className={cx("social-content")}>
                  <FontAwesomeIcon icon={faSquareYoutube} />
                </p>
                <p className={cx("social-content")}>
                  <FontAwesomeIcon icon={faFacebook} />
                </p>
                <p className={cx("social-content")}>
                  <FontAwesomeIcon icon={faInstagram} />
                </p>
                <p className={cx("social-content")}>
                  <FontAwesomeIcon icon={faTiktok} />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("contact")}>
          <h3 className={cx("contact-title")}>LIÊN HỆ</h3>
          <p className={cx("contact-icon")}>
            <FontAwesomeIcon className={cx("icon")} icon={faEnvelope} />
            info@ssstutter.com
          </p>
          <p className={cx("contact-icon")}>
            <FontAwesomeIcon className={cx("icon")} icon={faPhone} />
            0899093266
          </p>
        </div>
        <hr></hr>
        <div className={cx("company")}>
          <div className={cx("company-all")}>
            <h3 className={cx("name-company")}>CÔNG TY CỔ PHẦN LEANOW</h3>
            <span className={cx("company-introduce")}>
              Mã số doanh nghiệp: 0108923148. Giấy chứng nhận đăng ký doanh
              nghiệp do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày
              30/09/2019.
            </span>
          </div>
          <div className={cx("logo")}>
            <img
              className={cx("img-logo-right")}
              src="https://dashboard.leanow.vn/upload/7-2023/1689784852049.webp"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
