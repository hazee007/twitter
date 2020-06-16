import UserActionTypes from './user.types';

export const setCurrentUser = (user) => ({
  type: UserActionTypes.CURRENT_USER,
  payload: user,
});

export const checkUserSection = () => ({
  type: UserActionTypes.CHECK_USER_SECTION,
});

export const loginError = (err) => ({
  type: UserActionTypes.LOGIN_ERROR,
  payload: err,
});

export const SignupError = (err) => ({
  type: UserActionTypes.LOGIN_ERROR,
  payload: err,
});
