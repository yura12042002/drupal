import React from "react";
import "../styles/footer.css";
import { useState,useEffect } from "react";

function Footer() {
  const [name, setName] = useState(localStorage.getItem("name") ?? "");
  const [phone, setPhone] = useState(localStorage.getItem("phone") ?? "");
  const [email, setEmail] = useState(localStorage.getItem("email") ?? "");
  const [comment, setComment] = useState(localStorage.getItem("comment") ?? "");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    const formData = {
      name,
      phone,
      email,
      comment,
    };

    try {
      const response = await fetch("https://formspree.io/f/mayrykel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setName("");
        setPhone("");
        setEmail("");
        setComment("");
      } else {
      }
    } catch (error) {
      console.error("There was an error!", error);
      alert("отправьте форму еще раз");
    }

    setSubmitting(false);
  };

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);
    localStorage.setItem("comment", comment);
  }, [name, phone, email, comment]);

  return (
    <footer id="footer">
      <div className="mainInfo">
        <div className="first">
          <p className="firstTitle">Оставить заявку на поддержку сайта</p>
          <p className="firstText">
            Срочно нужна поддержка сайта? Ваша команда не успевает справиться
            самостоятельно или предыдущий подрядчик не справился с работой?
            Тогда вам точно к нам! Просто оставьте заявку и наш менеджер с вами
            свяжется!
          </p>
          <div className="firstMargin">
            <img src="img/Vector.png" alt="Phone" />
            <p className="firstNumber">8 800 222-26-73</p>
          </div>
          <div>
            <img src="img/Vector1.png" alt="Phone" />
            <p className="firstEmail">info@drupal-coder.ru</p>
          </div>
        </div>
        <form className="second" onSubmit={handleSubmit}>
          <input
            className="secondInputFirst"
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="secondInputFirst"
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            className="secondInputFirst"
            type="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="secondInputLast"
            name="comment"
            placeholder="Ваш комментарий"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <div className="secondAccess">
            <input className="secondAccessCheckbox" type="checkbox" required />
            <p className="secondAccessText">
              Отправляя заявку, я даю согласие на обработку своих персональных
              данных
            </p>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="secondAccessButton"
          >
            {submitting ? "Отправка..." : "Оставить заявку!"}
          </button>
        </form>
      </div>
      <div className="third">
        <p className="thirdText">Проект ООО «Инитлаб», Краснодар, Россия.</p>
        <p className="thirdText">
          Drupal является зарегистрированной торговой маркой Dries Buytaert.
        </p>
      </div>
      <img className="footerImgFirst" src="/img/ddd.svg" alt="back" />
      <img className="footerImgSecond" src="/img/dd.png" alt="back" />
    </footer>
  );
}

export default Footer;
