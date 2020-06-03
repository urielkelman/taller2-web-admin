const API_KEY = process.env.REACT_APP_API_KEY

console.log('api_key: ', API_KEY)

const SERVER_ENDPOINT = "https://chotuve-auth-server.herokuapp.com"

const API_KEY_PARAM  = "?api_key=" + API_KEY

const USERS_ENDPOINT = SERVER_ENDPOINT + "/user" 

export const CREATE_USER_ENDPOINT = USERS_ENDPOINT + API_KEY_PARAM

export const LOGIN_ENDPOINT = USERS_ENDPOINT + "/login" + API_KEY_PARAM

export const RECOVER_PASSWORD_ENDPOINT = USERS_ENDPOINT + "/recover_password" + API_KEY_PARAM

export const NEW_PASSWORD_ENDPOINT = USERS_ENDPOINT + "/new_password" + API_KEY_PARAM

export const REGISTERED_USERS_ENDPOINT = SERVER_ENDPOINT + "/registered_users" + API_KEY_PARAM
