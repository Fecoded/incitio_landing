import {
  GET_USER_CHAT,
  GET_FULL_CHAT,
  SEND_MESSAGE,
  FILTER_CHAT,
} from "./chat.types";
import axios from "axios";
import { Url } from "../common/url";

export const listUserChat = () => async (dispatch) => {
  let token;

  if (localStorage.userToken) {
    token = localStorage.userToken;
  }

  try {
    const res = await axios.post(`${Url}/GetChatList`, { token });

    dispatch({
      type: GET_USER_CHAT,
      payload: res.data,
    });
  } catch (err) {
    console.error(err.response.data);
  }
};

export const listFullUserChat = (reference) => async (dispatch) => {
  let token;

  if (localStorage.userToken) {
    token = localStorage.userToken;
  }

  try {
    const res = await axios.post(`${Url}/GetFullChatList`, {
      token,
      reference,
    });

    dispatch({
      type: GET_FULL_CHAT,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const sendMessage =
  ({ message, user, setMessage }) =>
  async (dispatch) => {
    let token;

    if (localStorage.userToken) {
      token = localStorage.userToken;
    }

    try {
      const res = await axios.post(`${Url}/SendMessageChat`, {
        token,
        message,
        user,
      });

      dispatch({
        type: SEND_MESSAGE,
        payload: res.data,
      });

      setMessage("");
    } catch (err) {
      console.error(err);
    }
  };

export const filterChatList = (item) => (dispatch) => {
  dispatch({ type: FILTER_CHAT, payload: item });
};
