import React from 'react';
import news from '../assets/news.webp';
import './Newsletter.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
const Newsletter = () => {
  return (
    <>
      <div className="container newsletter">
        <div className="newsletter_left">
          <img src={news} alt="Newsletter image" className="newsletter_img" />
        </div>
        <div className="newsletter_right">
          <small>LIMITED OFFER</small>
          <p className="offer">35% off only this Friday and get special gift</p>
          <button className="newsletter__btn">
            Grab now <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <div className="subscribe">
        <div className="sub_heading">
          Subscribe to our newsletter to get updates to our latest collections
        </div>
        <p className="sub_desc">
          Get 20% off on your first order just by subscribing to our newsletter
        </p>
        <div className="email_input">
          <input
            type="text"
            className="news_email"
            placeholder="Enter your email.."
          />
          <button className="sub_btn">Subscribe</button>
        </div>
        <p className="sub_small">
          You will be able to unsubscribe at any time. <br />
          Read our Privacy Policy{' '}
          <a href="#" className="here">
            here
          </a>
        </p>
      </div>
    </>
  );
};

export default Newsletter;
