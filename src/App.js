import React, { Component } from 'react';
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Components/Page/Register';
import Home from './Components/Home/Home';
import Login from './Components/Page/Login';
import ForgetPassword from './Components/Page/ForgetPassword';
import RecoverPassword from './Components/Page/RecoverPassword';
import DataTable from './Components/Page/DataTable';
import Widget from './Components/Page/Widget'
import ChartJs from './Components/Page/ChartJs';
import General from './Components/Page/General';
import Dashboard1 from './Components/Page/Dashboard1';
import Dashboard2 from './Components/Page/Dashboard2';

class App extends Component{
  constructor(props){
    super(props)
  } 
  
  render(){


    return (
      
      <div className="App">
        <div className="wrapper">

           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />}> </Route>
            <Route path="/login" element={<Login />}> </Route>
            <Route path="/forgetpassword" element={<ForgetPassword />}> </Route>
            <Route path="/recoverpassword" element={<RecoverPassword />}> </Route>
            <Route path="/datatable" element={<DataTable />}> </Route>
            <Route path="/datatable" element={<DataTable />}> </Route>
            <Route path="/widget" element={<Widget />}> </Route>
            <Route path="/chartjs" element={<ChartJs />}> </Route>
            <Route path="/general" element={<General />}> </Route>
            <Route path="/dashboard1" element={<Dashboard1 />}> </Route>
            <Route path="/dashboard2" element={<Dashboard2 />}> </Route>
            
          </Routes>

        </div>
      </div>
    );
  }
}

export default App;
