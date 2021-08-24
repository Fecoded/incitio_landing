import {
  USERS_EVENTS,
  GET_EVENTS,
  GET_JOBS,
  EVENT_VALUES,
  EVENT_TIME,
  EVENT_DATE,
  EVENT_TAG,
  EVENT_VENUE,
  EVENT_PICTURE,
} from "./event.types";
import axios from "axios";
import { Url } from "../common/url";
import { newAlert } from "../common/Alert";

export const listEvents = () => async (dispatch) => {
  let token;

  if (localStorage.userToken) {
    token = localStorage.userToken;
  }

  try {
    const res = await axios.post(`${Url}/UpcomingEvents`, { token });

    dispatch({
      type: GET_EVENTS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const userEvents = () => async (dispatch) => {
  let token;

  if (localStorage.userToken) {
    token = localStorage.userToken;
  }

  try {
    const res = await axios.get(`${Url}/feedslistAllMyEvents`, {
      params: { token },
    });

    dispatch({
      type: USERS_EVENTS,
      payload: res.data.data,
      likes: res.data.likes,
    });
  } catch (err) {
    console.error(err);
  }
};

export const getJobs = () => async (dispatch) => {
  let token;

  if (localStorage.userToken) {
    token = localStorage.userToken;
  }

  try {
    const res = await axios.post(`${Url}/Availablejobs`, { token });

    dispatch({
      type: GET_JOBS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const createEvent =
  ({
    title,
    description,
    time,
    date,
    venue,
    picture,
    tag,
    values,
    type,
    hideModal,
  }) =>
  async (dispatch) => {
    let token;

    if (localStorage.userToken) {
      token = localStorage.userToken;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("time", time);
    formData.append("date", date);
    formData.append("venue", venue);
    formData.append("picture", picture, picture.name);
    formData.append("tag", tag);
    formData.append("values", values);
    formData.append("type", type);
    formData.append("token", token);

    try {
      const res = await axios.post(`${Url}/UploadPost`, formData);

      newAlert(res.data.message, "success");
      dispatch(listEvents());
      hideModal(window.$("#exampleModalCustomScrollable").modal("hide"));
    } catch (err) {
      console.error(err);
      newAlert(err, "error");
    }
  };

export const addEventValue = (values) => (dispatch) => {
  dispatch({ type: EVENT_VALUES, values });
};
export const addEventTime = (time) => (dispatch) => {
  dispatch({ type: EVENT_TIME, time });
};
export const addEventVenue = (venue) => (dispatch) => {
  dispatch({ type: EVENT_VENUE, venue });
};

export const addEventTag = (tag) => (dispatch) => {
  dispatch({ type: EVENT_TAG, tag });
};

export const addEventDate = (date) => (dispatch) => {
  dispatch({ type: EVENT_DATE, date });
};

export const addEventPicture = (picture) => (dispatch) => {
  dispatch({ type: EVENT_PICTURE, picture });
};
