import { LIST_USER_GROUPS, LIST_SUGGESTED_GROUP } from "./group.types";
import axios from "axios";
import { Url } from "../common/url";
import { newAlert } from "../common/Alert";

// GET USER GROUP
export const listUserGroup = () => async (dispatch) => {
  let token;

  if (localStorage.userToken) {
    token = localStorage.userToken;
  }
  try {
    const res = await axios.post(`${Url}/GetUserGroup`, { token });

    dispatch({
      type: LIST_USER_GROUPS,
      payload: res.data,
    });
  } catch (err) {
    // const errors = err.response.data;

    newAlert(err, "error");
  }
};

// GET USER SUGGESTED GROUP
export const listUserSuggestedGroup = () => async (dispatch) => {
  let token;

  if (localStorage.userToken) {
    token = localStorage.userToken;
  }

  try {
    const res = await axios.post(`${Url}/GetUserSuggestedGroup`, { token });

    dispatch({
      type: LIST_SUGGESTED_GROUP,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

// CREATE GROUP
export const createGroup =
  ({ title, desc, type, username, cover, picture, members }) =>
  async (dispatch) => {
    let token;

    if (localStorage.userToken) {
      token = localStorage.userToken;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("type", type);
    formData.append("username", username);
    formData.append("members", members);
    // formData.append("picture", picture, picture.name);
    // formData.append("cover", cover, cover.name);
    formData.append("token", token);

    try {
      const res = await axios.post(`${Url}/PostCreateGroup`, formData);

      dispatch(listUserGroup());
      newAlert(res.data.message, "success");
    } catch (err) {
      newAlert(err, "error");
    }
  };
