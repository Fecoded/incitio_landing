import { USER_FRIENDS, GET_SUGGESTIONS } from "./friend.types";
import axios from "axios";
import { Url } from "../common/url";

export const userFriends = () => async (dispatch) => {
  let token;

  if (localStorage.userToken) {
    token = localStorage.userToken;
  }

  try {
    const res = await axios.post(`${Url}/ListFriendRequest`, { token });

    dispatch({
      type: USER_FRIENDS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const listAllSuggestions = () => async (dispatch) => {
  let token;

  if (localStorage.userToken) {
    token = localStorage.userToken;
  }

  try {
    const res = await axios.post(`${Url}/listAllSuggestion`, { token });

    dispatch({
      type: GET_SUGGESTIONS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
