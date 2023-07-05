import React from 'react';
import './Facility.css';
import data from './data';

const Facility = () => {
  return (
    <section>
      <div className="facility_heading">
        <h1>
          We Provide best <br /> customer experiences
        </h1>
        <p>We ensure our customers have the best shopping experience</p>
      </div>
      <div className="facilities">
        {data.map(facility => {
          return (
            <>
              <div className="facility">
                <div className="facility_image">{facility.image}</div>
                <div className="facility_title">{facility.title}</div>
                <div className="facility_desc">{facility.desc}</div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Facility;
