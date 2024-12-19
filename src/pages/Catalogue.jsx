import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Catalogue = () => {
  const [filterOption, setFilterOption] = useState('all');

  const handleFilterChange = (option) => {
    setFilterOption(option);
  };

  return (
    <div>
      <Header />
      <section className="section gallery" id="gallery" aria-label="photo gallery" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container">
          <div className="title-wrapper">
            <div>
              <h2 className="h2 section-title">Latest Photo Gallery</h2>
              <p className="section-text">
                Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua
                suspendisse
              </p>
            </div>
            <div className="filter-buttons">
              <button
                className={`filter-btn ${filterOption === 'all' ? 'active' : ''}`}
                onClick={() => handleFilterChange('all')}
              >
                All
              </button>
              <button
                className={`filter-btn ${filterOption === 'men' ? 'active' : ''}`}
                onClick={() => handleFilterChange('men')}
              >
                Men
              </button>
              <button
                className={`filter-btn ${filterOption === 'women' ? 'active' : ''}`}
                onClick={() => handleFilterChange('women')}
              >
                Women
              </button>
            </div>
            <a href="#" className="btn has-before">
              <span className="span">Explore More Gallery</span>
              <IonIcon name="arrow-forward" aria-hidden="true"></IonIcon>
            </a>
          </div>
          <ul className="grid-list">
            {Array.from({ length: 4 }, (_, i) => (
              <li key={i}>
                <div className="gallery-card" style={{ backgroundColor: '#ffffff' }}>
                  <div className="card-content">
                    <h3 className="h3 card-title">Gallery Item {i + 1}</h3>
                    <p className="card-text">Description of the gallery item</p>
                    <a href="#" className="card-btn" aria-label="Read more">
                      <IonIcon name="arrow-forward" aria-hidden="true"></IonIcon>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Catalogue;
