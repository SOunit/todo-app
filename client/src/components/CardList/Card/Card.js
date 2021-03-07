import React from 'react';
import classes from './Card.module.css';

const card = (props) => {
  let classNames = [classes.card];
  if (props.isActive) {
    classNames.push(classes.active);
  }
  // [a, b] > a b
  classNames = classNames.join(' ');

  return (
    <div className={classNames} onClick={() => props.cardClicked(props.id)}>
      <div className={classes.num_box}>{props.index}</div>
      <div>
        <h2>{props.title}</h2>
        <div>{props.createdAt}</div>
        <div>Added by {props.user}</div>
      </div>
    </div>
  );
};

export default card;
