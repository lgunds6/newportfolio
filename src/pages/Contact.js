import { useRef } from "react";
import ReactDOM from "react-dom";
import emailjs from "@emailjs/browser";
import "../App.css";

function Contact() {
  const HeroImage = () => (
    <img
      src="./stnadAloneImg.png"
      width="200"
      height="100"
      className="swim__img"
      alt="travel"
    />
  );
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4561a79",
        "template_r4pb0vi",
        form.current,
        "aNCheeaAfBL-DP2o5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="hero">
        <HeroImage />
        <h3 className="introStyle"> &lt; get in touch &gt;</h3>
      </div>
      <form className="contactFormStyles" ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Full name" name="user_name" required />
        <input type="email" placeholder="Email" name="user_email" required />
        <input
          type="text"
          placeholder="Subject"
          name="message_subject"
          required
        />
        <textarea placeholder="message" name="message" cols="30" rows="10" />
        <button className="buttonStyles" type="submit">
          {" "}
          Send message
        </button>
      </form>
    </>
  );
}

export default Contact;
