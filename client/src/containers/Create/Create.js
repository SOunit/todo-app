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
    if (this.state.todoMasterText) {
      this.props.onCreateTodoMaster(this.state.todoMasterText);
      this.setState({ todoMasterText: '' });
    } else {
      console.log('input is empty');
    }
  }

  render() {
    return (
      <div className={classes.Create}>
        <h2>Create Todo</h2>
        <input
          className={classes.Input}
          value={this.state.todoMasterText}
          onChange={(e) => this.OnTodoInput(e)}
        ></input>
        <div>
          <button
            className={classes.Button}
            onClick={(todoMasterText) => this.onCreate(todoMasterText)}
          >
            Create
          </button>
        </div>
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
