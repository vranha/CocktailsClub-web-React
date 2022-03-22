export const AUTH_REGISTER = 'AUTH_REGISTER';
export const AUTH_REGISTER_OK = 'AUTH_REGISTER_OK';
export const AUTH_REGISTER_ERROR = 'AUTH_REGISTER_ERROR';


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
                // "Access-Control-Allow-Origin": "*", // matizar?
            },
            // credentials: "include", //Si añado esta parte y el access-Control-Allow-Orgin no funciona, ¿por que?
            body: JSON.stringify(user),
        });

        const userData = await request.json();

        if (userData.ok) {
            dispatch({ type: AUTH_REGISTER_OK, payload: userData });
            // localStorage.setItem('user', JSON.stringify(userData)); //Necesario?
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

