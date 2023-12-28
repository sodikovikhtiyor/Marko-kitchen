import "./Header.scss";
import logo from "../../assets/лого.svg";
import star from "../../assets/Star.svg";
import location from "../../assets/Location.svg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import Button from "../btn/Button";
function Header() {
  return (
    <div className="header">
      <div className="container">
        <section className="header-left">
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="rate">
            <img src={location} className="location" />
            <div className="rate-right">
              <h6>Яндекс Карты</h6>
              <div className="stars">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <span>5,0</span>
              </div>
              <p>81 отзыв • 100 оценок</p>
            </div>
          </div>
        </section>
        <section className="header-right">
          <div className="address">
            <h6>Производство кухонь на заказ</h6>
            <p>Анапа, ул. Крылова, д. 27</p>
          </div>
          <div className="contact">
            <WhatsAppIcon className="icon" />
            <TelegramIcon className="icon" />
            <a href="tel:79883117788">+7 (988)-311-77-88</a>
            <Button btnType="btn btnNew btnNewWhite" text="Заказать звонок" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Header;
