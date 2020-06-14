import UserActionTypes from './user.types';

export const setCurrentUser = (user) => ({
  type: UserActionTypes.CURRENT_USER,
  payload: user,
});

export const checkUserSection = () => ({
  type: UserActionTypes.CHECK_USER_SECTION,
});
