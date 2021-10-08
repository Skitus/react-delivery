import React from "react";
import search from "../../img/search-icon.svg";
import "./Input.scss";

const Input = ({handler, value}) => {
    const chengeHandler = (event) => {
        handler(event);
    }

    return (
            <label className="flex-label">
                <img src={search} className="icon-search"/>
                <input value={value} onChange={(event) => chengeHandler(event)} type="text" className="search" placeholder="Search package, client or courier"/>
            </label>
    );
}

export default Input;