import _ from "lodash";
import util from "util";

import { SITE_PREFIX } from "../constants/site";

const _localStorageKey = key => util.format("%s:%s", SITE_PREFIX, key);

export const writeLocalStorage = (obj) => {
  _.each(obj, (val, key) => {
    return localStorage.setItem(_localStorageKey(key), val)
  });
};

export const readLocalStorage = (key) => {
  return localStorage.getItem(_localStorageKey(key));
};
