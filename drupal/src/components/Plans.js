import React from "react";
import "../styles/plans.css";
import { useState } from "react";
import ContactForm from "./ContactForm";
import { setVisionMenu } from '../features/constact/contactSlice';
import { useDispatch, useSelector } from 'react-redux';

function Plans() {
  const [hoveredCard, setHoveredCard] = useState(1);
  const [currentButton, setCurrentButton] = useState(false);

  const dispatch = useDispatch()

  const visionMenu = useSelector((state) => state.contact.visionMenu)

  const toggleFormVisibility = () => {
    dispatch(setVisionMenu(true));
    setCurrentButton(!currentButton);
  };

  return (
    <div className="plans" id="tarif">
      <img className="plansBackground" src="img/D.png" alt="background" />
      <div className="plansBlock">
        <p className="plansBlockTitle">Тарифы</p>
        <div className="plansBlockСhoice">
          <div
            className={`plansBlockСhoiceCard ${
              hoveredCard === 0 ? "hoverEffect" : ""
            }`}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(1)}
          >
            <p className="plansBlockСhoiceCardTitle">Стартовый</p>
            <div className="plansBlockСhoiceCardList">
              <p className="plansBlockСhoiceCardListItem">
                Разработка и поддержка Drupal
              </p>
              <p className="plansBlockСhoiceCardListItem">
                Консультации и работы по SEO
              </p>
              <p className="plansBlockСhoiceCardListItem">Услуги дизайнера</p>
              <p className="plansBlockСhoiceCardListItem">
                Неиспользованные оплаченные часы переносятся на следующий месяц
              </p>
              <p className="plansBlockСhoiceCardListItem">
                Предоплата от 6 000 рублей в месяц
              </p>
            </div>
            <button
              className="plansBlockСhoiceCardButton"
              onClick={toggleFormVisibility}
            >
              Оставить заявку!
            </button>
          </div>
          <div
            className={`plansBlockСhoiceCard ${
              hoveredCard === 1 ? "hoverEffect" : ""
            }`}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(1)}
          >
            <p className="plansBlockСhoiceCardTitle">Бизнес</p>
            <div className="plansBlockСhoiceCardList">
              <p className="plansBlockСhoiceCardListItem">
                Разработка и поддержка Drupal
              </p>
              <p className="plansBlockСhoiceCardListItem">
                Консультации и работы по SEO
              </p>
              <p className="plansBlockСhoiceCardListItem">Услуги дизайнера</p>
              <p className="plansBlockСhoiceCardListItem">
                Высокое время реакции - до 2 рабочих дней
              </p>
              <p className="plansBlockСhoiceCardListItem">
                Неиспользованные оплаченные часы не переносятся
              </p>
              <p className="plansBlockСhoiceCardListItem">
                Предоплата от 30 000 рублей в месяц
              </p>
            </div>
            <button
              className="plansBlockСhoiceCardButton"
              onClick={() => toggleFormVisibility()}
            >
              Оставить заявку!
            </button>
          </div>
          <div
            className={`plansBlockСhoiceCard ${
              hoveredCard === 2 ? "hoverEffect" : ""
            }`}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(1)}
          >
            <p className="plansBlockСhoiceCardTitle">VIP</p>
            <div className="plansBlockСhoiceCardList">
              <p className="plansBlockСhoiceCardListItem">
                Разработка и поддержка Drupal
              </p>
              <p className="plansBlockСhoiceCardListItem">
                Консультации и работы по SEO
              </p>
              <p className="plansBlockСhoiceCardListItem">Услуги дизайнера</p>
              <p className="plansBlockСhoiceCardListItem">
                Максимальное время реакции - в день обращения
              </p>
              <p className="plansBlockСhoiceCardListItem">
                Неиспользованные оплаченные часы не переносятся
              </p>
              <p className="plansBlockСhoiceCardListItem">
                Предоплата от 270 000 рублей в месяц
              </p>
            </div>
            <button
              className="plansBlockСhoiceCardButton"
              onClick={toggleFormVisibility}
            >
              Оставить заявку!
            </button>
          </div>
        </div>
        <p className="plansOther">
          Вам не подходят наши тарифы? Оставьте заявку и мы предложим вам
          индивидуальные условия!
        </p>
        <a className="plansOtherLink" href="#1">
          Получить индивидуальный тариф
        </a>
      </div>
      {visionMenu && <ContactForm onClose={toggleFormVisibility} />}
    </div>
  );
}

export default Plans;
