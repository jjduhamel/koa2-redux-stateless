import {
  MISSING_LOWERCASE, MISSING_UPPERCASE,
  MISSING_NUMBER, MISSING_SYMBOL,
  PASSWORD_OK
} from "../constants/password";

export const validatePassword = password => {
  if (!/[a-z]/.test(password)) {
    return MISSING_LOWERCASE;
  } else if (!/[A-Z]/.test(password)) {
    return MISSING_UPPERCASE;
  } else if (!/[1-9]/.test(password)) {
    return MISSING_NUMBER;
  } else if (!/[!@#$%^&*]/.test(password)) {
    return MISSING_SYMBOL;
  }
  return PASSWORD_OK;
}
