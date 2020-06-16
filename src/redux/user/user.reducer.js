import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        errMsg: null,
      };

    case UserActionTypes.LOGIN_ERROR:
    case UserActionTypes.SIGNUP_ERROR:
      return {
        ...state,
        errMsg: action.err,
      };

    default:
      return state;
  }
};

export default userReducer;
