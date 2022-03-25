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
                user: payload.user,
                loading: false,
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

        default:
            return state;
    
    };
};



export {
    INITIAL_STATE,
    authReducer
};