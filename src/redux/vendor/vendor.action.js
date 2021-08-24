import { LIST_VENDORS, LIST_VENDORS_SUGGESTIONS } from "./vendor.types";
import axios from "axios";
import { Url } from "../common/url";

export const listVendors = () => async (dispatch) => {
  let token;

  if (localStorage.userToken) {
    token = localStorage.userToken;
  }

  try {
    const res = await axios.get(`${Url}/listVendorsCategory`, {
      params: { token },
    });

    dispatch({
      type: LIST_VENDORS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const listVendorsSuggestion = () => async (dispatch) => {
  let token;

  if (localStorage.userToken) {
    token = localStorage.userToken;
  }

  try {
    const res = await axios.post(`${Url}/listAllSuggestion`, { token });

    dispatch({
      type: LIST_VENDORS_SUGGESTIONS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
