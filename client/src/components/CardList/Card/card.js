import React from 'react';
import classes from './Card.module.css';

const card = (props) => {
  return (
    <div className={classes.card}>
      <h2>{props.title}</h2>
      <div>{props.createdAt}</div>
      <div>Added by {props.user}</div>
    </div>
  );
};

export default card;
