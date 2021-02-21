import * as actionTypes from '../actions/actionTypes';

const initialState = {
  completeList: [{ title: 'test', user: 'test' }],
};

const onComplete = (state, action) => {
  console.log(state);
  console.log(action.todoList);
  return { completeList: action.todoList };
};

const onInitCompleteList = (state, action) => {
  return { completeList: action.completeList };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ON_COMPLETE:
      return onComplete(state, action);
    case actionTypes.ON_INIT_COMPLETE_LIST:
      return onInitCompleteList(state, action);
    default:
      return state;
  }
};

export default reducer;
