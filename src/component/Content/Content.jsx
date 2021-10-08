import React, {useState} from "react";
import Input from "../Input/Input";
import Title from "../Title/Title";
import Table from "../Table/Table";
import "./Content.scss";

const Content = () => {
    const [value, setValue] = useState("");
    const handler = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className="content">
            <Input handler={(event) => handler(event)} value={value}/>
            <Title />
            <Table client={value}/>
        </div>
    );
}

export default Content;