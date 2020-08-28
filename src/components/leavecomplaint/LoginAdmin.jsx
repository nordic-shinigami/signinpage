import React from "react";
import loginImg from "./login.svg";
import "./styles3.scss";

export default class Register extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="login">
          <div className="container">
            <div className="base-container">
      <div className="header">Login Admin</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="loginimage" />
          </div>
          <div className="form">
          <div className="form-group">
              <label htmlFor="UserName">UserName</label>
              <input type="text" name="UserName" placeholder="UserName" />
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password </label>
              <input type="password" name="Password"  />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Submit
          </button>
        </div>
      </div>
          </div>
        </div>
      </div>
    );
  }
}
