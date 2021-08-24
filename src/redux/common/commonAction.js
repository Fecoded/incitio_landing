import { SHOW, TOGGLE, SET_CURRENT } from "./types";

export const ToggleShow = (show) => (dispatch) => {
  dispatch({ payload: show, type: SHOW });
};

export const ToggleSidebar = (toggle) => (dispatch) => {
  dispatch({ payload: toggle, type: TOGGLE });
};

export const setCurrent = (value) => (dispatch) => {
  dispatch({ type: SET_CURRENT, payload: value });
};
