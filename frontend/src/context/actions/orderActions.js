export const GET_ORDER = 'GET_ORDER';
export const GET_ORDER_OK = 'GET_ORDER_OK';
export const GET_ORDER_ERROR = 'GET_ORDER_ERROR';

export const getOrder = async (dispatch) => {
    console.log('order here');
    try {
        dispatch({ GET_ORDER });

        const request = await fetch('http://localhost:4000/order', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            credentials: "include",
        });

        const data = await request.json();
        console.log("orderActions ",data);
        if (request.ok) {
            dispatch({ type: GET_ORDER_OK, payload: data });
        } else {
            dispatch({ type: GET_ORDER_ERROR, payload: data.message });
        }

    } catch (error) {
        dispatch({ type: GET_ORDER_ERROR, payload: error });
    }
};