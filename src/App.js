import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/navigation/NavigationBar';
import LoginAdmin from './components/leavecomplaint/LoginAdmin';
import LoginStudent from './components/leavecomplaint/LoginStudent'
function App() {
  return (
    <div>
        <NavigationBar />
        <div className="container box">
        <LoginAdmin />
        <LoginStudent />
        </div>
    </div>
  );
}

export default App;
