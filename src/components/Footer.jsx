import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer has-bg-image" style={{ backgroundColor: '#6495ED' }}>
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#" className="logo" style={{ color: '#FFC0CB' }}>
                Barber
                <span className="span" style={{ color: '#FFC0CB' }}>
                  Hair Salon
                </span>
              </a>
              <form action="" className="input-wrapper">
                <input
                  type="email"
                  name="email_address"
                  placeholder="Enter Your Email"
                  required
                  className="email-field"
                  style={{ backgroundColor: '#FFC0CB', color: '#6495ED' }}
                />
                <button type="submit" className="btn has-before" style={{ backgroundColor: '#FFC0CB', color: '#6495ED' }}>
                  <span className="span">Subscribe Now</span>
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </button>
              </form>
            </div>
            <div className="footer-link-box">
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title" style={{ color: '#FFC0CB' }}>
                    Quick Links
                  </p>
                </li>
                <li>
                  <a href="#" className="footer-link has-before" style={{ color: '#FFC0CB' }}>
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link has-before" style={{ color: '#FFC0CB' }}>
                    Meet Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link has-before" style={{ color: '#FFC0CB' }}>
                    Our Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link has-before" style={{ color: '#FFC0CB' }}>
                    Need A Career?
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link has-before" style={{ color: '#FFC0CB' }}>
                    News & Blog
                  </a>
                </li>
              </ul>
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title" style={{ color: '#FFC0CB' }}>
                    Services
                  </p>
                </li>
                <li>
                  <a href="#" className="footer-link has-before" style={{ color: '#FFC0CB' }}>
                    Hair Cutting
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link has-before" style={{ color: '#FFC0CB' }}>
                    Shaving & Design
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link has-before" style={{ color: '#FFC0CB' }}>
                    Hair Colors
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link has-before" style={{ color: '#FFC0CB' }}>
                    Beauty & Spa
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link has-before" style={{ color: '#FFC0CB' }}>
                    Body Massages
                  </a>
                </li>
              </ul>
              <ul className="footer-list">
                <li>
                  <p className="footer-list-title" style={{ color: '#FFC0CB' }}>
                    Contact Us
                  </p>
                </li>
                <li className="footer-list-item" style={{ color: '#FFC0CB' }}>
                  <ion-icon name="location-outline" aria-hidden="true" style={{ color: '#FFC0CB' }}></ion-icon>
                  <address className="contact-link" style={{ color: '#FFC0CB' }}>
                    7528 Roberts Ave. Palm Bay, FL 32907
                  </address>
                </li>
                <li className="footer-list-item" style={{ color: '#FFC0CB' }}>
                  <ion-icon name="call-outline" aria-hidden="true" style={{ color: '#FFC0CB' }}></ion-icon>
                  <a href="tel:+0123456789" className="contact-link" style={{ color: '#FFC0CB' }}>
                    +012 (345) 67 89
                  </a>
                </li>
                <li className="footer-list-item" style={{ color: '#FFC0CB' }}>
                  <ion-icon name="time-outline" aria-hidden="true" style={{ color: '#FFC0CB' }}></ion-icon>
                  <span className="contact-link" style={{ color: '#FFC0CB' }}>
                    Sun - Friday, 08 am - 09 pm
                  </span>
                </li>
                <li className="footer-list-item" style={{ color: '#FFC0CB' }}>
                  <ion-icon name="mail-outline" aria-hidden="true" style={{ color: '#FFC0CB' }}></ion-icon>
                  <a href="mailto:support@gmail.com" className="contact-link" style={{ color: '#FFC0CB' }}>
                    Mukhethwa@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="copyright" style={{ color: '#FFC0CB' }}>
              &copy; 2024 <a href="#" className="copyright-link" style={{ color: '#FFC0CB' }}>
                | Mukhethwa
              </a>
              . All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
