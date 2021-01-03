import React from 'react';
import Card from './Card/Card';
import classes from './CardList.module.css';

const cardList = () => {
  return (
    <div className={classes.cardList}>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default cardList;
