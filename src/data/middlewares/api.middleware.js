import get from "lodash/get";
import { message } from 'antd';
import {
  HTTP_STATE_FETCH_STATUS,
  HTTP_STATE_FETCH_ERROR_MESSAGE
} from "../modules/http/http.types";

export default store => next => action => {
  if (Array.isArray(action.type)) {
    const [START, SUCCESS, FAILED] = action.type;
    const component = action.component || "global";
    const { type, ...rest } = action;
    store.dispatch({ ...rest, type: START, payload: component });
    store.dispatch({
      type: HTTP_STATE_FETCH_STATUS,
      payload: { component, count: 1 }
    });
    action.payload
      .then(res => {
        if (
          get(res, "response.status") >= 400 ||
          get(res, "data.status") >= 400
        ) {
          throw new Error(res);
        }
        store.dispatch({ ...rest, type: SUCCESS, payload: res });
        store.dispatch({
          type: HTTP_STATE_FETCH_STATUS,
          payload: { component, count: -1 }
        });
      })
      .catch(error => {
        const errorMessage = get(error, "response.data", "system-error");
        if (typeof errorMessage === 'string' && errorMessage.toLowerCase() === "internal server error") {
        } else {
          message.error(errorMessage, 2);
        }
        store.dispatch({
          type: HTTP_STATE_FETCH_STATUS,
          payload: { component, count: -1 }
        });
        store.dispatch({ ...rest, type: FAILED, payload: error });
        store.dispatch({
          type: HTTP_STATE_FETCH_ERROR_MESSAGE,
          payload: { component, error: errorMessage }
        });
      });
  }
  return next(action);
};
