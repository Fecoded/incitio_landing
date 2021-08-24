import { SHOW, TOGGLE, SET_CURRENT } from "./types";

const INITIALSTATE = {
  show: "",
  toggle: "",
  current: null,
};

const Common = (state = INITIALSTATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case SHOW:
      return {
        ...state,
        show: payload,
      };
    case TOGGLE:
      return {
        ...state,
        toggle: payload,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
      };
    default:
      return state;
  }
};

export default Common;
