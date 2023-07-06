import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="section_wide footer">
      <div className="footer_top">
        <div className="footer_first">
          <div className="footer_first_inner">
            <div className="footer_first_heading">ONLINE STORE</div>
            <p style={{ marginTop: '1rem' }}>
              Specializes in providing high-quality, stylish products for your
              wardrobe.
            </p>
          </div>
        </div>
        <div className="footer_second">
          <div className="footer_second_heading">COMPANY</div>
          <ul className="footer_links">
            <li>All Collections</li>
            <li>Winter Edition</li>
            <li>Discount</li>
          </ul>
        </div>
        <div className="footer_third">
          {' '}
          <div className="footer_third_heading">SUPPORT</div>
          <ul className="footer_links">
            {' '}
            <li>FAQs</li>
            <li>Cookie Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <div className="footer_fourth">
          <div className="footer_fourth_heading">PAYMENT METHODS</div>
          <ul className="footer_links">
            <li>FAQs</li>
            <li>Cookie Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
      </div>
      <div className="footer_bottom">
        Copyright @2023 OnlineStore. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
