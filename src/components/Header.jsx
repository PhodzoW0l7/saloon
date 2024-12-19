import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className="header" style={{ backgroundColor: '#6495ED' }}>
        <div className="header-bottom" data-header>
          <div className="container">
            <Link to="/" className="logo" style={{ color: '#FFC0CB' }}>
              Mukhethwa's
              <span className="span" style={{ color: '#FFC0CB' }}>
                Hair Salon
              </span>
            </Link>
            <nav className="navbar container" data-navbar>
              <ul className="navbar-list">
                <li className="navbar-item">
                  <Link to="/" className="navbar-link" data-nav-link style={{ color: '#FFC0CB' }}>
                    Home
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/services" className="navbar-link" data-nav-link style={{ color: '#FFC0CB' }}>
                    Services
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/booking" className="navbar-link" data-nav-link style={{ color: '#FFC0CB' }}>
                    Booking
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/catalogue" className="navbar-link" data-nav-link style={{ color: '#FFC0CB' }}>
                    Catalogue
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/contact" className="navbar-link" data-nav-link style={{ color: '#FFC0CB' }}>
                    Contact
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/about" className="navbar-link" data-nav-link style={{ color: '#FFC0CB' }}>
                    About
                  </Link>
                </li>
              </ul>
            </nav>
            <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler style={{ color: '#FFC0CB' }}>
              <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
            </button>
            <Link to="/appointment" className="btn has-before" style={{ backgroundColor: '#FFC0CB', color: '#6495ED' }}>
              <span className="span">Appointment</span>
              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
