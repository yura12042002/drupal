import React from "react";
import "../styles/basicInfo.css";
import { Link } from "react-scroll";

function BasicInformation() {

  return (
    <div className="basicInformationBlock" id="start">
      <div className="basicInformationBlockLeft">
        <h1 className="basicInfoTitle">
          Поддержка <br />
          сайтов на Drupal
        </h1>
        <p className="basicInfoText">
          Сопровождение и поддержка сайтов <br />
          на CMS Drupal любых версий и запущенности
        </p>
        <Link
                  href="#1"
                  to="tarif"
                  smooth={true}
                  duration={1500}
                  offset={80}
          className={"basicInfoTarif"}
        >
          Тарифы
        </Link>
      </div>
      <div className="basicInformationBlockRight">
        <div className="basicInfoAchievements">
          <div className="basicInfoAchievementsFirst">
            <p className="basicInfoAchievementsFirstPart">#1</p>
            <img src="/img/cup.png" alt="cup" />
          </div>
          <p className="basicInfoAchievementsSecond">
            Drupal-разработчик <br />
            в России по версии <br />
            Рейтинга Рунета
          </p>
        </div>
        <div className="basicInfoAchievements">
          <div className="basicInfoAchievementsFirst">
            <p className="basicInfoAchievementsFirstPartSize">3+</p>
          </div>
          <p className="basicInfoAchievementsSecond">
            средний опыт <br />
            специалистов более <br />3 лет
          </p>
        </div>
        <div className="basicInfoAchievements">
          <div className="basicInfoAchievementsFirst">
            <p className="basicInfoAchievementsFirstPartSize">14</p>
          </div>
          <p className="basicInfoAchievementsSecond">
            лет опыта в сфере <br /> Drupal
          </p>
        </div>
        <div className="basicInfoAchievements">
          <div className="basicInfoAchievementsFirst">
            <p className="basicInfoAchievementsFirstPartSize">50+</p>
          </div>
          <p className="basicInfoAchievementsSecond">
            модулей и тем <br />в формате DrupalGive
          </p>
        </div>
        <div className="basicInfoAchievements">
          <div className="basicInfoAchievementsFirst">
            <p className="basicInfoAchievementsFirstPartSize">90 000</p>
          </div>
          <p className="basicInfoAchievementsSecond">
            часов поддержки <br />
            сайтов на Drupal
          </p>
        </div>
        <div className="basicInfoAchievements">
          <div className="basicInfoAchievementsFirst">
            <p className="basicInfoAchievementsFirstPartSize">300+</p>
          </div>
          <p className="basicInfoAchievementsSecond">
            Проектов <br />
            на поддержке
          </p>
        </div>
      </div>
    </div>
  );
}

export default BasicInformation;
