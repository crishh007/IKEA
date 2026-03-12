import React from 'react';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar-info">
          <div className="topbar-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Unit 16/17, 20 Baywood Rd, Etobicoke, Ontario, Canada, M9V 4A8</span>
          </div>
          <div className="topbar-item">
            <i className="fas fa-clock"></i>
            <span>Mon - Fri : 7.00 AM - 5.00 PM & Sat : 7.00 AM - 12:00 PM</span>
          </div>
        </div>
        <div className="topbar-social">
          <div className="topbar-item">
            <i className="fas fa-phone-alt"></i>
            <a href="tel:+14167415140" style={{ color: 'white', textDecoration: 'none' }}>+1 416 741 5140</a>
          </div>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
