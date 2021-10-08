import React from "react";
import "./Sidebar.scss";
import logo from "../../img/logo.svg";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src={logo} className="logo"/>
        </div>
    );
}

export default Sidebar;