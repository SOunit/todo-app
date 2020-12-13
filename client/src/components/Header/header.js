import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

const header = () => {
  return (
    <header className={classes.header}>
      <h1>
        <NavLink to="/">Todo App</NavLink>
      </h1>
      <nav>
        <ul className={classes.headerItems}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
