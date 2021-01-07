import * as actionTypes from '../actions/actionTypes';

const initialState = {
  todo: [],
  todoMasterList: [],
};

const createTodoMaster = (state, action) => {
  console.log(state);
  console.log(action.todo);
  return { todoMasterList: state.todoList };
};

const addTodo = (state, action) => {
  console.log(state);
  console.log(action.todo);
  return { todo: state.todoList };
};

const setTodoList = (state, action) => {
  return { todo: action.todoList };
};

const setTodoMasterList = (state, action) => {
  let todoMasterList = action.todoList.map((todo) => {
    return { ...todo, isActive: false };
  });
  return { todoMasterList: todoMasterList };
};

const onCardClicked = (state, action) => {
  // get index of todo to update
  const newTodoMasterIndex = state.todoMasterList.findIndex((todoMaster) => {
    return todoMaster._id === action.id;
  });

  // create new todo
  const newTodoMaster = { ...state.todoMasterList[newTodoMasterIndex] };
  newTodoMaster.isActive = !newTodoMaster.isActive;

  // create new todo list
  const newTodoMasterList = [...state.todoMasterList];
  newTodoMasterList[newTodoMasterIndex] = newTodoMaster;

  // update todo list
  return { todoMasterList: newTodoMasterList };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TODO_LIST:
      return setTodoList(state, action);
    case actionTypes.CREATE_TODO_MASTER:
      return createTodoMaster(state, action);
    case actionTypes.SET_TODO_MASTER_LIST:
      return setTodoMasterList(state, action);
    case actionTypes.ADD_TODO:
      return addTodo(state, action);
    case actionTypes.ON_CARD_CLICKED:
      return onCardClicked(state, action);
    default:
      return state;
  }
};

export default reducer;
