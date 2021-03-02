import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
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
  }

  onRemove() {
    const todoListToRemove = this.props.todoList.filter((todo) => {
      return todo.isActive === true;
    });

    if (todoListToRemove.length === 0) {
      window.alert('select 1 or more todos!');
      return;
    }

    const isRemove = window.confirm('are you sure?');
    if (isRemove) {
      this.props.onRemove(todoListToRemove);
    }
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
            { buttonText: 'Remove', onClick: () => this.onRemove() },
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
      dispatch(actions.addComplete(todoList));
      dispatch(actions.removeTodo(todoList));
    },
    onRemove: (todoList) => {
      dispatch(actions.removeTodo(todoList));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
