import React from "react";
import "../styles/team.css";

function Team() {
  return (
    <div className="team">
      <div className="teamTime">
        <p className="teamTimeTitle">
          Наши профессиональные разработчики выпоняют быстро любые задачи
        </p>
        <div className="teamTimeBlock">
          <div className="serviceBlockFunctionsCard">
            <img
              className="serviceBlockFunctionsCardImg"
              src="img/competency-20.svg"
              alt="competency"
            />
            <p className="teamTimeTitleTarif">от 1ч</p>
            <p className="serviceBlockHightDescription">
              Настройка события GA в интернет-магазине
            </p>
          </div>
          <div className="serviceBlockFunctionsCard">
            <img
              className="serviceBlockFunctionsCardImg"
              src="img/competency-21.svg"
              alt="competency"
            />
            <p className="teamTimeTitleTarif">от 20ч</p>
            <p className="serviceBlockHightDescription">
              Разработка мобильной
              <br />
              версии сайта
            </p>
          </div>
          <div className="serviceBlockFunctionsCard">
            <img
              className="serviceBlockFunctionsCardImg"
              src="img/competency-22.svg"
              alt="competency-1"
            />
            <p className="teamTimeTitleTarif">от 8ч</p>
            <p className="serviceBlockHightDescription">
              интеграция
              <br />
              модуля оплаты
            </p>
          </div>
        </div>
        <div className="blockPeople">
          <p className="blockPeopleTitle">Команда</p>
          <div className="blockPeopleCards">
            <div className="blockPeopleCardsIndivid">
              <img src="img/IMG_2472_0.jpg" alt="people" />
              <p className="blockPeopleCardsIndividName">Сергей Синица</p>
              <p className="blockPeopleCardsIndividDiscription">
                Руководитель отдела веб-разработки, команд.тех.наук, заместитель
                директора
              </p>
            </div>
            <div className="blockPeopleCardsIndivid">
              <img src="img/IMG_2539_0.jpg" alt="people" />
              <p className="blockPeopleCardsIndividName">Роман Агабеков</p>
              <p className="blockPeopleCardsIndividDiscription">
              Руководитель отдела DevOPS директор
              </p>
            </div>
            <div className="blockPeopleCardsIndivid">
              <img src="img/IMG_2474_1.jpg" alt="people" />
              <p className="blockPeopleCardsIndividName">Алексей Синица</p>
              <p className="blockPeopleCardsIndividDiscription">
              Руководитель отдела поддержки сайтов
              </p>
            </div>
            <div className="blockPeopleCardsIndivid">
              <img src="img/IMG_2522_0.jpg" alt="people" />
              <p className="blockPeopleCardsIndividName">Дарья Бочкарева</p>
              <p className="blockPeopleCardsIndividDiscription">
              Руководитель отдела продвижения, контекстной рекламы и
                      контент-поддержки сайтов
              </p>
            </div>
            <div className="blockPeopleCardsIndivid">
              <img src="img/IMG_9971_16.jpg" alt="people" />
              <p className="blockPeopleCardsIndividName">Ирина Торкунова</p>
              <p className="blockPeopleCardsIndividDiscription">
              Менеджер по работе с клиентами
              </p>
            </div>
          </div>
          <button className="blockPeopleAll">Вся команда</button>
        </div>
      </div>
    </div>
  );
}

export default Team;
