import "./Strength.scss";
import whiteKit from "../../assets/white-kitchen.svg";
import iconKit from "../../assets/иконка кухни.svg";
import iconDesign from "../../assets/иконка дизайн проект.svg";
import iconDate from "../../assets/иконка сроки.svg";
function Strength() {
  return (
    <div className="strength">
      <img src={whiteKit} className="whiteKit" />
      <div className="st-text">
        <h5>
          Наши преимущества <hr />
        </h5>
        {/* <hr /> */}
        <div className="text-cards">
          <div className="text-card">
            <img src={iconKit} />
            <p>
              <b>C 2000 г на рынке </b> <br />
              наши кухни выбрали 10 000+ семей
            </p>
          </div>
          <div className="text-card">
            <img src={iconDesign} />
            <p>
              <b>Сжатые сроки </b> <br />
              изготовление кухни от 20 дней 
            </p>
          </div>
          <div className="text-card">
            <img src={iconDate} />
            <p>
              <b>Дизайн проект </b> <br />
              бесплатно за 30 минут
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Strength;
