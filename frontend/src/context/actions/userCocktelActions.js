export const POST_USERCOCKTEL = 'POST_USERCOCKTEL';
export const POST_USERCOCKTEL_OK = 'POST_USERCOCKTEL_OK';
export const POST_USERCOCKTEL_ERROR = 'POST_USERCOCKTEL_ERROR';

export const postUserCocktel = async (dispatch) => {
    console.log('order here');
    try {
        dispatch({ POST_USERCOCKTEL });

        const request = await fetch('http://localhost:4000/order/usercocktel', {
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
            dispatch({ type: POST_USERCOCKTEL_OK, payload: data });
        } else {
            dispatch({ type: POST_USERCOCKTEL_ERROR, payload: data.message });
        }

    } catch (error) {
        dispatch({ type: POST_USERCOCKTEL_ERROR, payload: error });
    }
};