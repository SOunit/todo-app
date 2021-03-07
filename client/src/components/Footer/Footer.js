import React from 'react';
import { NavLink } from 'react-router-dom';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';

import classes from './Footer.module.css';

const footer = () => {
  return (
    <footer className={classes.footer}>
      <NavLink
        to="/"
        className={classes.footerItem}
        activeClassName={classes.active}
        exact
      >
        <FontAwesomeIcon icon={faList} className={classes.footerIcon} />
        List
      </NavLink>
      <NavLink
        to="/add"
        className={classes.footerItem}
        activeClassName={classes.active}
      >
        <FontAwesomeIcon icon={faPlus} className={classes.footerIcon} />
        Add
      </NavLink>
      <NavLink
        to="/create"
        className={classes.footerItem}
        activeClassName={classes.active}
      >
        <FontAwesomeIcon icon={faLightbulb} className={classes.footerIcon} />
        Create
      </NavLink>
      <NavLink
        to="/done"
        className={classes.footerItem}
        activeClassName={classes.active}
      >
        <FontAwesomeIcon icon={faCheck} className={classes.footerIcon} />
        Done
      </NavLink>
    </footer>
  );
};

export default footer;
