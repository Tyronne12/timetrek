import React from "react";
import { Outlet } from 'react-router-dom';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Main(){
    return(
        <div className="main">
            <Navbar />
            <Sidebar />
            <Outlet />
        </div>
    )
}


export default Main;