import React from "react";
import { Link } from "react-scroll";
import "../styles/header.css";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenAbout, setIsOpenAbout] = useState(true);
  const [hoverItem, setHoverItem] = useState(null);
  const [hoverItemAbout, setHoverItemAbout] = useState(null);
  const [menuVision, setMenuVision] = useState(false);

  const navigate = useNavigate();

  const handleAdvertisingClick = () => {
    navigate('/advertising');
  };

  const handlePromotionClick = () => {
    navigate('/promotion');
  };

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

  const toggleMenu = () => {
    setMenuVision(!menuVision);
    setIsOpen(false);
    setIsOpenAbout(false);
  };

  const handelClickAbout = () => {
    setIsOpenAbout(!isOpenAbout);
    setIsOpen(false);
  };

  const handelClickAdmin = () => {
    setIsOpen(!isOpen);
    setIsOpenAbout(false);
  };

  const handleClickLink = () => {
    setIsOpen(false);
    setIsOpenAbout(false);
  };

  return (
    <header>
      <a href="/">
        <img
          className="headerContainerImg"
          width={190}
          height={30}
          src="/img/drupal-coder.svg"
          alt="main"
        />
      </a>
      <div className={menuVision ? "headerContainerDevice" : "headerContainer"}>
        <Link
          onClick={() => handleClickLink()}
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
            onClick={() => handelClickAdmin()}
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
        <a
          className="headerContainerLink"
          href="/promotion"
          onClick={handlePromotionClick}
        >
          ПРОДВИЖЕНИЕ
        </a>
        <a
          className="headerContainerLink"
          href="/advertising"
          onClick={handleAdvertisingClick}
        >
          РЕКЛАМА
        </a>
        <div className="dropdown">
          <a
            className="headerContainerLink"
            href="#1"
            onClick={() => handelClickAbout()}
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
          onClick={() => handleClickLink()}
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
          onClick={() => handleClickLink()}
        >
          КОНТАКТЫ
        </Link>
      </div>
      <button className="dropdownBurger" onClick={toggleMenu}>
        <RxHamburgerMenu />
      </button>
    </header>
  );
};

export default Header;
