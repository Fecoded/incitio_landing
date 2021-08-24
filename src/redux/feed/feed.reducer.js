import { USER_FEEDS, LIST_FEEDS } from "./feed.types";

const INITIALSTATE = {
  userFeeds: [],
  userLikes: [],
  feeds: [],
  likes: [],
};

const Feed = (state = INITIALSTATE, action) => {
  const { type, payload, likes } = action;
  switch (type) {
    case USER_FEEDS:
      return {
        ...state,
        userFeeds: payload,
        userLikes: likes,
      };
    case LIST_FEEDS:
      return {
        ...state,
        feeds: payload,
        likes: likes,
      };

    default:
      return state;
  }
};

export default Feed;
