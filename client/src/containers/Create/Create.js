import React, { Component } from 'react';
import classes from './Create.module.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Create extends Component {
  state = {
    todoMasterText: '',
  };

  OnTodoInput(e) {
    const inputText = e.target.value;
    this.setState({ todoMasterText: inputText });
  }

  onCreate() {
    this.props.onCreateTodoMaster(this.state.todoMasterText);
    this.setState({ todoMasterText: '' });
  }

  render() {
    return (
      <div className={classes.Create}>
        <h2>Create Todo</h2>
        <input
          value={this.state.todoMasterText}
          onChange={(e) => this.OnTodoInput(e)}
        ></input>
        <button onClick={(todoMasterText) => this.onCreate(todoMasterText)}>
          Create
        </button>
      </div>
    );
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    onCreateTodoMaster: (todoMasterText) =>
      dispatch(actions.createTodoMaster(todoMasterText)),
  };
};

export default connect(null, mapDispathToProps)(Create);
