import React from 'react';
import './Header.css';
import Facility from '../Facility/Facility';
import Newsletter from '../Newsletter/Newsletter';

const Header = () => {
  return (
    <div>
      <div id="header-hero">
        <div className="header-bg">
          {' '}
          <img
            src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412561/E-commerce%20landing%20page/header/header-image_3x.jpg"
            alt="header-image"
          />{' '}
        </div>
        <div className="header-content">
          <p className="heading-1">fashion collection 2017</p>
          <h1>
            wellcome to brand<span className="logo-style">y</span> unique store
          </h1>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <div className="button">
            <p>shop now</p>
          </div>
        </div>
      </div>
      <Facility />
      <Newsletter />
    </div>
  );
};

export default Header;
