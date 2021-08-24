import { USER_FEEDS, LIST_FEEDS, CREATE_COMMENT } from "./feed.types";
import axios from "axios";
import { Url } from "../common/url";
import { newAlert } from "../common/Alert";

export const listFeeds = () => async (dispatch) => {
  let token;

  if (localStorage.userToken) {
    token = localStorage.userToken;
  }
  try {
    const res = await axios.get(`${Url}/feedslistAll`, {
      params: { token },
    });

    dispatch({
      type: LIST_FEEDS,
      payload: res.data.data,
      likes: res.data.likes,
    });
  } catch (err) {
    console.error(err);
  }
};

export const listUserFeeds = () => async (dispatch) => {
  let token;

  if (localStorage.userToken) {
    token = localStorage.userToken;
  }
  try {
    const res = await axios.get(`${Url}/ProfileFeedslistAll`, {
      params: { token },
    });

    dispatch({
      type: USER_FEEDS,
      payload: res.data.data,
      likes: res.data.likes,
    });
  } catch (err) {
    console.error(err);
  }
};

export const likeUserPost =
  ({ id, like, post_type }) =>
  async (dispatch) => {
    let token;

    if (localStorage.userToken) {
      token = localStorage.userToken;
    }

    const body = {
      post_id: id,
      like,
      token,
      post_type,
    };

    try {
      const res = await axios.post(`${Url}/Likes`, body);

      newAlert(res.data.success, "success");

      dispatch(listFeeds());
    } catch (err) {
      console.error(err);
    }
  };

export const createComment =
  ({ comment, id, setComment }) =>
  async (dispatch) => {
    let token;

    if (localStorage.userToken) {
      token = localStorage.userToken;
    }

    const body = {
      post_id: id,
      comment,
      token,
    };

    try {
      const res = await axios.post(`${Url}/PostComment`, body);

      newAlert(res.data.message, "success");
      setComment("");
      dispatch(listFeeds());
    } catch (err) {
      console.error(err);
    }
  };
