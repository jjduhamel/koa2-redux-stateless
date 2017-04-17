import _ from "lodash";
import { handleActions } from "redux-actions";

import { REFRESH_TOKEN, LOGIN, LOGOUT } from "../constants/actions";

const schema = {
  authed: false
};

export default handleActions({
  REFRESH_TOKEN: (state, action) => {
    let { bearerToken } = action.payload;
    return { ...state, bearerToken };
  },
  LOGIN: (state, action) => {
    let { status } = action.payload;
    return { ...state, authed: true, status };
  },
  LOGOUT: (state, action) => {
    return schema;
    //return { ...state, authed: false };
  }
}, schema);
