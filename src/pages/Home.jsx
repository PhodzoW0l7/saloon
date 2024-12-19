import React from 'react';
import { IonIcon } from '@ionic/react';
import { arrowForward, menuOutline } from 'ionicons/icons';

const Home = () => {
  return (
    <>
      <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Rubik:wght@300,400;700&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="assets/css/flaticon.min.css" />
      <link rel="preload" as="image" href="./assets/images/hero-banner.jpg"></link>
      <main>
        <article>
          <section
            className="section hero has-before has-bg-image"
            id="home"
            aria-label="home"
            style={{ backgroundImage: `url('/assets/pexels-zvolskiy-1570806.jpg')`, color: '#ffffff' }}
          >
            <div className="container">
              <h1 className="h1 hero-title" style={{ color: '#4895ef' }}>
                Mukhethwa's Hair Saloon
              </h1>
              <p className="hero-text" style={{ color: '#f0f0f0' }}>
                The best hair saloon you'll meet in town that specialised in both men and women.
              </p>
              <a href="#" className="btn has-before" style={{ backgroundColor: '#f472b6', color: '#ffffff' }}>
                <span className="span">Explore Our Services</span>
                <IonIcon name="arrow-forward" aria-hidden="true"></IonIcon>
              </a>
            </div>
          </section>
        </article>
      </main>
      <section className="section service" id="services" aria-label="services" style={{ backgroundColor: '#f0f0f0' }}>
        <div className="container">
          <h2 className="h2 section-title text-center" style={{ color: '#4895ef' }}>
            Service We Provide
          </h2>
          <p className="section-text text-center" style={{ color: '#1e293b' }}>
            We provide good and quality services for both men and women
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
                  <IonIcon name="arrow-forward" aria-hidden="true"></IonIcon>
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
                  <IonIcon name="arrow-forward" aria-hidden="true"></IonIcon>
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
                  <IonIcon name="arrow-forward" aria-hidden="true"></IonIcon>
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
                  <IonIcon name="arrow-forward" aria-hidden="true"></IonIcon>
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
                  <IonIcon name="arrow-forward" aria-hidden="true"></IonIcon>
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
                  <IonIcon name="arrow-forward" aria-hidden="true"></IonIcon>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
