import { GET_USER_TICKET } from "./ticket.types";
import axios from "axios";
import { Url } from "../common/url";

export const listUserTicket = () => async (dispatch) => {
  let token;

  if (localStorage.userToken) {
    token = localStorage.userToken;
  }

  try {
    const res = await axios.post(`${Url}/LoadUserTicketAttendee`, { token });

    console.log(res.data);
    dispatch({
      type: GET_USER_TICKET,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
