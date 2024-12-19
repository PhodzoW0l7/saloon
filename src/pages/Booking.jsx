import React from 'react';
import { IonIcon } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';

const Booking = () => {
  return (
    <div>
      <section className="section appoin" id="appointment" aria-label="appointment">
        <div className="container">
          <div className="appoin-card">
            <figure className="card-banner img-holder" style={{ '--width': 250, '--height': 774 }}>
              <img
                src="./assets/images/appoin-banner-1.jpg"
                width="250"
                height="774"
                loading="lazy"
                alt=""
                className="img-cover"
              />
            </figure>
            <div className="card-content">
              <h2 className="h2 section-title">Make Appointment</h2>
              <p className="section-text">
                Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua
                suspendisse
              </p>
              <form action="" className="appoin-form">
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    required
                    className="input-field"
                  />
                  <input
                    type="email"
                    name="email_address"
                    placeholder="Email Address"
                    required
                    className="input-field"
                  />
                </div>
                <div className="input-wrapper">
                  <input type="text" name="phone" placeholder="Phone Number" required className="input-field" />
                  <select name="category" className="input-field">
                    <option value="Select category">Select category</option>
                    <option value="Beauty & spa">Beauty & spa</option>
                    <option value="Body massage">Body massage</option>
                    <option value="Shaving & Facial">Shaving & Facial</option>
                    <option value="Hair Color">Hair Color</option>
                  </select>
                </div>
                <input type="date" name="date" required className="input-field date" />
                <textarea name="message" placeholder="Write Message" required className="input-field"></textarea>
                <button type="submit" className="form-btn">
                  <span className="span">Appointment Now</span>
                  <IonIcon name="arrow-forward" aria-hidden="true"></IonIcon>
                </button>
              </form>
            </div>
            <figure className="card-banner img-holder" style={{ '--width': 250, '--height': 774 }}>
              <img
                src="./assets/images/appoin-banner-2.jpg"
                width="250"
                height="774"
                loading="lazy"
                alt=""
                className="img-cover"
              />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
