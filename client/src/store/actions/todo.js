import axios from 'axios';
import * as actionTypes from './actionTypes';

export const createTodo = (todoText) => {
  return (dispatch) => {
    axios
      .post('/node/mongo/todo', { todoText: todoText })
      .then((response) => {
        console.log(response);
        return {
          type: actionTypes.CREATE_TODO,
        };
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

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
