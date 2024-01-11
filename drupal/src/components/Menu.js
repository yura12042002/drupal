import React from "react";
import { Link } from "react-scroll";
import "../styles/header.css";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";

function Menu() {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [hoverItem, setHoverItem] = useState(null);
  const [hoverItemAbout, setHoverItemAbout] = useState(null);
  const menuItems = [
    "МИГРАЦИЯ",
    "БЭКАПЫ",
    "АУДИТ БЕЗОПАСНОСТИ",
    "ОПТИМИЗАЦИЯ СКОРОСТИ",
    "ПЕРЕЕЗД НА HTTPS",
  ];

  const aboutItems = [
    "КОМАНДА",
    "DRUPALGIVE",
    "БЛОГ",
    "КУРСЫ DRUPAL",
    "ВАКАНСИИ",
  ];
  return (
    <div className="menu">
      <Link
        className="headerContainerLink"
        href="#1"
        to="support"
        smooth={true}
        duration={1500}
        offset={150}
      >
        ПОДДЕРЖКА DRUPAL
      </Link>
      <div className="dropdown">
        <a
          className="headerContainerLink"
          href="#1"
          onMouseEnter={() => setIsOpen(true)}
        >
          АДМИНИСТРИРОВАНИЕ
          <button className="headerContainerButton">
            <FaCaretDown />
          </button>
        </a>
        {isOpen && (
          <div className="dropdown-menu">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`menu-item ${hoverItem === index ? "hover" : ""}`}
                onMouseEnter={() => setHoverItem(index)}
                onMouseLeave={() => setHoverItem(null)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
      <a className="headerContainerLink" href="#1">
        ПРОДВИЖЕНИЕ
      </a>
      <a className="headerContainerLink" href="#1">
        РЕКЛАМА
      </a>
      <div className="dropdown">
        <a
          className="headerContainerLink"
          href="#1"
          onMouseEnter={() => setIsOpenAbout(true)}
        >
          О НАС
          <button className="headerContainerButton">
            <FaCaretDown />
          </button>
        </a>
        {isOpenAbout && (
          <div className="dropdown-menu-about">
            {aboutItems.map((item, index) => (
              <div
                key={index}
                className={`menu-item ${
                  hoverItemAbout === index ? "hover" : ""
                }`}
                onMouseEnter={() => setHoverItemAbout(index)}
                onMouseLeave={() => setHoverItemAbout(null)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
      <Link
        className="headerContainerLink"
        to="keys"
        smooth={true}
        duration={1500}
        offset={50}
      >
        ПРОЕКТЫ
      </Link>
      <Link
        className="headerContainerLink"
        href="#1"
        to="footer"
        smooth={true}
        duration={1500}
        offset={5}
      >
        КОНТАКТЫ
      </Link>
    </div>
  );
}

export default Menu;
