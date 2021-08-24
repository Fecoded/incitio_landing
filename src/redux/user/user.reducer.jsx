import {
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_WALLET,
  USER_ACCOUNT,
  CALENDAR_FEEDS,
  AUTH_ERROR,
  LOGOUT,
} from "./user.types";

const initialState = {
  token: localStorage.getItem("userToken"),
  isAuthenticated: null,
  userWallet: null,
  account: null,
  success: false,
  calendars: [],
  loading: true,
  user: null,
};

const User = (state = initialState, action) => {
  const { type, payload, token } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("userToken", token);
      return {
        ...state,
        token,
        user: payload,
        isAuthenticated: true,
        loading: false,
      };
    case USER_WALLET:
      return {
        ...state,
        userWallet: payload,
        loading: false,
      };
    case CALENDAR_FEEDS:
      return {
        ...state,
        calendars: payload,
        loading: false,
      };
    case USER_ACCOUNT:
      return {
        ...state,
        account: payload,
        success: payload.success,
        loading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("userToken");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default User;
