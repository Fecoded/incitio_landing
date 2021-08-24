import { LIST_VENDORS, LIST_VENDORS_SUGGESTIONS } from "./vendor.types";

const INITIALSTATE = {
  vendors: [],
  vendorsuggestions: [],
};

const Vendor = (state = INITIALSTATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_VENDORS:
      return {
        ...state,
        vendors: payload,
      };
    case LIST_VENDORS_SUGGESTIONS:
      return {
        ...state,
        vendorsuggestions: payload,
      };
    default:
      return state;
  }
};

export default Vendor;
