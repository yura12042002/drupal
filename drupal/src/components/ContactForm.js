import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSubmitting,
  setVisionMenu,
} from "../features/constact/contactSlice";
import "../styles/contactForm.css";

const ContactForm = () => {
  const [name, setName] = useState(localStorage.getItem("name") ?? "");
  const [phone, setPhone] = useState(localStorage.getItem("phone") ?? "");
  const [email, setEmail] = useState(localStorage.getItem("email") ?? "");
  const [comment, setComment] = useState(localStorage.getItem("comment") ?? "");
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const submitting = useSelector((state) => state.contact.submitting);

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);
    localStorage.setItem("comment", comment);
  }, [name, phone, email, comment]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(setSubmitting(true));

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
        animateClose();
      } else {
      }
    } catch (error) {
      console.error("There was an error!", error);
      alert("Попробуйте отправить форму еще раз!");
    }

    dispatch(setSubmitting(false));
  };

  const animate = () => {
    if (formRef.current && formRef.current.style) {
      let opacity = 0;
      const step = () => {
        if (opacity < 1) {
          opacity += 0.05;
          formRef.current.style.opacity = opacity;
          if (opacity < 1) {
            requestAnimationFrame(step);
          }
        }
      };
      requestAnimationFrame(step);
    }
  };

  useEffect(() => {
    animate();
  }, []);

  const animateClose = () => {
    if (formRef.current && formRef.current.style) {
      let opacity = 1;
      const step = () => {
        if (opacity > 0) {
          opacity -= 0.03;
          formRef.current.style.opacity = opacity;
          if (opacity > 0) {
            requestAnimationFrame(step);
          } else {
            dispatch(setVisionMenu(false));
          }
        }
      };
      requestAnimationFrame(step);
    }
  };

  const handleClose = () => {
    dispatch(setSubmitting(false));
    animateClose();
  };

  return (
    <div ref={formRef} className="contactForm">
      <div className="contactFormHeader">
        <span>Контактная форма</span>
        <button onClick={handleClose} className="closeButton"></button>
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
  );
};

export default ContactForm;
