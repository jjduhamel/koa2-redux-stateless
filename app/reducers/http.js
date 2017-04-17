import { handleActions } from "redux-actions";

import { HTTP_REQUEST, HTTP_RESPONSE, HTTP_ERROR } from "../constants/actions";
import { HTTP_GET, HTTP_POST } from "../constants/http";

const schema = {
};

export default handleActions({
  HTTP_REQUEST: (state, action) => {
    return state;
  },
  HTTP_RESPONSE: (state, action) => {
    return state;
  },
  HTTP_ERROR: (state, action) => {
    return state;
  }
}, schema);
