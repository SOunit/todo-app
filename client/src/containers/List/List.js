import React, { Component } from 'react';
import CardList from '../../components/CardList/CardList';
import { connect } from 'react-redux';

class List extends Component {
  state = {
    todoList: null,
  };

  componentDidMount() {
    console.log(this.props.todoList);
    this.setState({ todoList: this.props.todoList });
  }

  render() {
    return <CardList todoList={this.state.todoList} />;
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todo,
  };
};

export default connect(mapStateToProps)(List);
