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
      <header className="header">
        <div className="header-bottom" data-header>
          <div className="container">
            <a href="#" className="logo">
              Barber
              <span className="span">Hair Salon</span>
            </a>
            <nav className="navbar container" data-navbar>
              <ul className="navbar-list">
                <li className="navbar-item">
                  <a href="#home" className="navbar-link" data-nav-link>
                    Home
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="#services" className="navbar-link" data-nav-link>
                    Services
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="#pricing" className="navbar-link" data-nav-link>
                    Pricing
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="#gallery" className="navbar-link" data-nav-link>
                    Gallery
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="#appointment" className="navbar-link" data-nav-link>
                    Appointment
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="#" className="navbar-link" data-nav-link>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
              <IonIcon name="menu-outline" aria-hidden="true"></IonIcon>
            </button>
            <a href="#" className="btn has-before">
              <span className="span">Appointment</span>
              <IonIcon name="arrow-forward" aria-hidden="true"></IonIcon>
            </a>
          </div>
        </div>
      </header>
      <main>
        <article>
          <section
            className="section hero has-before has-bg-image"
            id="home"
            aria-label="home"
            style={{ backgroundImage: "url('./assets/images/hero-banner.jpg')" }}
          >
            <div className="container">
              <h1 className="h1 hero-title">Barbers & Hair Cutting</h1>
              <p className="hero-text">
                Sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                suspendisse ultrices gravida
              </p>
              <a href="#" className="btn has-before">
                <span className="span">Explore Our Services</span>
                <IonIcon name="arrow-forward" aria-hidden="true"></IonIcon>
              </a>
            </div>
          </section>
        </article>
      </main>
      <section className="section service" id="services" aria-label="services">
        <div className="container">
          <h2 className="h2 section-title text-center">Service We Provide</h2>
          <p className="section-text text-center">
            Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse
          </p>
          <ul className="grid-list">
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <i className="flaticon-salon"></i>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Hair Cutting Style
                  </a>
                </h3>
                <p className="card-text">
                  Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="card-btn" aria-label="more">
                  <IonIcon name="arrow-forward" aria-hidden="true"></IonIcon>
                </a>
              </div>
            </li>
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <i className="flaticon-shampoo"></i>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Hair Washing
                  </a>
                </h3>
                <p className="card-text">
                  Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="card-btn" aria-label="more">
                  <IonIcon name="arrow-forward" aria-hidden="true"></IonIcon>
                </a>
              </div>
            </li>
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <i className="flaticon-hot-stone"></i>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Body Treatments
                  </a>
                </h3>
                <p className="card-text">
                  Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="card-btn" aria-label="more">
                  <IonIcon name="arrow-forward" aria-hidden="true"></IonIcon>
                </a>
              </div>
            </li>
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <i className="flaticon-treatment"></i>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Beauty & Spa
                  </a>
                </h3>
                <p className="card-text">
                  Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="card-btn" aria-label="more">
                  <IonIcon name="arrow-forward" aria-hidden="true"></IonIcon>
                </a>
              </div>
            </li>
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <i className="flaticon-shaving-razor"></i>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Stylist Shaving
                  </a>
                </h3>
                <p className="card-text">
                  Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="card-btn" aria-label="more">
                  <IonIcon name="arrow-forward" aria-hidden="true"></IonIcon>
                </a>
              </div>
            </li>
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <i className="flaticon-hair-dye"></i>
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Multi Hair Colors
                  </a>
                </h3>
                <p className="card-text">
                  Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="card-btn" aria-label="more">
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
