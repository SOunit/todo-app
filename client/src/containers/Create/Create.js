import React, { Component } from 'react';
import classes from './Create.module.css';

class Create extends Component {
  state = {
    todoText: '',
  };

  OnTodoInput(e) {
    const inputText = e.target.value;
    this.setState({ todoText: inputText });
  }

  render() {
    return (
      <div className={classes.Create}>
        <h2>Create Todo</h2>
        <input
          value={this.state.todoText}
          onChange={(e) => this.OnTodoInput(e)}
        ></input>
      </div>
    );
  }
}

export default Create;
