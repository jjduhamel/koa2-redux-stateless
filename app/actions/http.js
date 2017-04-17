import axios from "axios";
import uuid from "uuid";

import { createAction } from "redux-actions";

import {
  HTTP_REQUEST, HTTP_RESPONSE, HTTP_ERROR
} from "../constants/actions";
import { HTTP_GET, HTTP_POST } from "../constants/http";

const request = createAction(HTTP_REQUEST);
const response = createAction(HTTP_RESPONSE);
const error = createAction(HTTP_ERROR);

export function get(path, query) {
  return dispatch => {
    let id = uuid.v4();
    dispatch(request({ id, method: HTTP_GET, path, data: query }));
    return axios.get(path, {
      params: query
    })
    .then(res => {
      let { status, data, headers } = res;
      dispatch(response({ id, status, data, headers }));
      return data;
    })
    .catch(err => {
      let { status, data, headers } = err.response;
      dispatch(response( id, { status, data, headers }));
      dispatch(error({ id, status, data, headers }));
      throw new Error(data);
    });
  };
}

export function post(path, body) {
  return dispatch => {
    let id = uuid.v4();
    dispatch(request({ id, method: HTTP_POST, path, data: body }));
    return axios.post(path, body)
    .then(res => {
      let { status, data, headers } = res;
      dispatch(response({ id, status, data, headers }));
      return data;
    })
    .catch(err => {
      let { status, data, headers } = err.response;
      dispatch(response({ id, status, data, headers }));
      dispatch(error({ id, status, data, headers }));
      throw new Error(data);
    });
  };
}
