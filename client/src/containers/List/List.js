import React, { Component } from 'react';
import CardList from '../../components/CardList/CardList';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class List extends Component {
  componentDidMount() {
    this.props.onInitTodoList();
  }

  render() {
    return <CardList todoList={this.props.todoList} />;
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitTodoList: () => {
      dispatch(actions.initTodoList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
