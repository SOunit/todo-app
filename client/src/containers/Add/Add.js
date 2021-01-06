import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import CardList from '../../components/CardList/CardList';

class Add extends Component {
  componentDidMount() {
    this.props.onInit();
  }

  render() {
    let todos = null;

    if (this.props.todoMasterList) {
      todos = <CardList todoList={this.props.todoMasterList} />;
    }
    return (
      <div>
        {todos}
        <button>Add</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoMasterList: state.todoMasterList,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    onInit: () => {
      dispatch(actions.initTodoMasterList());
    },
    onAdd: () => {
      dispatch(() => actions.addTodo());
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Add);
