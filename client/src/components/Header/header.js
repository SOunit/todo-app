import React from 'react';
import classes from './header.module.css';

const header = () => {
  return (
    <header className={classes.header}>
      <h1>Todo App</h1>
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
