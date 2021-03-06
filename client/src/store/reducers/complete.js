import * as actionTypes from '../actions/actionTypes';

const initialState = {
  completeList: null,
};

// fixme: addComplete
const addComplete = (state, action) => {
  console.log(state);
  console.log(action.todoList);
  return { completeList: action.todoList };
};

const onInitCompleteList = (state, action) => {
  return { completeList: action.completeList };
};

const setCompleteList = (state, action) => {
  return { completeList: action.completeList };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COMPLETE:
      return addComplete(state, action);
    case actionTypes.ON_INIT_COMPLETE_LIST:
      return onInitCompleteList(state, action);
    case actionTypes.SET_COMPLETE_LIST:
      return setCompleteList(state, action);
    default:
      return state;
  }
};

export default reducer;
