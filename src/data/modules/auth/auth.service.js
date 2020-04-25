import axios from "axios";
import get from "lodash/get";
import { login as firebaseLogin } from '../../../fb';
//! PLOP_APPEND_SERVICE

export async function login() {
  return firebaseLogin();
}