export const SHOW_LOGIN_EMAIL_ERROR_MESSAGE = 'SHOW_EMAIL_LOGIN_ERROR_MESSAGE'

const initialState = {
    showEmailErrorMessage: false
}

export const loginErrorReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_LOGIN_EMAIL_ERROR_MESSAGE:
            return {...state, showEmailErrorMessage: action.payload}
        default:
            return state
    }
}

