import React from 'react';
import '../index.scss';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/221808/sky.jpg"
        className="background"
        alt="Background"
      />
      {Array.from({ length: 100 }, (_, index) => (
        <div key={index} className={`circle-container circle-${index + 1}`}>
          <div className="circle"></div>
        </div>
      ))}
      {children}
    </div>
  );
};

export default Layout;
