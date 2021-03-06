const SERVER_ENDPOINT = process.env.REACT_APP_SERVER_ENDPOINT;

const USERS_ENDPOINT = SERVER_ENDPOINT + "/user";

export const CREATE_USER_ENDPOINT = USERS_ENDPOINT

export const LOGIN_ENDPOINT = USERS_ENDPOINT + "/login"

export const RECOVER_PASSWORD_ENDPOINT = USERS_ENDPOINT + "/recover_password"

export const NEW_PASSWORD_ENDPOINT = USERS_ENDPOINT + "/new_password"

export const REGISTERED_USERS_ENDPOINT = SERVER_ENDPOINT + "/users"

export const EDIT_USER_ENDPOINT = USERS_ENDPOINT

export const VIDEOS_ENDPOINT = SERVER_ENDPOINT + "/videos"

export const DELETE_VIDEO_ENDPOINT = USERS_ENDPOINT + "/video"

export const GET_STATS_ENDPOINT = SERVER_ENDPOINT + "/api_call_statistics"

export const APP_SERVERS_ENDPOINT = SERVER_ENDPOINT + "/app_servers"

