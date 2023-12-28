import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from "../btn/Button";
import "./Portfolio.scss";
import recKit from "../../assets/Rectangle-kitchen.svg";
import sqKit from "../../assets/square-kitchen.svg";
function Portfolio() {
  return (
    <div className="portfolio">
      <div className="container">
        <hr />
        <h1>Посмотрите наши работы</h1>
        <div className="buttons">
          <Button
            className="dropdown"
            text={"ПЛАНИРОВКА ▽"}
            btnType="btn btnBlueBg"
          />
          <Button
            className="dropdown"
            text="CТИЛЬ КУХНИ ▽"
            btnType="btn btnNew btnNewBlue"
          />
          <Button
            className="dropdown"
            text="ЦВЕТ ▽"
            btnType="btn btnNew btnNewBlue"
          />
          <Button
            className="dropdown"
            text="применить"
            btnType="btn btnGreyBg"
          />
          <Button
            className="dropdown"
            text="сбросить"
            btnType="btn btnNew btnNewBlue"
          />
        </div>
        <div className="cards">
          <div className="card">
            <div className="image">
              <img src={recKit} />
              <div className="img-bottom">
                <div className="img-text">
                  <h1>
                    01 <span>05</span>
                  </h1>
                  <ArrowBackIcon />
                  <ArrowForwardIcon />
                </div>
                <div className="img-sqs">
                    <img src={sqKit} />
                    <img src={sqKit} />
                    <img src={sqKit} />
                </div>
              </div>
            </div>
            <div className="card-text">
              <h6>Кухня 097 минимализм</h6>
              <p>Угловая белая кухня со столешницей под бетон.</p>
              <div className="card-nums">
                <p>
                  <b>Эконом</b>
                  <br />
                  168 000 р.
                </p>
                <p>
                  <b>Стандарт </b>
                  <br />
                  217 000 р.
                </p>
                <p>
                  <b>Премиум</b>
                  <br />
                  270 000 р.
                </p>
              </div>
              <span><b>Длина кухни:</b> 4900 мм</span>
              <Button text="Подробнее" btnType="btn btnBlueBg" />
              <Button text="Расчет стоимости" btnType="btn btnNew btnNewBlue" />
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src={recKit} />
              <div className="img-bottom">
                <div className="img-text">
                  <h1>
                    01 <span>05</span>
                  </h1>
                  <ArrowBackIcon />
                  <ArrowForwardIcon />
                </div>
                <div className="img-sqs">
                    <img src={sqKit} />
                    <img src={sqKit} />
                    <img src={sqKit} />
                </div>
              </div>
            </div>
            <div className="card-text">
              <h6>Кухня 097 минимализм</h6>
              <p>Угловая белая кухня со столешницей под бетон.</p>
              <div className="card-nums">
                <p>
                  <b>Эконом</b>
                  <br />
                  168 000 р.
                </p>
                <p>
                  <b>Стандарт </b>
                  <br />
                  217 000 р.
                </p>
                <p>
                  <b>Премиум</b>
                  <br />
                  270 000 р.
                </p>
              </div>
              <span><b>Длина кухни:</b> 4900 мм</span>
              <Button text="Подробнее" btnType="btn btnBlueBg" />
              <Button text="Расчет стоимости" btnType="btn btnNew btnNewBlue" />
            </div>
          </div>
          
          
        </div>
        <div className="cards">
          <div className="card">
            <div className="image">
              <img src={recKit} />
              <div className="img-bottom">
                <div className="img-text">
                  <h1>
                    01 <span>05</span>
                  </h1>
                  <ArrowBackIcon />
                  <ArrowForwardIcon />
                </div>
                <div className="img-sqs">
                    <img src={sqKit} />
                    <img src={sqKit} />
                    <img src={sqKit} />
                </div>
              </div>
            </div>
            <div className="card-text">
              <h6>Кухня 097 минимализм</h6>
              <p>Угловая белая кухня со столешницей под бетон.</p>
              <div className="card-nums">
                <p>
                  <b>Эконом</b>
                  <br />
                  168 000 р.
                </p>
                <p>
                  <b>Стандарт </b>
                  <br />
                  217 000 р.
                </p>
                <p>
                  <b>Премиум</b>
                  <br />
                  270 000 р.
                </p>
              </div>
              <span><b>Длина кухни:</b> 4900 мм</span>
              <Button text="Подробнее" btnType="btn btnBlueBg" />
              <Button text="Расчет стоимости" btnType="btn btnNew btnNewBlue" />
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src={recKit} />
              <div className="img-bottom">
                <div className="img-text">
                  <h1>
                    01 <span>05</span>
                  </h1>
                  <ArrowBackIcon />
                  <ArrowForwardIcon />
                </div>
                <div className="img-sqs">
                    <img src={sqKit} />
                    <img src={sqKit} />
                    <img src={sqKit} />
                </div>
              </div>
            </div>
            <div className="card-text">
              <h6>Кухня 097 минимализм</h6>
              <p>Угловая белая кухня со столешницей под бетон.</p>
              <div className="card-nums">
                <p>
                  <b>Эконом</b>
                  <br />
                  168 000 р.
                </p>
                <p>
                  <b>Стандарт </b>
                  <br />
                  217 000 р.
                </p>
                <p>
                  <b>Премиум</b>
                  <br />
                  270 000 р.
                </p>
              </div>
              <span><b>Длина кухни:</b> 4900 мм</span>
              <Button text="Подробнее" btnType="btn btnBlueBg" />
              <Button text="Расчет стоимости" btnType="btn btnNew btnNewBlue" />
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
