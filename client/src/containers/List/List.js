import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import classes from './List.module.css';
import CardList from '../../components/CardList/CardList';
import ControllButtons from '../../components/ControlButtons/ControlButtons';

class List extends Component {
  componentDidMount() {
    this.props.onInitTodoList();
  }

  onComplete() {
    const newTodoList = this.props.todoList.filter((todo) => {
      return todo.isActive === true;
    });
    this.props.onComplete(newTodoList);
    // this.props.history.push('/');
  }

  render() {
    let todoList = null;

    if (this.props.todoList) {
      todoList = (
        <CardList
          todoList={this.props.todoList}
          cardClicked={this.props.onCardClicked}
        />
      );
    }

    return (
      <div>
        {todoList}
        <ControllButtons
          buttons={[
            { buttonText: 'Complete', onClick: () => this.onComplete() },
            { buttonText: 'Remove', onClick: () => this.onComplete() },
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList.todoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitTodoList: () => {
      dispatch(actions.initTodoList());
    },
    onCardClicked: (id) => {
      dispatch(actions.onCardClicked(id));
    },
    onComplete: (todoList) => {
      dispatch(actions.onComplete(todoList));
      dispatch(actions.onComplete(todoList));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
