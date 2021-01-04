import axios from 'axios';
import * as actionTypes from './actionTypes';

export const setTodoList = (todoList) => {
  return {
    type: actionTypes.SET_TODO_LIST,
    todoList: todoList,
  };
};

export const fetchTodoFailed = () => {
  return {
    type: actionTypes.FETCH_TODO_FAILED,
  };
};

export const initTodoList = () => {
  return (dispatch) => {
    axios
      .get('/node/mongo/todoList')
      .then((response) => {
        dispatch(setTodoList(response.data));
      })
      .catch((err) => {
        dispatch(fetchTodoFailed());
      });
  };
};
