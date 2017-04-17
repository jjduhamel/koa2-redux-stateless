import _ from "lodash";
import { handleActions } from "redux-actions";

import { REFRESH_PROFILE, LOGOUT } from "../constants/actions";

const schema = {
  username: undefined,
  email: undefined,
  firstName: undefined,
  lastName: undefined,
  phoneNumber: undefined
};

const profileFields = _.keys(schema);

export default handleActions({
  REFRESH_PROFILE: (state, action) => {
    let profile = _.pick(action.payload, profileFields);
    return { ...state, ..._.pickBy(profile) };
  },
  LOGOUT: (state, action) => {
    return schema;
  }
}, schema);
