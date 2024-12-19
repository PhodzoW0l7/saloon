import React from 'react';

const About = () => {
  return (
    <div>
      <section className="section about" id="about" aria-label="about">
        <div className="container">
          <div className="about-card">
            <figure className="card-banner img-holder" style={{ '--width': 600, '--height': 800 }}>
              <img
                src="./assets/images/about-image.jpg"
                width="600"
                height="800"
                loading="lazy"
                alt="About Image"
                className="img-cover"
              />
            </figure>
            <div className="card-content">
              <h2 className="h2 section-title">About Us</h2>
              <p className="section-text">
                At our Saloon, we are dedicated to providing the ultimate in hair and beauty services. Our team of
                skilled professionals are committed to helping you achieve your desired look, whether it's a classic
                style or a modern trend.
              </p>
              <a href="#" className="btn has-before">
                <span className="span">Learn More</span>
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
