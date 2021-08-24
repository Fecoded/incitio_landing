import { USER_FRIENDS, GET_SUGGESTIONS } from "./friend.types";

const INITIALSTATE = {
  user_friends: [],
  suggestions: [],
};

const Friend = (state = INITIALSTATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_FRIENDS:
      return {
        ...state,
        user_friends: payload,
      };
    case GET_SUGGESTIONS:
      return {
        ...state,
        suggestions: payload,
      };
    default:
      return state;
  }
};

export default Friend;
