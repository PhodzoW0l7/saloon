import React from 'react'

const Header = () => {
  return (
    <div>
      <header class="header">
    <div class="header-bottom" data-header>
      <div class="container">

        <a href="#" class="logo">
          Barber
          <span class="span">Hair Salon</span>
        </a>

        <nav class="navbar container" data-navbar>
          <ul class="navbar-list">

            <li class="navbar-item">
              <a href="#home" class="navbar-link" data-nav-link>Home</a>
            </li>

            <li class="navbar-item">
              <a href="#services" class="navbar-link" data-nav-link>Services</a>
            </li>

            <li class="navbar-item">
              <a href="#pricing" class="navbar-link" data-nav-link>Pricing</a>
            </li>

            <li class="navbar-item">
              <a href="#gallery" class="navbar-link" data-nav-link>Gallery</a>
            </li>

            <li class="navbar-item">
              <a href="#appointment" class="navbar-link" data-nav-link>Appointment</a>
            </li>

            <li class="navbar-item">
              <a href="#" class="navbar-link" data-nav-link>Contact</a>
            </li>

          </ul>
        </nav>

        <button class="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
          <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
        </button>

        <a href="#" class="btn has-before">
          <span class="span">Appointment</span>

          <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
        </a>

      </div>
    </div>

  </header>
    </div>
  )
}

export default Header
