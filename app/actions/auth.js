import { createAction } from "redux-actions";

import { REFRESH_TOKEN, LOGIN, LOGOUT } from "../constants/actions";

import { get, post } from "./http";

const _refreshToken = createAction(REFRESH_TOKEN);
const _login = createAction(LOGIN);
const _logout = createAction(LOGOUT);

export function register(username, password) {
  return dispatch => {
    return dispatch(post("/auth/register", { username, password }))
    .then(data => {
      let { bearerToken, account } = data;
      dispatch(_refreshToken({ bearerToken }));
      dispatch(_login(account));
      return account;
    });
  }
}

export function login(username, password) {
  return dispatch => {
    return dispatch(post("/auth/login", { username, password }))
    .then(data => {
      let { bearerToken, account } = data;
      dispatch(_refreshToken({ bearerToken }));
      dispatch(_login(account));
      return account;
    });
  }
}

export function logout() {
  return dispatch => {
    return dispatch(post("/auth/logout"))
    .then(data => {
      dispatch(_logout());
      return;
    });
  }
}
