import { createAction } from "redux-actions";

import {
  REFRESH_HEALTH, REFESH_SESSION
} from "../constants/actions";

import { get, post } from "./http";

export function checkHealth() {
  return dispatch => {
    dispatch(post("/health"))
    .then(data => {
      let action = createAction(REFRESH_HEALTH);
      let ok = ("OK" === data);
      dispatch(action(ok));
      return ok;
    });
  }
}
