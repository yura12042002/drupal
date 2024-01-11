import React from "react";
import "../styles/support.css";

function Support() {
  return (
    <div className="support" id="support">
      <div className="supportBlock">
        <h2 className="supportBlockTitle">
          Поддержка <br />
          от Drupal-coder
        </h2>
        <div className="supportBlockOptions">
          <div className="supportBlockOptionsCard">
            <p className="supportBlockOptionsCardNumber">01.</p>
            <p className="supportBlockOptionsCardTitle">
              Постановка задачи по Email
            </p>
            <p className="supportBlockOptionsCardDiscription">
              Удобная и привычная модель постановки задач, при которой задачи
              фиксируются и никогда не теряются.
            </p>
            <img
              className="supportBlockOptionsCardImg"
              src="img/support1.svg"
              alt="support1"
            />
          </div>
          <div className="supportBlockOptionsCard">
            <p className="supportBlockOptionsCardNumber">02.</p>
            <p className="supportBlockOptionsCardTitle">
              Система Helpdesk – отчетность, прозрачность
            </p>
            <p className="supportBlockOptionsCardDiscription">
              Возможность посмотреть все заявки в работе и отработанные часы в
              личном кабинете через браузер.
            </p>
            <img
              className="supportBlockOptionsCardImg"
              src="img/support2.svg"
              alt="support1"
            />
          </div>
          <div className="supportBlockOptionsCard">
            <p className="supportBlockOptionsCardNumber">03.</p>
            <p className="supportBlockOptionsCardTitle">
              Расширенная техническая поддержка
            </p>
            <p className="supportBlockOptionsCardDiscription">
              Возможность организации расширенной техподдержки с 6:00 до 22:00
              без выходных.
            </p>
            <img
              className="supportBlockOptionsCardImg"
              src="img/support3.svg"
              alt="support1"
            />
          </div>
          <div className="supportBlockOptionsCard">
            <p className="supportBlockOptionsCardNumber">04.</p>
            <p className="supportBlockOptionsCardTitle">
              Персональный менеджер проекта
            </p>
            <p className="supportBlockOptionsCardDiscription">
              Ваш менеджер проекта всегда в курсе текущего состояния проекта и в
              любой момент готов ответить на любые вопросы.
            </p>
            <img
              className="supportBlockOptionsCardImg"
              src="img/support4.svg"
              alt="support1"
            />
          </div>
          <div className="supportBlockOptionsCard">
            <p className="supportBlockOptionsCardNumber">05.</p>
            <p className="supportBlockOptionsCardTitle">
              Удобные способы оплаты
            </p>
            <p className="supportBlockOptionsCardDiscription">
              Безналичный расчет по договору или электронные деньги: WebMoney,
              Яндекс.Деньги, Paypal.
            </p>
            <img
              className="supportBlockOptionsCardImg"
              src="img/support5.svg"
              alt="support1"
            />
          </div>
          <div className="supportBlockOptionsCard">
            <p className="supportBlockOptionsCardNumber">06.</p>
            <p className="supportBlockOptionsCardTitle">
              Работаем с SLA <br />и NDA
            </p>
            <p className="supportBlockOptionsCardDiscription">
              Работа в рамках соглашений о конфиденциальности и об уровне
              качества работ.
            </p>
            <img
              className="supportBlockOptionsCardImg"
              src="img/support6.svg"
              alt="support1"
            />
          </div>
          <div className="supportBlockOptionsCard">
            <p className="supportBlockOptionsCardNumber">07.</p>
            <p className="supportBlockOptionsCardTitle">
              Штатные <br />
              специалисты
            </p>
            <p className="supportBlockOptionsCardDiscription">
              Надежные штатные специалисты, никаких фрилансеров.
            </p>
            <img
              className="supportBlockOptionsCardImg"
              src="img/support7.svg"
              alt="support1"
            />
          </div>
          <div className="supportBlockOptionsCard">
            <p className="supportBlockOptionsCardNumber">08.</p>
            <p className="supportBlockOptionsCardTitle">
              Удобные каналы <br />
              связи
            </p>
            <p className="supportBlockOptionsCardDiscription">
              Консультации по телефону, скайпу, в месенджерах.
            </p>
            <img
              className="supportBlockOptionsCardImg"
              src="img/support8.svg"
              alt="support1"
            />
          </div>
        </div>
      </div>
      <div className="supportBackground">
        <div className="supportBackgroundBlock">
          <p className="supportBackgroundBlockTitle">
            Экспертиза в Drupal,
            <br /> опыт 14 лет!
          </p>
          <div className="supportBackgroundBlockDiscription">
            <div className="supportBackgroundBlockDiscriptionBlock">
              <p className="supportBackgroundBlockDiscriptionBlockText">
                Только системный подход – контроль версий, резервирование и
                тестирование!
              </p>
            </div>
            <div className="supportBackgroundBlockDiscriptionBlock">
              <p className="supportBackgroundBlockDiscriptionBlockText">
                Только Drupal сайты, не берем на поддержку сайты на других CMS!
              </p>
            </div>
          </div>
        </div>
        <div className="supportLaptop">
          <img className="supportLaptopImg" width={660} height={590} src="img/laptop.png" alt="laptop" />
        </div>
      </div>
    </div>
  );
}

export default Support;
