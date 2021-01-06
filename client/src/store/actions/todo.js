import axios from 'axios';
import * as actionTypes from './actionTypes';

export const addTodo = (todo) => {
  return (dispatch) => {
    axios
      .post('/node/mongo/todo', { todo: todo })
      .then((response) => {
        return {
          type: actionTypes.ADD_TODO,
        };
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const createTodo = (todoText) => {
  return (dispatch) => {
    axios
      .post('/node/mongo/todo_master', { todoText: todoText })
      .then((response) => {
        console.log(response);
        return {
          type: actionTypes.CREATE_TODO_MASTER,
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

export const setTodoMasterList = (todoList) => {
  return {
    type: actionTypes.SET_TODO_MASTER_LIST,
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

export const initTodoMasterList = () => {
  return (dispatch) => {
    axios
      .get('/node/mongo/todoMasterList')
      .then((response) => {
        dispatch(setTodoMasterList(response.data));
      })
      .catch((err) => {
        dispatch(fetchTodoFailed());
      });
  };
};
