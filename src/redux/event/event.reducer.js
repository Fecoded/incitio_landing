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

const INITIALSTATE = {
  user_events: [],
  events: [],
  jobs: [],
  time: "",
  date: "",
  venue: "",
  picture: "",
  tag: "",
  values: null,
  likes: [],
};

const Event = (state = INITIALSTATE, action) => {
  const { type, payload, time, date, venue, picture, values, tag, likes } =
    action;
  switch (type) {
    case USERS_EVENTS:
      return {
        ...state,
        user_events: payload,
        likes,
      };
    case GET_EVENTS:
      return {
        ...state,
        events: payload,
      };
    case GET_JOBS:
      return {
        ...state,
        jobs: payload,
      };
    case EVENT_VALUES:
      return {
        ...state,
        values,
      };
    case EVENT_DATE:
      return {
        ...state,
        date,
      };
    case EVENT_TIME:
      return {
        ...state,
        time,
      };
    case EVENT_VENUE:
      return {
        ...state,
        venue,
      };
    case EVENT_TAG:
      return {
        ...state,
        tag,
        date,
      };
    case EVENT_PICTURE:
      return {
        ...state,
        picture,
      };

    default:
      return state;
  }
};

export default Event;
