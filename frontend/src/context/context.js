import { createContext, useContext, useReducer } from 'react';
import { INITIAL_STATE, authReducer } from './reducers/auth.reducer';

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();


const useAuthState = () => {
    const authContext = useContext(AuthStateContext);

    if (authContext === undefined) {
        throw new Error('useAuthSate debe usuarse dentro de un <AuthProvider></AuthProvider>');
    };

    return authContext;
};

const useAuthDispatch = () => {
    const authDispatchContext = useContext(AuthDispatchContext);

    if (authDispatchContext === undefined) {
        throw new Error('useAuthDispatch debe usarse dentro de un <AuthProvider></AuthProvider>');
    };

    return authDispatchContext;
};

const AuthProvider = (props) => {
    const [user, dispatch] = useReducer(authReducer, INITIAL_STATE);

    return (
        <AuthStateContext.Provider value={user}>
            <AuthDispatchContext.Provider value={dispatch}>
                {props.children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    );
};

export {
    useAuthState,
    useAuthDispatch,
    AuthProvider,
};