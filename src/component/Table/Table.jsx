import React, {useState} from "react";
import {useForm} from "react-hook-form";
import FormErrorMessage from "../FormErrorMessage/FormErrorMessage";
import {useDispatch, useSelector} from "react-redux";
import {setOrders} from "../../redux/reducers/delivery-orders";
import "./Table.scss";


const Table = ({client}) => {
    const dispatch = useDispatch();
    const orders = useSelector(({deliveryOrders}) => deliveryOrders.orders);
    const [toggle, setToggle] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = data => {
        dispatch(setOrders(data));
    };

    const filteredOrders = orders.filter((order ) => {
        return order.client.toLowerCase().includes(client.toLowerCase());
    })

    return (
        <div className="flex-table">
            <div className="table-block">
                <table className="table-delivery">
                    <thead className="title-table">
                    <tr>
                        <th>ID</th>
                        <th>Client</th>
                        <th>Pickup Address</th>
                        <th>Drop off Address</th>
                        <th>Courier</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody className="content-table">
                    {
                        filteredOrders.map((cage) =>
                            <tr key={cage.id}>
                                <td className="id"><p>#{cage.id}</p></td>
                                <td><p>{cage.client}</p></td>
                                <td><p>{cage.pickUpAdress}</p></td>
                                <td><p>{cage.dropOffAdress}</p></td>
                                <td><p>{cage.courier}</p></td>
                                <td id="flex-td"><p className="status"><span>&#10026;</span>online</p></td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                {
                    toggle &&
                    <form className="form-table" onSubmit={handleSubmit(onSubmit)}>
                        <div className="errors-input">
                            <div className="flex">
                                <input  {...register("id", {
                                    required: "This input is required",
                                    maxLength: {
                                        value: 10,
                                        message: "Maximum length is 10"
                                    },
                                    pattern: {
                                        value: /^\d+$/,
                                        message: "Put only digits"
                                    }
                                })}
                                        className="input-form" placeholder="ID"/>
                                <FormErrorMessage message={errors.id?.message}/>
                            </div>
                        </div>
                        <div className="errors-input">
                            <div className="flex">
                                <input {...register("client", {required: "This input is required"})}
                                       className="input-form" placeholder="Client"/>
                                <FormErrorMessage message={errors.client?.message}/>
                            </div>
                        </div>
                        <div className="errors-input">
                            <div className="flex">
                                <input {...register("pickUpAdress")}
                                       className="input-form" placeholder="pickup Adress"/>
                            </div>
                        </div>
                        <div className="errors-input">
                            <div className="flex">
                                <input {...register("dropOffAdress")}
                                       className="input-form" placeholder="dropoff Adress"/>
                            </div>
                        </div>
                        <div className="errors-input">
                            <div className="flex">
                                <input {...register("courier")}
                                       className="input-form" placeholder="Courier"/>
                            </div>
                        </div>
                        <button type="submit" className="button-submit">Add</button>
                    </form>
                }
            </div>
            <div>
                <button className="button-add" onClick={() => setToggle(!toggle)}>+</button>
            </div>
        </div>
    );
}

export default Table;