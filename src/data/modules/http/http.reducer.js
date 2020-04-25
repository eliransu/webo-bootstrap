import merge from "lodash/merge";
import get from "lodash/get";

import {
  HTTP_STATE_FETCH_STATUS,
  HTTP_STATE_FETCH_ERROR_MESSAGE
} from "./http.types";

const defaultState = {
  global: {
    count: 0,
    isLoading: false
  },
  toasts: {}
};

const httpReducer = (state = defaultState, action) => {
  switch (action.type) {
    case HTTP_STATE_FETCH_STATUS:
      const { count, component } = action.payload;
      const currentComponentState = get(state, [component], {});
      return merge({}, state, {
        [component]: merge({}, currentComponentState, {
          count: get(currentComponentState, "count", 0) + count,
          isLoading: get(currentComponentState, "count", 0) + count > 0
        })
      });
    case HTTP_STATE_FETCH_ERROR_MESSAGE:
      const { error } = action.payload;
      return merge({}, state, {
        [action.payload.component]: merge(
          {},
          get(state, [action.payload.component], {}),
          { error }
        )
      });
    default:
      return state;
  }
};

export default httpReducer;
