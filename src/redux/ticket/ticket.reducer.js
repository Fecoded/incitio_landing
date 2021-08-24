import { GET_USER_TICKET } from "./ticket.types";

const INITIALSTATE = {
  usertickets: [],
};

const Ticket = (state = INITIALSTATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_TICKET:
      return {
        ...state,
        usertickets: payload,
      };
    default:
      return state;
  }
};

export default Ticket;
