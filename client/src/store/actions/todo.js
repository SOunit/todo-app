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

export const onComplete = (todoList) => {
  console.log(todoList);
  return {
    type: actionTypes.ON_COMPLETE,
    todoList: todoList,
  };
};

export const onInitCompleteList = () => {
  const completeList = [{ title: 'compete test', user: 'test user' }];
  return {
    type: actionTypes.ON_INIT_COMPLETE_LIST,
    completeList: completeList,
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

export const onCardClicked = (id) => {
  return {
    type: actionTypes.ON_CARD_CLICKED,
    id: id,
  };
};

export const onMasterCardClicked = (id) => {
  return {
    type: actionTypes.ON_MSTER_CARD_CLICKED,
    id: id,
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
