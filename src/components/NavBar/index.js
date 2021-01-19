import React from "react";
import { Link } from 'react-router-dom';
import './styles.css';

import Logo from '../../assets/img/logo.svg';
import Group from '../../assets/img/Group.svg';

const NavBar = () => {
  return (
    <div>
      <div className="menu-fixed"></div>
      <div className="menu-min">
        <img className="menu-min-img" src={Group} />
      </div>
    <header className="container--navbar">
      <a className="logomenu" href="/home">
        <img className="logomenu-img" src={Logo} />
      </a>
      <ul className="Menu">
        <li className="MenuLink">
          <Link className="MaginLink" to="/products"> Artigos </Link>
          <Link className="MaginLink" to="/wherebuy"> Sobre </Link>
          <Link className="MaginLink" to="/contact"> Portifólio </Link>
        </li>
      </ul>
    </header>
    </div>
  );
}

export default NavBar;
