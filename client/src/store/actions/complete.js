import axios from 'axios';
import * as actionTypes from './actionTypes';

export const onComplete = (todoList) => {
  console.log(todoList);
  return (dispatch) => {
    axios
      .post('/node/mongo/complete', { completeList: todoList })
      .then((response) => {
        return {
          type: actionTypes.ADD_COMPLETE,
        };
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return {
    type: actionTypes.ON_COMPLETE,
    todoList: todoList,
  };
};

export const onInitCompleteList = () => {
  return (dispatch) => {
    axios
      .get('/node/mongo/complete')
      .then((response) => {
        dispatch(setCompleteList(response.data));
      })
      .catch((err) => {
        dispatch(fetchCompleteFailed());
      });
  };
  const completeList = [{ title: 'compete test', user: 'test user' }];
  return {
    type: actionTypes.ON_INIT_COMPLETE_LIST,
    completeList: completeList,
  };
};

export const setCompleteList = (completeList) => {
  return {
    type: actionTypes.SET_COMPLETE_LIST,
    completeList: completeList,
  };
};

export const fetchCompleteFailed = () => {
  return {
    type: actionTypes.FETCH_COMPLETE_FAILED,
  };
};
