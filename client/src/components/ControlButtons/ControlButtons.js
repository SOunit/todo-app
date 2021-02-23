import React from 'react';
import classes from './ControlButtons.module.css';

const ControlButtons = (props) => {
  let buttons = null;

  if (props.buttons) {
    buttons = props.buttons.map((button, key) => {
      return (
        <button
          key={key}
          className={classes.button}
          onClick={() => button.onClick()}
        >
          {button.buttonText}
        </button>
      );
    });
  }

  return <div className={classes.buttonBox}>{buttons}</div>;
};

export default ControlButtons;
