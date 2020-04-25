import {
  login
} from "./auth.service";
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from "./auth.types";

//! PLOP_APPEND_ACTION

export function loginAction() {
  return async function _(dispatch) {
    const promise = login(); // modify by your logic
    dispatch({
      type: [
        LOGIN_START,
        LOGIN_SUCCESS,
        LOGIN_FAILED
      ],
      payload: promise
    });
    return promise;
  };
}