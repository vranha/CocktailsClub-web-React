import * as actions from '../actions/auth.actions';

const INITIAL_STATE = {
    user: null,
    loading: false,
    error: '',
};

const authReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch (type) {
        case actions.AUTH_REGISTER: {
            return {...state, loading: true}
        }
        case actions.AUTH_REGISTER_OK: {
            return {
                ...state, 
                user: payload.user,
                loading: false,
            }
        }
        case actions.AUTH_REGISTER_ERROR: {
            return {
                ...state,
                loading: false,
                error: payload,
                user: false
            }
        }
        case actions.AUTH_LOGIN: {
            return {
                ...state, 
                loading: true
            }
        }
        case actions.AUTH_LOGIN_OK: {
            return {
                ...state,
                user: payload,
                loading: false,
                error: '',
            }
        }
        case actions.AUTH_LOGIN_ERROR: {
            return {
                ...state,
                loading: false,
                error: payload,
                user: false
            }
        }
        case actions.CHECK_SESSION: {
            return {
                ...state,
                loading: true,
                error: false,
            }
        }
        case actions.CHECK_SESSION_OK: {
            return {
                ...state,
                user: payload,
                loading: false,
                error: false,
            }
        }
        case actions.CHECK_SESSION_ERROR: {
            return {
                ...state,
                error: '',
                user: false,
                loading: false
            }
        }
        case actions.LOGOUT_USER: {
            return {
                ...state,
                loading: true,
            }
        }
        case actions.LOGOUT_USER_OK: {
            return {
                ...state,
                user: false,
                loading: false,
            }
        }
        case actions.LOGOUT_USER_ERROR: {
           return { 
                ...state,
                loading: false,
                error: payload,
           }
        }

        default:
            return state;
    
    };
};



export {
    INITIAL_STATE,
    authReducer
};