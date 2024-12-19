import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div>
      <Header />
      <section className="section service" id="services" aria-label="services" style={{ backgroundColor: '#f0f0f0' }}>
        <div className="container">
          <h2 className="h2 section-title text-center" style={{ color: '#4895ef' }}>Service We Provide</h2>
          <p className="section-text text-center" style={{ color: '#1e293b' }}>
            Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse
          </p>
          <ul className="grid-list">
            <li>
              <div className="service-card" style={{ backgroundColor: '#ffffff', color: '#1e293b' }}>
                <div className="card-icon" style={{ color: '#f472b6' }}>
                  <i className="flaticon-salon"></i>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title" style={{ color: '#4895ef' }}>
                    Hair Cutting Style
                  </a>
                </h3>
                <p className="card-text">
                  Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="card-btn" aria-label="more" style={{ color: '#f472b6' }}>
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>
              </div>
            </li>
            <li>
              <div className="service-card" style={{ backgroundColor: '#ffffff', color: '#1e293b' }}>
                <div className="card-icon" style={{ color: '#f472b6' }}>
                  <i className="flaticon-shampoo"></i>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title" style={{ color: '#4895ef' }}>
                    Hair Washing
                  </a>
                </h3>
                <p className="card-text">
                  Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="card-btn" aria-label="more" style={{ color: '#f472b6' }}>
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>
              </div>
            </li>
            <li>
              <div className="service-card" style={{ backgroundColor: '#ffffff', color: '#1e293b' }}>
                <div className="card-icon" style={{ color: '#f472b6' }}>
                  <i className="flaticon-hot-stone"></i>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title" style={{ color: '#4895ef' }}>
                    Body Treatments
                  </a>
                </h3>
                <p className="card-text">
                  Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="card-btn" aria-label="more" style={{ color: '#f472b6' }}>
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>
              </div>
            </li>
            <li>
              <div className="service-card" style={{ backgroundColor: '#ffffff', color: '#1e293b' }}>
                <div className="card-icon" style={{ color: '#f472b6' }}>
                  <i className="flaticon-treatment"></i>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title" style={{ color: '#4895ef' }}>
                    Beauty & Spa
                  </a>
                </h3>
                <p className="card-text">
                  Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="card-btn" aria-label="more" style={{ color: '#f472b6' }}>
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>
              </div>
            </li>
            <li>
              <div className="service-card" style={{ backgroundColor: '#ffffff', color: '#1e293b' }}>
                <div className="card-icon" style={{ color: '#f472b6' }}>
                  <i className="flaticon-shaving-razor"></i>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title" style={{ color: '#4895ef' }}>
                    Stylist Shaving
                  </a>
                </h3>
                <p className="card-text">
                  Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="card-btn" aria-label="more" style={{ color: '#f472b6' }}>
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>
              </div>
            </li>
            <li>
              <div className="service-card" style={{ backgroundColor: '#ffffff', color: '#1e293b' }}>
                <div className="card-icon" style={{ color: '#f472b6' }}>
                  <i className="flaticon-hair-dye"></i>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title" style={{ color: '#4895ef' }}>
                    Multi Hair Colors
                  </a>
                </h3>
                <p className="card-text">
                  Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="card-btn" aria-label="more" style={{ color: '#f472b6' }}>
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
