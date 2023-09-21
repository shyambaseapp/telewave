import React from 'react';
import Header from '../elements/Header';
import Footer from '../elements/footer/Footer';
import  '../../assets/styles/main.css'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='main-container'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;