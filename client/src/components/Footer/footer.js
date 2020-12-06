import React from 'react';
import classes from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';

const footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerItem}>
        <FontAwesomeIcon icon={faList} className={classes.footerIcon} />
        List
      </div>
      <div className={classes.footerItem}>
        <FontAwesomeIcon icon={faPlus} className={classes.footerIcon} />
        Add
      </div>
      <div className={classes.footerItem}>
        <FontAwesomeIcon icon={faLightbulb} className={classes.footerIcon} />
        Create
      </div>
      <div className={classes.footerItem}>
        <FontAwesomeIcon icon={faCheck} className={classes.footerIcon} />
        Done
      </div>
    </footer>
  );
};

export default footer;
