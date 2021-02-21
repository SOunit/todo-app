import React, { Component } from 'react';
import CardList from '../../components/CardList/CardList';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import classes from './Done.module.css';

class Done extends Component {
  componentDidMount() {
    this.props.onInitCompleteList();
  }

  render() {
    let todoList = null;

    console.log(this.props.completeList);

    if (this.props.completeList) {
      todoList = (
        <CardList
          todoList={this.props.completeList}
          cardClicked={this.props.onCardClicked}
        />
      );
    }

    return (
      <div>
        {todoList}
        <div className={classes.buttonBox}>
          <button
            className={classes.addButton}
            onClick={() => this.onComplete()}
          >
            Complete
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    completeList: state.completeList.completeList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitCompleteList: () => {
      dispatch(actions.onInitCompleteList());
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

export default connect(mapStateToProps, mapDispatchToProps)(Done);
