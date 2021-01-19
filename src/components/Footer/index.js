import React from 'react';
import './styles.css';

import Logo from '../../assets/img/logo.svg';


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="center-footer">
      <p className="p-footer font">© 2020 Pedro Regenes. Built using React Js.</p>
      </div>
      <img className="img-footer" src={Logo} />
    </div>
  );
}

export default Footer;