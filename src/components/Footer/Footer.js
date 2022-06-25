import "../Footer/Footer.scss";
import fb from "../../assets/icons/fb.svg";
import basketball from "../../assets/icons/basketball.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-main">
          <div className="solutions">
            <div className="solution">
              <h5>Chính sách và điều khoản</h5>
              <ul>
                <li>
                  <a href="">Chính sách</a>
                </li>
                <li>
                  <a href="">Điều khoản</a>
                </li>
              </ul>
            </div>
            <div className="solution">
              <h5>Hỗ trợ</h5>
              <ul>
                <li>
                  <a href=" ">Gặp sự cố</a>
                </li>
                <li>
                  <a href=" ">Tác giả</a>
                </li>
                <li>
                  <a href=" ">Trung tâm hỗ trợ</a>
                </li>
              </ul>
            </div>
            <div className="solution">
              <h5>Về chúng tôi</h5>
              <ul>
                <li>
                  <a href=" ">Github</a>
                </li>
                <li>
                  <a href=" ">Youtube</a>
                </li>
                <li>
                  <a href=" ">Facebook</a>
                </li>
              </ul>
            </div>
            <div className="solution">
              <h5>Liên hệ</h5>
              <ul>
                <li>
                  <a href=" ">ĐSĐL</a>
                </li>
                <li>
                  <a href=" ">Email</a>
                </li>
                <li>
                  <a href=" ">Phone</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright-and-social-media">
            <div className="copyright">
              <p>2022 Website-ban-cac-loai-dac-san-dia-phuong</p>
            </div>
            <div className="social-media-icon">
              <a href=" ">
                <img src={fb} className="icon" alt="fb" />
              </a>

              <a href=" ">
                <img src={basketball} className="icon" alt="basketball" />
              </a>
              <a href=" ">
                <img src={linkedin} className="icon" alt="linkedin" />
              </a>
              <a href=" ">
                <img src={instagram} className="icon" alt="instagram" />
              </a>
              <a href=" ">
                {" "}
                <img src={twitter} className="icon" alt="twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
