import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <section className="section about" id="about" aria-label="about" style={{ backgroundColor: '#FFC0CB' }}>
        <div className="container">
          <div className="about-card">
            <figure className="card-banner img-holder" style={{ '--width': 600, '--height': 800 }}>
              <img
                src="../assets/pexels-cottonbro-3997391.jpg"
                width="600"
                height="800"
                loading="lazy"
                alt="About Image"
                className="img-cover"
              />
            </figure>
            <div className="card-content">
              <h2 className="h2 section-title" style={{ color: '#6495ED' }}>
                About Us
              </h2>
              <p className="section-text" style={{ color: '#6495ED' }}>
                At our Saloon, we are dedicated to providing the ultimate in hair and beauty services. Our team of
                skilled professionals are committed to helping you achieve your desired look, whether it's a classic
                style or a modern trend.
              </p>
              <a href="#" className="btn has-before" style={{ backgroundColor: '#6495ED', color: '#FFC0CB' }}>
                <span className="span">Learn More</span>
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
