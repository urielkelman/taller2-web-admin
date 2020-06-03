const API_KEY = process.env.REACT_APP_API_KEY;

const SERVER_ENDPOINT = process.env.REACT_APP_SERVER_ENDPOINT;

const API_KEY_PARAM = "?api_key=" + API_KEY;

export const USERS_ENDPOINT = SERVER_ENDPOINT + "/user";

export const CREATE_USER_ENDPOINT = USERS_ENDPOINT + API_KEY_PARAM;

export const LOGIN_ENDPOINT = USERS_ENDPOINT + "/login" + API_KEY_PARAM;

export const RECOVER_PASSWORD_ENDPOINT =
  USERS_ENDPOINT + "/recover_password" + API_KEY_PARAM;

export const NEW_PASSWORD_ENDPOINT =
  USERS_ENDPOINT + "/new_password" + API_KEY_PARAM;

export const REGISTERED_USERS_ENDPOINT =
  SERVER_ENDPOINT + "/registered_users" + API_KEY_PARAM;
