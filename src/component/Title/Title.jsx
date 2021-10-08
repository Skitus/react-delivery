import React from "react";
import {useSelector} from "react-redux";
import "./Title.scss";

const Title = () => {
    const orders = useSelector(({deliveryOrders}) => deliveryOrders.orders);

    return (
        <div className="title-block">
            <h1 className="title">Packages</h1>
            <span className="count-entries">{orders.length} entries</span>
        </div>
    );
}

export default Title;