import React from 'react';
import { Link } from 'react-router-dom';
import moduleCss from './header.module.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={moduleCss.headerContainer}>
          <li className={moduleCss.headerItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={moduleCss.headerItem}>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
