import {createStore, combineReducers, compose} from 'redux';
import deliveryOrders from "./reducers/delivery-orders";
import {persistStore} from "redux-persist";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    deliveryOrders
});

const persistCongig = {
    key: "root",
    storage,
    whitelist: ["deliveryOrders"]
};

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistReducer(persistCongig, rootReducer), composeEnhansers());

export const persistor = persistStore(store);

export default { store, persistStore};
