import { useState } from 'react';
import validator from 'validator';
import arrow from '../assets/img/arrow.svg';

export const NewsLetter = () => {
  const [message, setMessage] = useState('');

  const validateEmail = (e) => {
    let email = e.target.value;

    if (validator.isEmail(email)) {
      setMessage('Looks good');
    } else {
      setMessage('Please, enter valid email');
    }
  };

  return (
    <section className="newsletter">
      <h2 className="newsletter__title">Sign up for the Edgerunners Newsletter here:</h2>
      <form className="newsletter__form">
        <span>{message}</span>
        <label className="newsletter__form--email-container" htmlFor="email">
          <input
            id="email"
            name="email"
            type="text"
            onChange={(e) => validateEmail(e)}
            placeholder="Enter your email"
            required
          />
        </label>
        <label className="newsletter__form--checkbox-container" htmlFor="conditions">
          <input type="checkbox" name="conditions" id="conditions" required />
          <span></span>
          <p>
            I would like to receive news, special offers and other information from CD PROJEKT and I
            am 16 years old or older.
          </p>
        </label>
        <p className="newsletter__form--privacy">
          CD PROJEKT will be responsible for your personal data. For more information please check
          our <a href="#">CD PROJEKT Privacy Policy</a>
        </p>
        <button className="newsletter__form--button">
          <img src={arrow} alt="right arrow" />
        </button>
      </form>
    </section>
  );
};
