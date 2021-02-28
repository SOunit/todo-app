import axios from 'axios';
import * as actionTypes from './actionTypes';

export const addTodo = (todoMasterList) => {
  console.log(todoMasterList);
  return (dispatch) => {
    axios
      .post('/node/mongo/todo', { todoList: todoMasterList })
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

export const onCardClicked = (id) => {
  return {
    type: actionTypes.ON_CARD_CLICKED,
    id: id,
  };
};
