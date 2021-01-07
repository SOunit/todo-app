import React, { Component } from 'react';
import classes from './Create.module.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Create extends Component {
  state = {
    todoText: '',
  };

  OnTodoInput(e) {
    const inputText = e.target.value;
    this.setState({ todoText: inputText });
  }

  onCreate() {
    this.props.onCreateTodo(this.state.todoText);
    this.setState({ todoText: '' });
  }

  render() {
    return (
      <div className={classes.Create}>
        <h2>Create Todo</h2>
        <input
          value={this.state.todoText}
          onChange={(e) => this.OnTodoInput(e)}
        ></input>
        <button onClick={(todoText) => this.onCreate(todoText)}>Create</button>
      </div>
    );
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    onCreateTodo: (todoText) => dispatch(actions.createTodo(todoText)),
  };
};

export default connect(null, mapDispathToProps)(Create);
