import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Schedule from "./components/Schedule";
import Employees from "./components/Employees";
import Dashboard from  "./components/Dashboard";
import Requests from  "./components/Requests";
import Settings from "./components/Settings";
import Login from "./components/Login";




function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/main" element = {<Main/>}>
              <Route path="dashboard" element = {<Dashboard/>}/>
              <Route path="schedule/*" element={<Schedule />} />
              <Route path="employees" element = {<Employees/>}/>
              <Route path="requests" element = {<Requests/>}/>
              <Route path="settings" element = {<Settings/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
