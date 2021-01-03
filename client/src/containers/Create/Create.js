import React, { Component } from 'react';
import classes from './Create.module.css';
import { connect } from 'react-redux';

class Create extends Component {
  state = {
    todoText: '',
    todo: null,
  };

  componentDidMount() {
    this.setState({ todo: this.props.todo });
  }

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

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
  };
};

export default connect(mapStateToProps)(Create);
