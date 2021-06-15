import { useState } from "react";
import Card from "../../components/Card/Card";
import MainButton from "../../components/MainButton";
import { data } from "../../data/data";
import "./Home.scss";
import emailjs from "emailjs-com";
import ProductModal from "../../components/Card/ProductModal";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please Fill all the fields");
      return;
    }

    setLoader(true);

    emailjs
      .send(
        "service_32dztfw",
        "template_dp7w3e8",
        {
          name: name,
          message: message,
          email: email,
        },
        "user_kdYOSBqgnRcMHHbELRst4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(() => {
        alert("We will reach out to you very soon 👍");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
    if (loader === false) {
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="home" id="Home">
      <div className="first">
        <div className="first__text">
          <span className="first__text--title">{data.title}</span>
          <span className="first__text--subtitle">{data.subTitle}</span>
          <ProductModal title={data.title} image={data.img1} about={data.about}>
            <MainButton>Know More</MainButton>
          </ProductModal>
        </div>
        <img className="first__img" src={data.img1} alt={data.title} />
      </div>

      <div className="second pad" id="know">
        <img alt="img" className="second__img" src={data.img2} />
        <img alt="img" className="second__img2" src={data.img3} />
        <div className="second__text">
          <span className="second__text--subtitle">{data.subTitle}</span>
        </div>
      </div>

      <div className="third pad" id="Featured Products">
        <div className="third__head">
          <span className="third__head--text">{data.title2}</span>
          <img alt="img" src="/path.svg" width="100%" />
        </div>
        <div className="third__cards">
          {data.list.map((card) => {
            return (
              <Card
                key={card.title}
                title={card.title}
                about={card.about}
                image={card.image}
              />
            );
          })}
        </div>
      </div>

      <div className="fourth pad">
        <img src={data.img4} className="fourth__img" alt={data.title} />
        <div className="fourth__text">
          <span className="fourth__text--title">{data.title}</span>
          <span className="fourth__text--subtitle">{data.subTitle}</span>
          <ProductModal title={data.title} image={data.img1} about={data.about}>
            <MainButton>Know More</MainButton>
          </ProductModal>
        </div>
      </div>

      <div className="fifth pad" id="Contact us">
        <form className="fifth__form" onSubmit={submitHandler}>
          <h1 className="fifth__form--title">Get In Touch</h1>
          <input
            placeholder="Enter Your Name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="fifth__form--input"
          />
          <input
            placeholder="Enter Your Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="fifth__form--input"
          />
          <textarea
            placeholder="Enter Your Message"
            rows="7"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="fifth__form--input"
          ></textarea>
          <MainButton type="submit" disable={loader}>
            Submit
          </MainButton>
        </form>
      </div>
    </div>
  );
};

export default Home;
