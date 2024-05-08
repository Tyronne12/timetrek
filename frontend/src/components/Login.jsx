import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import Meeting from "../Assets/Images/meeting.png";

function Login() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const [logStatus, setLogStatus] = useState(false);
  const [logMessage, setLogMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    fetch('/api/login', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then((response) => response.json())
    .then((data) =>{
        if(data.status == "success")
          window.location.href = '/main/dashboard';
        else{
          console.log(data.message);
          setLogStatus(true);
          setLogMessage(data.message)
        }
    })
  
  };

  return (
    <div className="login-page">
      <div className="left-section-login">
        <img className="meeting-img" src={Meeting} alt="Meeting"></img>
      </div>
      <div className="right-section-login">
        <h1 className="text-logo">Time<span className="trek">Trek</span></h1>
        <Form onSubmit={handleSubmit} className="login-form">
          {logStatus &&
            <p className="log-message">{logMessage}</p>
           }
          <Form.Group controlId="formName" className="log-input">
            <Form.Control 
              type="text" 
              placeholder="Enter your username" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="custom-input"
            />
          </Form.Group >

          <Form.Group controlId="formPassword" className="log-input">
            <Form.Control 
              type="password" 
              placeholder="Enter your password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              className="custom-input"
            />
          </Form.Group>

          <button type="submit" className="login-btn">Login</button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
