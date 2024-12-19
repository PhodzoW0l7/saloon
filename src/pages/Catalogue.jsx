import React from 'react';
import { IonIcon } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';

const Catalogue = () => {
  return (
    <div>
      <section className="section gallery" id="gallery" aria-label="photo gallery">
        <div className="container">
          <div className="title-wrapper">
            <div>
              <h2 className="h2 section-title">Latest Photo Gallery</h2>
              <p className="section-text">
                Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua
                suspendisse
              </p>
            </div>
            <a href="#" className="btn has-before">
              <span className="span">Explore More Gallery</span>
              <IonIcon name="arrow-forward" aria-hidden="true"></IonIcon>
            </a>
          </div>
          <ul className="grid-list">
            <li>
              <div className="gallery-card">
                <figure className="card-banner img-holder" style={{ '--width': 422, '--height': 550 }}>
                  <img
                    src="./assets/images/gallery-1.jpg"
                    width="422"
                    height="550"
                    loading="lazy"
                    alt="Hair Cutting"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <h3 className="h3 card-title">Hair Cutting</h3>
                  <p className="card-text">Barbers & Salon Services</p>
                  <a href="#" className="card-btn" aria-label="Read more">
                    <IonIcon name="arrow-forward" aria-hidden="true"></IonIcon>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="gallery-card">
                <figure className="card-banner img-holder" style={{ '--width': 422, '--height': 550 }}>
                  <img
                    src="./assets/images/gallery-2.jpg"
                    width="422"
                    height="550"
                    loading="lazy"
                    alt="Hair Cutting"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <h3 className="h3 card-title">Hair Cutting</h3>
                  <p className="card-text">Barbers & Salon Services</p>
                  <a href="#" className="card-btn" aria-label="Read more">
                    <IonIcon name="arrow-forward" aria-hidden="true"></IonIcon>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="gallery-card">
                <figure className="card-banner img-holder" style={{ '--width': 422, '--height': 550 }}>
                  <img
                    src="./assets/images/gallery-3.jpg"
                    width="422"
                    height="550"
                    loading="lazy"
                    alt="Hair Cutting"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <h3 className="h3 card-title">Hair Cutting</h3>
                  <p className="card-text">Barbers & Salon Services</p>
                  <a href="#" className="card-btn" aria-label="Read more">
                    <IonIcon name="arrow-forward" aria-hidden="true"></IonIcon>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="gallery-card">
                <figure className="card-banner img-holder" style={{ '--width': 422, '--height': 550 }}>
                  <img
                    src="./assets/images/gallery-4.jpg"
                    width="422"
                    height="550"
                    loading="lazy"
                    alt="Hair Cutting"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <h3 className="h3 card-title">Hair Cutting</h3>
                  <p className="card-text">Barbers & Salon Services</p>
                  <a href="#" className="card-btn" aria-label="Read more">
                    <IonIcon name="arrow-forward" aria-hidden="true"></IonIcon>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Catalogue;
