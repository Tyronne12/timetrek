import React, { useState } from "react";
import { Link } from "react-router-dom";
import dashicon from "../Assets/Images/dashboard-icon.png";
import schedicon from "../Assets/Images/sched-icon.png";
import employeesicon from "../Assets/Images/employees-icon.png";
import requesticon from "../Assets/Images/request-icon.png";
import settingsicon from "../Assets/Images/settings-icon.png";
import logouticon from "../Assets/Images/logout.png";
import SetSessionUser from "./SetSessionUser";
import Profile from "../Assets/Images/profile1.avif"

function Sidebar() {
  const [activeRoute, setActiveRoute] = useState("dashboard");
  const [user, setUser] = useState(null);
  const [isAdmin, setAdmin] = useState(false);


  console.log(user);
  const clickRoutes = (route) => {
    setActiveRoute(route);
  };

  const logout = () =>{
    window.location.href = '/login';
  }

  return (
    <div className="sidebar">
      <SetSessionUser setUser={setUser} setAdmin={setAdmin} />
      <div className="sidebar-header">
        <div className="profile-pic-container">
          <img className="display-pic" src={Profile}/>
        </div>
        <div className="name-container">
          <h4 className="name-text">{user && user.first_name}</h4>
        </div>
      </div>
      <div className="routes-container">
        <Link
          to="/main/dashboard"
          className="routes"
          onClick={() => clickRoutes("dashboard")}
          style={{
            backgroundColor: activeRoute === "dashboard" ? "#586156" : "",
          }}
        >
          <img src={dashicon} className="sidebar-icon" alt="Dashboard Icon" />
          <h4 className="route-text">Dashboard</h4>
        </Link>
        <Link
          to="/main/schedule"
          className="routes"
          onClick={() => clickRoutes("schedule")}
          style={{
            backgroundColor: activeRoute === "schedule" ? "#586156" : "",
          }}
        >
          <img src={schedicon} className="sidebar-icon" alt="Schedule Icon" />
          <h4 className="route-text">Schedule</h4>
        </Link>
        <Link
          to="/main/employees"
          className="routes"
          onClick={() => clickRoutes("employees")}
          style={{
            backgroundColor: activeRoute === "employees" ? "#586156" : "",
          }}
        >
          <img src={employeesicon} className="sidebar-icon" alt="Employees Icon" />
          <h4 className="route-text">Employees</h4>
        </Link>
        <Link
          to="/main/requests"
          className="routes"
          onClick={() => clickRoutes("requests")}
          style={{
            backgroundColor: activeRoute === "requests" ? "#586156" : "",
          }}
        >
          <img src={requesticon} className="sidebar-icon" alt="Request Icon" />
          <h4 className="route-text">Requests</h4>
        </Link>
        <Link
          to="/main/settings"
          className="routes"
          onClick={() => clickRoutes("settings")}
          style={{
            backgroundColor: activeRoute === "settings" ? "#586156" : "",
          }}
        >
          <img src={settingsicon} className="sidebar-icon" alt="Settings Icon" />
          <h4 className="route-text">Settings</h4>
        </Link>
      </div>
      <div>
        <div className="routes" onClick={logout}>
        <img src={logouticon} className="sidebar-icon" alt="Logout Icon" />
          <h4 className="route-text">Logout</h4>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
