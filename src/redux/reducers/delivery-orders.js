const initialState = {
    orders: []
};

const SET_ORDERS = "SET_ORDERS";


const deliveryOrders = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDERS: {
            return {
                ...state,
                orders: [...state.orders, action.payload]
            }
        }
        default: {
            return state;
        }
    }
}

export const setOrders = (data) => ({
    type: SET_ORDERS,
    payload: data
});


export default deliveryOrders;