import axios from 'axios';
import * as actionTypes from './actionTypes';

export const onInitCompleteList = () => {
  return (dispatch) => {
    axios
      .get('/node/mongo/todoList')
      .then((response) => {
        dispatch(setCompleteList(response.data));
      })
      .catch((err) => {
        dispatch(fetchCompleteFailed());
      });
  };
  const completeList = [{ title: 'compete test', user: 'test user' }];
  return {
    type: actionTypes.ON_INIT_COMPLETE_LIST,
    completeList: completeList,
  };
};

export const setCompleteList = (completeList) => {
  return {
    type: actionTypes.SET_COMPLETE_LIST,
    completeList: completeList,
  };
};

export const fetchCompleteList = () => {
  return {
    type: actionTypes.FETCH_COMPLETE_FAILED,
  };
};
