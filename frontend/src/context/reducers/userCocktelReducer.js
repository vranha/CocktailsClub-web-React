import * as actions from '../actions/orderActions';

const INITIAL_STATE = {
    order: {},
    loading: false,
    error: false,
};

const userCocktelReducer = ( state = INITIAL_STATE, action ) => {
    const { type, payload } = action;
    switch ( type ) {
        case actions.ORDER_GET: {
            return {
                ...state,
                loading: true,
            }
        }
        case actions.GET_ORDER_OK: {
            return {
                ...state,
                order: payload.order,
                error: false,
            }
        }
        case actions.GET_ORDER_ERROR: {
            return {
                ...state,
                error: true,
                loading: false
            }
        }

        default:
            return state;
    }
};

export {
    INITIAL_STATE,
    userCocktelReducer,
};