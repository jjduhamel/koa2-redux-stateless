import { reducer } from "redux-form";

export const formReducer = reducer;
export default formReducer;

/*
import { combineForms } from "react-redux-form";

export const formReducer = combineForms({
  login: { username: "", password: "" },
  register: { username: "", password: "", "confirm-password": "" }
});

export default formReducer;
*/
