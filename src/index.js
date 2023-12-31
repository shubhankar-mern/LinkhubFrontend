import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Screens/Homepage';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import Dashboard from './Screens/Dashboard';
import View from './Screens/View';
import Contact from './Screens/Contact';
import About from './Screens/About';
import PrivateRoute from './Screens/PrivateRoute';
import './app.css';
import '@radix-ui/themes/styles.css';
import Privacy from './Screens/Privacy';
import Terms from './Screens/Terms';
import ScrollToTop from './Components/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
const isTokenAvailable =()=>{
  let a=localStorage.getItem('jwtToken') !== null;
  return a
} 
root.render(
  <BrowserRouter basename='/'>
    <ScrollToTop/>
  <Routes>
  
    <Route path="/" element = {<Homepage/>}/>
    <Route path="/login" element = {<Login/>}/>
    <Route path="/signup" element = {<Signup/>}/>
    <Route path="/Linkhub/screen/:linkId" element = {<View/>}/>
    <Route element={<PrivateRoute/>}>
      <Route exact path="/dashboard" element={<Dashboard />}/>
    </Route>
    <Route path="/contactus" element = {<Contact/>}/>
    <Route path="/aboutus" element = {<About/>}/>
    <Route path="/privacy" element = {<Privacy/>}/>
    <Route path="/terms" element = {<Terms/>}/>
     {/* Catch-all route */}
     {/* <Route
          path="*"
          element={
            // Redirect to index.html
            <Navigate to="/index.html" />
          }
        /> */}
    
    
    </Routes> 
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
