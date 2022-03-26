export const AUTH_REGISTER = 'AUTH_REGISTER';
export const AUTH_REGISTER_OK = 'AUTH_REGISTER_OK';
export const AUTH_REGISTER_ERROR = 'AUTH_REGISTER_ERROR';

export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGIN_OK = 'AUTH_LOGIN_OK';
export const AUTH_LOGIN_ERROR = 'AUTH_LOGIN_ERROR';

export const CHECK_SESSION = "CHECK_SESSION";
export const CHECK_SESSION_OK = "CHECK_SESSION_OK";
export const CHECK_SESSION_ERROR = "CHECK_SESSION_ERROR";

export const registerUser = async (dispatch, user) => {
    try {
        console.log('función regiserUser -> ', user);
        dispatch({
            type: AUTH_REGISTER
        });

        const request = await fetch("http://localhost:4000/auth/register",{
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*", // matizar?
            },
            credentials: "include", //Si añado esta parte y el access-Control-Allow-Orgin no funciona, ¿por que?
            body: JSON.stringify(user),
        });

        const userData = await request.json();

        if (userData.ok) {
            dispatch({ type: AUTH_REGISTER_OK, payload: userData });
            localStorage.setItem('user', JSON.stringify(userData)); //Necesario?
            return userData;
        } else {
            dispatch({ type: AUTH_REGISTER_ERROR, payload: false }); //userData.error[0] viene del form? en su lugar añadimos false
            return;
        }


    } catch (error) {
        console.log('ERROR ->', error);
        dispatch({ type: AUTH_REGISTER_ERROR, payload: error });
        return;
    }
};


export const loginUser = async (dispatch, loginData) => {
    try {
        console.log('Función loginUser ->', loginData); //console log para pruebas, comentar o quitar cuando no sea necesario

        dispatch({ 
            type: AUTH_LOGIN 
        });

        const request = await fetch("http://localhost:4000/auth/login", {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*", // matizar?
            },
            credentials: "include",
            body: JSON.stringify(loginData)
        });
        console.log(request)

        const data = await request.json();
        console.log('data from server', data);

        if (request.ok) {
            dispatch({ type: AUTH_LOGIN_OK, payload: data });
            localStorage.setItem('user', JSON.stringify(data));
            return data;
        } else {
            dispatch({ type: AUTH_LOGIN_ERROR, payload: data.message }); //diferencias entre data.errors[0] y data.message
            return;
        }

    } catch (error) {
        dispatch({ type: AUTH_LOGIN_ERROR, payload: error });
        return;
    }
};

export const checkUserSession = () => {
    return async (dispatch) => {
        dispatch({ type: CHECK_SESSION });
        const request = await fetch("http://localhost:4000/auth/check-session", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            credentials: "include",
        });

        const data = await request.json();

        if (request.ok) {
            dispatch({ type: CHECK_SESSION_OK, payload: data });
        } else {
            dispatch({ type: CHECK_SESSION_ERROR, payload: data.message });
        }

    };
};