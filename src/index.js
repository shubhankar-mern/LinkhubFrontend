import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Screens/Homepage';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './Screens/Dashboard';
import View from './Screens/View';
import PrivateRoute from './Screens/PrivateRoute';
import '@radix-ui/themes/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const isTokenAvailable =()=>{
  let a=localStorage.getItem('jwtToken') !== null;
  return a
} 
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element = {<Homepage/>}/>
    <Route path="/login" element = {<Login/>}/>
    <Route path="/signup" element = {<Signup/>}/>

    <Route element={<PrivateRoute/>}>
      <Route exact path="/dashboard" element={<Dashboard />}/>
    </Route>
    
    
   
    <Route path="http://178.16.138.73:3000/Linkhub/screen/:linkId" element = {<View/>}/>
    
    </Routes> 
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
