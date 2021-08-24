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
import axios from "axios";
import { newAlert } from "../common/Alert";
import { Url } from "../common/url";
import { listUserTicket } from "../ticket/ticket.action";
import { userEvents } from "../event/event.action";

// LOAD USER
export const loadUser = () => async (dispatch) => {
  let token;

  if (localStorage.userToken) {
    token = localStorage.userToken;
  }

  try {
    const res = await axios.post(`${Url}/me`, { token });

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// USER LOGIN
export const login = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { firstName, lastName, email, gender, dob, password, type } = formData;

  const body = JSON.stringify({
    firstName,
    lastName,
    email,
    gender,
    dob,
    password,
    type,
  });

  try {
    const res = await axios.post(`${Url}/login`, body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.details,
      token: res.data.token,
    });

    newAlert("login was successfully", "success");
    dispatch(loadUser());
    dispatch(getUserWalletAmount());
    dispatch(listUserTicket());
    dispatch(userEvents());
  } catch (err) {
    const errors = err.response.data;

    newAlert(errors.message, "error");

    dispatch({
      type: LOGIN_FAIL,
      payload: errors,
    });
  }
};

// UPDATE PROFILE DETAILS
export const updateProfileDetails = (formData) => async (dispatch) => {
  let token;

  if (localStorage.userToken) {
    token = localStorage.userToken;
  }

  const {
    facebook,
    instagram,
    youtube,
    twitter,
    firstName,
    lastName,
    about,
    status,
    phone,
  } = formData;
  const body = {
    facebook,
    instagram,
    youtube,
    twitter,
    firstName,
    lastName,
    about,
    status,
    phone,
    token,
  };

  try {
    const res = await axios.post(`${Url}/UpdateProfileDetails`, body);

    newAlert(res.data.message, "success");

    dispatch(loadUser());
  } catch (err) {
    // const errors = err.response.data;

    newAlert(err, "error");
  }
};

// UPDATE PROFILE URL
export const updateProfileUrl = (name) => async (dispatch) => {
  let token;

  if (localStorage.userToken) {
    token = localStorage.userToken;
  }

  try {
    const res = await axios.post(`${Url}/UpdateProfileURL`, { token, name });

    newAlert(res.data.message, "success");

    dispatch(loadUser());
  } catch (err) {
    // const errors = err.response.data;

    newAlert(err, "error");
  }
};

// UPDATE PROFILE PICTURE
export const updateProfilePicture = (picture) => async (dispatch) => {
  let token;

  if (localStorage.userToken) {
    token = localStorage.userToken;
  }

  try {
    const formData = new FormData();
    formData.append("picture", picture);

    const res = await axios.post(`${Url}/UpdatePicture`, { token, formData });

    newAlert(res.data.message, "success");

    dispatch(loadUser());
  } catch (err) {
    // const errors = err.response.data;

    newAlert(err, "error");
  }
};

// UPDATE PROFILE COVER
export const updateProfileCover = (picture) => async (dispatch) => {
  let token;

  if (localStorage.userToken) {
    token = localStorage.userToken;
  }

  try {
    const formData = new FormData();
    formData.append("picture", picture, picture.name);

    const res = await axios.post(`${Url}/UpdateCover`, { token, formData });

    newAlert(res.data.message, "success");

    dispatch(loadUser());
  } catch (err) {
    // const errors = err.response.data;

    newAlert(err, "error");
  }
};

// GET USER WALLET AMOUNT
export const getUserWalletAmount = () => async (dispatch) => {
  let token;

  if (localStorage.userToken) {
    token = localStorage.userToken;
  }
  try {
    const res = await axios.post(`${Url}/GetUserWallet`, { token });

    dispatch({
      type: USER_WALLET,
      payload: res.data,
    });
  } catch (err) {
    // const errors = err.response.data;

    newAlert(err, "error");
  }
};

// GET USER WALLET AMOUNT
export const withdrawWallet =
  ({ amount, hideModal }) =>
  async (dispatch) => {
    let token;

    if (localStorage.userToken) {
      token = localStorage.userToken;
    }
    try {
      const res = await axios.post(`${Url}/RequestWithdraw`, { token, amount });

      newAlert(res.data.message, "success");

      dispatch(getUserWalletAmount());
      hideModal(window.$("#withdrawModal").modal("hide"));
      hideModal(window.$("#successModal").modal("show"));
    } catch (err) {
      // const errors = err.response.data;

      newAlert(err.data.message, "error");
    }
  };

// GET CALENDAR FEEDS
export const listCalendarFeeds = () => async (dispatch) => {
  let token;

  if (localStorage.userToken) {
    token = localStorage.userToken;
  }
  try {
    const res = await axios.post(`${Url}/CalendarFeeds`, { token });

    dispatch({
      type: CALENDAR_FEEDS,
      payload: res.data,
    });
  } catch (err) {
    // const errors = err.response.data;

    newAlert(err, "error");
  }
};

// GET CALENDAR FEEDS
export const getUserAccount = () => async (dispatch) => {
  let token;

  if (localStorage.userToken) {
    token = localStorage.userToken;
  }
  try {
    const res = await axios.post(`${Url}/GetAccount`, { token });

    dispatch({
      type: USER_ACCOUNT,
      payload: res.data,
    });
  } catch (err) {
    // const errors = err.response.data;

    newAlert(err, "error");
  }
};

// GET CALENDAR FEEDS
export const UpsertAccount =
  ({ id, name, bank, accountNo, type }) =>
  async (dispatch) => {
    let token;

    if (localStorage.userToken) {
      token = localStorage.userToken;
    }

    const body = { id, name, bank, accountNo, type, token };

    try {
      const res = await axios.post(`${Url}/UpsertAccount`, body);

      newAlert(res.data.message, "success");
      window.$("#walletModal").modal("hide");
      dispatch(getUserAccount());
    } catch (err) {
      // const errors = err.response.data;

      newAlert(err, "error");
    }
  };

// LOGOUT
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
