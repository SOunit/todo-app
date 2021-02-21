import * as actionTypes from '../actions/actionTypes';

const initialState = {
  todoList: [],
};

const addTodo = (state, action) => {
  console.log(state);
  console.log(action.todo);
  return { todoList: state.todoList };
};

const setTodoList = (state, action) => {
  return { todoList: action.todoList };
};

const onCardClicked = (state, action) => {
  // get index of todo to update
  const newTodoIndex = state.todoList.findIndex((todo) => {
    return todo._id === action.id;
  });

  // create new todo
  const newTodo = { ...state.todoList[newTodoIndex] };
  newTodo.isActive = !newTodo.isActive;

  // create new todo list
  const newTodoList = [...state.todoList];
  newTodoList[newTodoIndex] = newTodo;

  // update todo list
  return { todoList: newTodoList };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TODO_LIST:
      return setTodoList(state, action);
    case actionTypes.ADD_TODO:
      return addTodo(state, action);
    case actionTypes.ON_CARD_CLICKED:
      return onCardClicked(state, action);
    default:
      return state;
  }
};

export default reducer;
