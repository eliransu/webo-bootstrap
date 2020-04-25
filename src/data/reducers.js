import { combineReducers } from "redux";
//! PLOP MAIN_REDUCERS_IMPORT

import auth from "./modules/auth/auth.reducer";

export default combineReducers({
  //! PLOP MAIN_REDUCERS_APPEND
  auth
});
