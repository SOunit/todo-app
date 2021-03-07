import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import classes from './Done.module.css';
import CardList from '../../components/CardList/CardList';
import ControlButtons from '../../components/ControlButtons/ControlButtons';

class Done extends Component {
  componentDidMount() {
    this.props.onInitCompleteList();
  }

  render() {
    let todoList = null;

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
        <ControlButtons
          buttons={[
            {
              buttonText: 'Sample',
              onClick: () => {
                console.log('sample');
              },
            },
          ]}
        />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Done);
