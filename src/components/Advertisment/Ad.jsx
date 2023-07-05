import React from 'react';
import './Ad.css';
import img from '../assets/girl3.png';
import img1 from '../assets/first_girl.png';
import img2 from '../assets/second_girl.png';
const Ad = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="ad__column">
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1683141501029-22d3ebe02931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
              alt=""
              className="first image__grid"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1635189540355-7fcc99a6a0ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="second image__grid"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1644378128776-8c41838abc7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60s"
              alt=""
              className="third image__grid"
            />
          </div>
          <div>
            {' '}
            <img
              src="https://images.unsplash.com/photo-1500042963151-dd617fcc1dde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="fourth image__grid"
            />
          </div>
          <div>
            {' '}
            <img
              src="https://images.unsplash.com/photo-1655035080489-521cde5dfc3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="fifth image__grid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ad;
