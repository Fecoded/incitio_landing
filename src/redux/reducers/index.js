import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import common from "../common/commonReducer";
import user from "../user/user.reducer";
import vendor from "../vendor/vendor.reducer";
import feed from "../feed/feed.reducer";
import event from "../event/event.reducer";
import friend from "../friend/friend.reducer";
import group from "../group/group.reducer";
import ticket from "../ticket/ticket.reducer";
import chat from "../chat/chat.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};

const rootReducer = combineReducers({
  common,
  user,
  vendor,
  feed,
  event,
  friend,
  group,
  ticket,
  chat,
});

export default persistReducer(persistConfig, rootReducer);
