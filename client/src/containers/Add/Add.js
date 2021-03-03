import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import CardList from '../../components/CardList/CardList';
import classes from './Add.module.css';
import ControllButtons from '../../components/ControlButtons/ControlButtons';

class Add extends Component {
  componentDidMount() {
    this.props.onInit();
  }

  onAdd() {
    const newTodoMasterList = this.props.todoMasterList.filter((todoMaster) => {
      return todoMaster.isActive === true;
    });
    this.props.onAdd(newTodoMasterList);
    this.props.history.push('/');
  }

  onRemove() {
    const todoMasterListToRemove = this.props.todoMasterList.filter(
      (todoMaster) => {
        return todoMaster.isActive === true;
      }
    );

    if (todoMasterListToRemove.length === 0) {
      window.alert('select 1 or more todos!');
      return;
    }

    const isRemove = window.confirm('are you sure?');
    if (isRemove) {
      this.props.onRemove(todoMasterListToRemove);
    }
  }

  render() {
    let todos = null;

    if (this.props.todoMasterList) {
      todos = (
        <CardList
          todoList={this.props.todoMasterList}
          cardClicked={this.props.onMasterCardClicked}
        />
      );
    }
    return (
      <div>
        {todos}
        <ControllButtons
          buttons={[
            { buttonText: 'Add', onClick: () => this.onAdd() },
            { buttonText: 'Remove', onClick: () => this.onRemove() },
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoMasterList: state.todoMasterList.todoMasterList,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    onInit: () => {
      dispatch(actions.initTodoMasterList());
    },
    onAdd: (todoMasterList) => {
      dispatch(actions.addTodo(todoMasterList));
    },
    onMasterCardClicked: (id) => {
      dispatch(actions.onMasterCardClicked(id));
    },
    onRemove: (todoMasterList) => {
      dispatch(actions.removeTodoMaster(todoMasterList));
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Add);
