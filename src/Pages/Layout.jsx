// src/Pages/Layout.js
import React from 'react';
const Layout = ({ children }) => {
  return (
    <div>
      <h1 className="Title">janelle carothers</h1>
      <h2 className="sub">Costume Designer + Stylist</h2>
      <h3>hi this is tony stark</h3>
      <div>{children}</div>
    </div>
  );
};

export default Layout;