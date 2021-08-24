import { LIST_SUGGESTED_GROUP, LIST_USER_GROUPS } from "./group.types";

const INITIALSTATE = {
  groups: [],
  usersuggestedgroups: [],
};

const Group = (state = INITIALSTATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_USER_GROUPS:
      return {
        ...state,
        groups: payload,
      };
    case LIST_SUGGESTED_GROUP:
      return {
        ...state,
        usersuggestedgroups: payload,
      };
    default:
      return state;
  }
};

export default Group;
