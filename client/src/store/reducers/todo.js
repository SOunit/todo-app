import * as actionTypes from '../actions/actionTypes';

const initialState = {
  todo: [
    {
      _id: 'a',
      title: 'test title',
      createdAt: '2020/10/10 10:00',
      user: 'test user',
    },
    {
      _id: 'b',
      title: 'test title',
      createdAt: '2020/10/10 10:00',
      user: 'test user',
    },
    {
      _id: 'c',
      title: 'test title',
      createdAt: '2020/10/10 10:00',
      user: 'test user',
    },
  ],
};

const setTodoList = (state, action) => {
  return { todo: action.todoList };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TODO_LIST:
      return setTodoList(state, action);
    default:
      return state;
  }
};

export default reducer;
