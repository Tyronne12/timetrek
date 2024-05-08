import React, {useState, useEffect} from "react";
import {Link, Outlet, Routes, Route} from "react-router-dom";
import ScheduleIcon from "../Assets/Images/sched-icon4.png";
import AddNewSchedIcon from "../Assets/Images/add-new-sched.png";
import LogIcon from "../Assets/Images/log-icon3.png";
import RecordsIcon from "../Assets/Images/records-icon.png";
import NewSchedule from "./NewSchedule";
import MonthlySchedule from "./MonthlySchedule";
import Allocations from "./Allocations";
import Records from "./Records";
import "../App.css";

function Schedule () {
    const [activeRoute, setActiveRoute] = useState("dashboard");

    const clickRoutes = (route) => {
        setActiveRoute(route);
      };
    
    return(
        <div className="schedule-route">
            <div className="sub-sidebar">
                <Link 
                    className="sub-sidebar-icon-container" 
                    to="/main/schedule/monthly_schedule"
                    onClick={() => clickRoutes("dashboard")}
                    style={{
                      backgroundColor: activeRoute === "dashboard" ? "#02270D" : "",
                    }}
                >
                    <p className="sub-sidebar-icon-text">Monthly Schedule</p>
                    <img className="sub-sidebar-icon"  src={ScheduleIcon} />
                </Link>
                <Link 
                    className="sub-sidebar-icon-container" 
                    to="/main/schedule/new_schedule"
                    onClick={() => clickRoutes("new_schedule")}
                    style={{
                      backgroundColor: activeRoute === "new_schedule" ? "#02270D" : "",
                    }}
                >
                    <p className="sub-sidebar-icon-text">New Schedule</p>
                    <img className="sub-sidebar-icon"  src={AddNewSchedIcon} />
                </Link>
                <Link 
                    className="sub-sidebar-icon-container"
                    to="/main/schedule/allocations"
                    onClick={() => clickRoutes("allocations")}
                    style={{
                      backgroundColor: activeRoute === "allocations" ? "#02270D" : "",
                    }}
                >
                    <p className="sub-sidebar-icon-text">Allocations</p>
                    <img className="sub-sidebar-icon"  src={LogIcon} />
                </Link>
                <Link 
                    className="sub-sidebar-icon-container"
                    to="/main/schedule/records"
                    onClick={() => clickRoutes("records")}
                    style={{
                      backgroundColor: activeRoute === "records" ? "#02270D" : "",
                    }}
                >
                    <p className="sub-sidebar-icon-text">Records/Logs</p>
                    <img className="sub-sidebar-icon" src={RecordsIcon} />
                </Link>
            </div>
            <div className="schedule-content-side"></div>
    
            <div className="schedule-content-main">
                <Routes>
                    <Route index element={<MonthlySchedule/>} />
                    <Route path="monthly_schedule" element={<MonthlySchedule/>} />
                    <Route path="new_schedule" element={<NewSchedule />} />
                    <Route path="allocations" element={<Allocations/>} />
                    <Route path="records" element={<Records/>} />
                </Routes>
            </div>
            <div>
            </div>
        </div>
    )
}



export default Schedule;