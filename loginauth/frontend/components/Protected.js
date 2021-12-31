import React from "react";
import {Outlet} from 'react-router-dom'
import Login from "./Login";


const Protected = () => {
    const token = localStorage.getItem("auth");
    return token ? <Outlet/> : <Login/>

}
export default Protected