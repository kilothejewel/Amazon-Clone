import React from 'react';
import './navbar.css';

function Navbar({ cartCount, onCartClick, isDarkMode, toggleTheme }) {
  return (
    <header className="navbar">
      {/* Main Belt */}
      <div className="nav-main">
        {/* Logo */}
        <a href="/" className="nav-logo nav-item">
          <img 
            src="/assets/images/amazon-logo-colored-light-svg.svg" 
            alt="nav-logo" 
            className="nav-logo"
            style={isDarkMode ? { filter: 'invert(1) brightness(2)' } : {}}
          />
        </a>

        {/* Search Bar */}
        <div className="nav-search">
          <select className="search-select">
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="books">Books</option>
          </select>
          <input type="text" className="search-input" placeholder="Search Amazon" />
          <button className="search-btn" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </button>
        </div>

        {/* Dark Mode Toggle */}
        <div className="nav-item" onClick={toggleTheme} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '1.2rem' }}>{isDarkMode ? '☀️' : '🌙'}</span>
        </div>

        {/* Account / Sign In */}
        <div className="nav-item account">
          <span className="nav-text-small">Hello, sign in</span>
          <span className="nav-text-large">Account & Lists</span>
        </div>

        {/* Returns & Orders */}
        <div className="nav-item returns">
          <span className="nav-text-small">Returns</span>
          <span className="nav-text-large">& Orders</span>
        </div>

        {/* Cart */}
        <div className="nav-cart nav-item" onClick={onCartClick} style={{ cursor: 'pointer' }}>
          <div className="cart-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            <span className="cart-count">{cartCount}</span>
          </div>
          <span className="cart-text">Cart</span>
        </div>
      </div>

      {/* Secondary Belt (Categories) */}
      <div className="nav-secondary">
        <a href="#">Today's Deals</a>
        <a href="#">Customer Service</a>
        <a href="#">Registry</a>
        <a href="#">Gift Cards</a>
        <a href="#">Sell</a>
      </div>
    </header>
  );
}

export default Navbar;
