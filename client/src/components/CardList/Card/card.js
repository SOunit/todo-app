import React from 'react';
import classes from './Card.module.css';

const card = (props) => {
  return (
    <div className={classes.card}>
      <h2>Title</h2>
      <div>{new Date().toISOString()}</div>
      <div>Added by Who</div>
    </div>
  );
};

export default card;
