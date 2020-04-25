import { LOGIN_SUCCESS } from "./auth.types";

const defaultState = {
  activeUser: null
};

function authReducer(state = defaultState, action) {
  switch (action.type) {

    //! PLOP_APPEND_REDUCER

    case LOGIN_SUCCESS: {
      return { ...state, activeUser: action.payload }; // add your logic here
    }
    default: {
      return state;
    }
  }
}

export default authReducer;