import { createAction } from "redux-actions";

import { get, post } from "./http";

import { REFRESH_PROFILE } from "../constants/actions";

const _refreshProfile = createAction(REFRESH_PROFILE);

export function getProfile() {
  return dispatch => {
    return dispatch(get("/profile"))
    .then(data => {
      const { profile } = data;
      dispatch(_refreshProfile(profile));
      return { profile };
    });
  }
}

export function updateProfile(newProfile) {
  return dispatch => {
    return dispatch(post("/profile", newProfile))
    .then(data => {
      const { profile } = data;
      dispatch(_refreshProfile(profile));
      return { profile };
    });
  }
}
