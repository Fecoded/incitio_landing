import {
  GET_USER_CHAT,
  GET_FULL_CHAT,
  SEND_MESSAGE,
  FILTER_CHAT,
} from "./chat.types";

const INITIALSTATE = {
  userChats: [],
  chats: [],
  filtered: null,
};

const Chat = (state = INITIALSTATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_CHAT:
      return {
        ...state,
        userChats: payload,
      };
    case GET_FULL_CHAT:
      return {
        ...state,
        chats: payload.reverse(),
      };
    case SEND_MESSAGE:
      return {
        ...state,
        chats: [...state.chats, payload],
      };
    case FILTER_CHAT:
      return {
        ...state,
        filtered: state.userChats.filter((chat) => {
          const regex = new RegExp(`${payload}`, "gi");
          return chat.name.match(regex) || chat.lastMessage.match(regex);
        }),
      };
    default:
      return state;
  }
};

export default Chat;
