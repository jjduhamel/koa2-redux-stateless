import { combineReducers } from "redux";

import { reducer as formReducer } from "redux-form";
import { reducer as modalReducer } from "redux-modal";
import { routerReducer } from "react-router-redux";

//import formReducer from "./reducers/forms";
import httpReducer from "./http";
import profileReducer from "./profile";
import sessionReducer from "./session";

export default combineReducers({
  form: formReducer,
  http: httpReducer,
  modal: modalReducer,
  profile: profileReducer,
  session: sessionReducer,
  routing: routerReducer
});
