import Header from "../header/Header";
import wallet from "../../assets/Wallet.svg";
import arrow from "../../assets/arrow.svg";
import circle from "../../assets/Circles.svg";

import "./Showcase.scss";
import Button from "../btn/Button";
import Comment from "../comments/Comment";

function Showcase() {
  return (
    <div className="showcase">
      <Header />
      <div className="container">
        <div className="coment" style={{right: '30%', top: '10%'}}>
          <div className="com">
            <p>
              Огромный выбор <br /> бытовой техники
            </p>
            <img src={circle} />
          </div>
        </div>
        <div className="coment" style={{right: '43%', top: '70%'}}>
          <div className="com">
            <p>
            Выдающиеся  <br /> сорта древесины
            </p>
            <img src={circle} />
          </div>
        </div>
        <div className="coment" style={{right: '0%', top: '40%'}}>
          <div className="com">
            <p>
            Изысканный гарнитур <br /> любого размера
            </p>
            <img src={circle} />
          </div>
        </div>

        <h1>
          Изготовим роскошную <br /> <span></span> дизайнерскую кухню{" "}
        </h1>

        <div className="show-mid">
          <img src={wallet} />
          <p>
            <b>Цена на 12-24% ниже,</b> <br /> чем У посредников
          </p>
        </div>
        <div className="show-end">
          <p>Рассчитаем стоимость кухни-мечты</p>
          <Button btnType="btn btnNew btnNewWhite" text="Заказать расчёт" />
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Showcase;
