import React from 'react';
import Card from './Card/Card';
import classes from './CardList.module.css';

const cardList = (props) => {
  let cardList = null;

  if (props.todoList) {
    cardList = props.todoList.map((todo, index) => {
      const dispIndex = index + 1;
      return (
        <Card
          title={todo.title}
          createdAt={todo.createdAt}
          user={todo.user}
          key={todo._id}
          cardClicked={props.cardClicked}
          id={todo._id}
          isActive={todo.isActive}
          index={dispIndex}
        />
      );
    });
  }

  return <div className={classes.cardList}>{cardList}</div>;
};

export default cardList;
