import React from "react";
import "../styles/service.css";

function Service() {
  return (
    <div className="service">
      <div className="serviceBlock">
        <div className="serviceBlockHight">
          <h2 className="serviceBlockHightTitle">
            13 лет совершенствуем <br />
            компетенции в Drupal <br />
            поддержке!
          </h2>
          <p className="serviceBlockHightDescription">
            Разрабатываем и оптимизируем модули, расширяем <br />
            функциональность сайтов, обновляем дизайн
          </p>
        </div>
        <div className="serviceBlockFunctions">
          <div className="serviceBlockFunctionsCard">
            <img
              className="serviceBlockFunctionsCardImg"
              src="img/competency-1.svg"
              alt="competency-1"
            />
            <p className="serviceBlockHightDescription">
              Добавление <br />
              информации на сайт,
              <br />
              создание новых <br />
              разделов
            </p>
          </div>
          <div className="serviceBlockFunctionsCard">
            <img
              className="serviceBlockFunctionsCardImg"
              src="img/competency-2.svg"
              alt="competency-2"
            />
            <p className="serviceBlockHightDescription">
              Разработка <br />
              и оптимизация <br />
              модулей сайта
            </p>
          </div>
          <div className="serviceBlockFunctionsCard">
            <img
              className="serviceBlockFunctionsCardImg"
              src="img/competency-3.svg"
              alt="competency-3"
            />
            <p className="serviceBlockHightDescription">
              Интеграция с CRM, <br />
              1C, платежными <br />
              системами, любыми <br />
              веб-сервисами
            </p>
          </div>
          <div className="serviceBlockFunctionsCard">
            <img
              className="serviceBlockFunctionsCardImg"
              src="img/competency-4.svg"
              alt="competency-4"
            />
            <p className="serviceBlockHightDescription">
              Любые доработки <br />
              функционала <br />и дизайна
            </p>
          </div>
          <div className="serviceBlockFunctionsCard">
            <img
              className="serviceBlockFunctionsCardImg"
              src="img/competency-5.svg"
              alt="competency-5"
            />
            <p className="serviceBlockHightDescription">
              Аудит и мониторинг <br />
              безопасности Drupal <br />
              сайтов
            </p>
          </div>
          <div className="serviceBlockFunctionsCard">
            <img
              className="serviceBlockFunctionsCardImg"
              src="img/competency-6.svg"
              alt="competency-6"
            />
            <p className="serviceBlockHightDescription">
              Миграция, импорт <br />
              контента и апгрейд <br />
              Drupal
            </p>
          </div>
          <div className="serviceBlockFunctionsCard">
            <img
              className="serviceBlockFunctionsCardImg"
              src="img/competency-7.svg"
              alt="competency-7"
            />
            <p className="serviceBlockHightDescription">
              Оптимизация <br />
              и ускорение <br />
              Drupal-сайтов
            </p>
          </div>
          <div className="serviceBlockFunctionsCard">
            <img
              className="serviceBlockFunctionsCardImg"
              src="img/competency-8.svg"
              alt="competency-8"
            />
            <p className="serviceBlockHightDescription">
              Веб-маркетинг, <br />
              консультации <br />и работы по SEO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
