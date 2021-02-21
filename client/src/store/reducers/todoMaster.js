import * as actionTypes from '../actions/actionTypes';

const initialState = {
  todoMasterList: [],
};

const createTodoMaster = (state, action) => {
  console.log(state);
  console.log(action.todo);
  return { todoMasterList: state.todoList };
};

const setTodoMasterList = (state, action) => {
  let todoMasterList = action.todoList.map((todo) => {
    return { ...todo, isActive: false };
  });
  return { todoMasterList: todoMasterList };
};

const onMasterCardClicked = (state, action) => {
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
    case actionTypes.CREATE_TODO_MASTER:
      return createTodoMaster(state, action);
    case actionTypes.SET_TODO_MASTER_LIST:
      return setTodoMasterList(state, action);
    case actionTypes.ON_MSTER_CARD_CLICKED:
      return onMasterCardClicked(state, action);
    default:
      return state;
  }
};

export default reducer;
