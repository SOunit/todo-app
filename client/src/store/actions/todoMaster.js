import axios from 'axios';
import * as actionTypes from './actionTypes';

export const initTodoMasterList = () => {
  return (dispatch) => {
    axios
      .get('/node/mongo/todoMasterList')
      .then((response) => {
        dispatch(setTodoMasterList(response.data));
      })
      .catch((err) => {
        dispatch(fetchTodoMasterFailed());
      });
  };
};

export const createTodoMaster = (todoText) => {
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

export const setTodoMasterList = (todoList) => {
  return {
    type: actionTypes.SET_TODO_MASTER_LIST,
    todoList: todoList,
  };
};

export const fetchTodoMasterFailed = () => {
  return {
    type: actionTypes.FETCH_TODO_MASTER_FAILED,
  };
};

export const onMasterCardClicked = (id) => {
  return {
    type: actionTypes.ON_MSTER_CARD_CLICKED,
    id: id,
  };
};
